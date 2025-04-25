import { Stack, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { questions } from "../data/questions";
import Question from "./components/Questions";
import Timer, { TimerProps } from "./components/Quiz/Timer";
import Header from "./components/Quiz/Header";

export default function QuizScreen() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(20);
    const [quizFinished, setQuizFinished] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isTimedOut, setIsTimedOut] = useState(false); // Novo estado
    const router = useRouter();

    const handleAnswer = (answer: string) => {
        const isCorrect = answer === questions[currentQuestion].correctAnswer;
        setScore((prev) => prev + (isCorrect ? 10 : 0));

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
        }
    };

    const handleNext = () => {
        if (isTimedOut && currentQuestion < questions.length - 1) {
            setCurrentQuestion((prev) => prev + 1);
            setTimeLeft(20);
            setIsTimedOut(false);
        }
    };

    useEffect(() => {
        if (quizFinished) {
            setTimeout(() => {
                router.replace({ pathname: "/result", params: { score: score.toString() } });
            }, 100);
        }
    }, [quizFinished, score]);

    const timer: TimerProps = {
        timeLeft,
        setTimeLeft,
        onTimeOut,
    };

    return (
        <View className="flex-1 bg-soft-pink">
            <Header currentQuestion={currentQuestion} questionsLenght={questions.length} timer={timer} />
            <Question
                question={questions[currentQuestion].text}
                options={questions[currentQuestion].options}
                onAnswer={handleAnswer}
                onOptionSelected={setSelectedOption}
                isTimedOut={isTimedOut} // Passa o estado para o componente Question
                onNext={handleNext} // Passa a função para avançar
            />
        </View>
    );
}