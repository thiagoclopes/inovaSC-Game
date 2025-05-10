import { Stack, useRouter, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, Alert } from "react-native";
import Question from "./components/Questions";
import Timer, { TimerProps } from "./components/Quiz/Timer";
import Header from "./components/Quiz/Header";
import { questionsLevel1 } from "../data/questionsLevel1";
import { questionsLevel2 } from "../data/questionsLevel2";
import { questionsLevel3 } from "../data/questionsLevel3";
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

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const [quizFinished, setQuizFinished] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isTimedOut, setIsTimedOut] = useState(false);
  const [answerHistory, setAnswerHistory] = useState<boolean[]>([]);
  const [lives, setLives] = useState(3);
  const router = useRouter();

  const handleAnswer = (answer: string) => {
    const isCorrect = answer === questions[currentQuestion].correctAnswer;

    setAnswerHistory((prev) => [...prev, isCorrect]);

    if (isCorrect) {
      setScore((prev) => prev + 10);
    } else {
      setLives((prev) => prev - 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(null);
      setTimeLeft(20);
      setIsTimedOut(false);
    } else {
      setQuizFinished(true);
    }
  };

  const onTimeOut = () => {
    if (selectedOption) {
      handleAnswer(selectedOption);
    } else {
      setIsTimedOut(true);
      setScore((prev) => prev - 2);
      setAnswerHistory((prev) => [...prev, false]);
      setLives((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (isTimedOut && currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setTimeLeft(20);
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
        setTimeout(() => {
          router.replace({
            pathname: "/result",
            params: {
              score: score.toString(),
              lives: lives.toString(),
            },
          });
        }, 100);
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
    </View>
  );
}