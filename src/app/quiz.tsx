import { Stack, useRouter, useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { View, Text, Alert, Image, TouchableOpacity } from "react-native";
import Question from "./components/Questions";
import Timer, { TimerProps } from "./components/Quiz/Timer";
import Header from "./components/Quiz/Header";
import { questionsLevel1 } from "../data/questionsLevel1";
import { questionsLevel2 } from "../data/questionsLevel2";
import { questionsLevel3 } from "../data/questionsLevel3";
import { Audio } from "expo-av";
import { API_BASE_URL } from "../../config";

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

const questionSets: { [key in 1 | 2 | 3]: Question[] } = {
  1: questionsLevel1,
  2: questionsLevel2,
  3: questionsLevel3,
};

export default function QuizScreen() {
  const { nivel, userId } = useLocalSearchParams();
  const nivelNumerico = parseInt(nivel as string, 10) as 1 | 2 | 3;
  const questions: Question[] = questionSets[nivelNumerico] || questionsLevel1;
  const [showResultModal, setShowResultModal] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [quizFinished, setQuizFinished] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isTimedOut, setIsTimedOut] = useState(false);
  const [answerHistory, setAnswerHistory] = useState<boolean[]>([]);
  const [lives, setLives] = useState(3);
  const [showExplanation, setShowExplanation] = useState(false);
  const router = useRouter();

  const handleAnswer = (answer: string) => {
    const isCorrect = answer === questions[currentQuestion].correctAnswer;

    setAnswerHistory((prev) => [...prev, isCorrect]);

    if (isCorrect) {
      setScore((prev) => prev + 10);
    } else {
      setLives((prev) => prev - 1);
    }

    setShowExplanation(true);
    setSelectedOption(answer);
  };

  const handleNextQuestion = () => {
    setShowExplanation(false);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(null);
      setTimeLeft(30);
      setIsTimedOut(false);
    } else {
      setQuizFinished(true);
    }
  };

  useEffect(() => {
    console.log("Score:", score);
  }, [score]);

  const onTimeOut = () => {
    if(!quizFinished && !showExplanation) {
      if (selectedOption) {
        handleAnswer(selectedOption);
      } else {
        setIsTimedOut(true);
        setScore((prev) => prev - 2);
        setAnswerHistory((prev) => [...prev, false]);
        setLives((prev) => prev - 1);
        setShowExplanation(true);
      }
    }
  };

  const handleNext = () => {
    if (isTimedOut && currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setTimeLeft(30);
      setIsTimedOut(false);
    }
  };

  const updateUserData = async () => {
    try {
      const pontosField = `pontosNvl${nivelNumerico}` as
        | "pontosNvl1"
        | "pontosNvl2"
        | "pontosNvl3";

      const updateData: { nivel?: number; [key: string]: number | undefined } = {
        [pontosField]: score,
      };

      if (lives > 0 && quizFinished && nivelNumerico < 3) {
        updateData.nivel = nivelNumerico + 1;
      }

      const response = await fetch(`${API_BASE_URL}/usuarios/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      });

      if (!response.ok) {
        throw new Error("Erro ao atualizar os dados do usuário.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Não foi possível atualizar os dados do usuário.");
    }
  };

  useEffect(() => {
	if (lives <= 0 || quizFinished) {
      setQuizFinished(true);
      updateUserData().then(() => {
        setShowResultModal(true);
      });
    }
  }, [lives, quizFinished, score, router, nivelNumerico, userId]);

  useEffect(() => {
    if (questions.length === 0) {
      router.replace("/home");
    }
  }, [questions, router]);

  const timer: TimerProps = {
    timeLeft,
    setTimeLeft,
    onTimeOut,
  };

  return (
    <View className="flex-1 bg-soft-pink">
      <Header
        currentQuestion={currentQuestion}
        questionsLength={questions.length}
        timer={timer}
        answerHistory={answerHistory}
        lives={lives}
      />
      <Question
        question={questions[currentQuestion]?.text || ""}
        options={questions[currentQuestion]?.options || []}
        onAnswer={handleAnswer}
        onOptionSelected={setSelectedOption}
        isTimedOut={isTimedOut}
        onNext={handleNext}
      />

      {showExplanation && (
        <View className="absolute inset-0 bg-black/70 justify-center items-center p-4 z-50">
          <View className="bg-white rounded-2xl p-6 py-12 mx-6 w-full max-w-md items-center space-y-6">
            
            <Text className="text-3xl font-extrabold mb-2 text-center">
              {isTimedOut
                ? "⏳ Tempo esgotado!"
                : selectedOption === questions[currentQuestion]?.correctAnswer
                  ? "✅ Resposta correta!"
                  : "❌ Resposta errada"}
            </Text>

            <View className={`w-full bg-gray-100 rounded-xl px-4 py-3 border-l-4 mt-4 ${
              selectedOption === questions[currentQuestion]?.correctAnswer
                ? "border-green-500"
                : "border-red-500"
            }`}>
              <Text className="text-base text-gray-700 text-center">
                <Text className="font-semibold">Resposta correta:</Text> {" "}
                <Text className={`font-bold ${
                  selectedOption === questions[currentQuestion]?.correctAnswer
                    ? "text-green-600"
                    : "text-red-600"
                }`}>
                  {questions[currentQuestion]?.correctAnswer}
                </Text>
              </Text>
            </View>

            <View className="w-full bg-blue-50 px-4 py-3 rounded-xl border border-blue-200 mt-6">
              <Text className="text-base text-blue-900 text-center leading-relaxed">
                {questions[currentQuestion]?.explanation}
              </Text>
            </View>

            <TouchableOpacity
              onPress={handleNextQuestion}
              className="bg-blue-500 px-6 py-3 rounded-full mt-4 shadow-md"
            >
              <Text className="text-white text-lg font-bold">Próxima pergunta</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}



      {showResultModal && (
        <View className="absolute inset-0 bg-black/60 justify-center items-center p-4 z-50">
          <View className="bg-white rounded-2xl p-8 mx-6 w-full max-w-md items-center">
            <Text className="text-2xl font-bold text-center mb-4">Missão cumprida!</Text>
            <Text className="text-lg mb-2 text-center">Você finalizou o quiz com:</Text>
            <Text className="text-4xl font-extrabold text-green-600 mb-4">{score} pontos</Text>
            <Image
              source={require("../assets/congratulations.png")}
              className="h-64 w-full"
              resizeMode="contain"
            />

            <TouchableOpacity
              onPress={() => router.replace({ pathname: "/home", params: { id: userId } })}
              className="bg-green-500 px-6 py-3 rounded-full mt-6"
            >
              <Text className="text-white text-lg font-bold">
                Voltar para o início
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}