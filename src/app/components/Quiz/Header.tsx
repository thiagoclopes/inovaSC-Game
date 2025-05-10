import { View, Text, TouchableOpacity, Animated } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import Timer, { TimerProps } from "./Timer";
import { router } from "expo-router";
import { useEffect, useRef } from "react";

interface HeaderProps {
    currentQuestion: number;
    questionsLength: number;
    timer: TimerProps;
    answerHistory: boolean[];
    lives: number;
}

export default function Header({ currentQuestion, questionsLength, timer: { timeLeft, setTimeLeft, onTimeOut }, answerHistory, lives }: HeaderProps) {
    const MAX_DOTS = 7;

    let startIndex = Math.max(0, currentQuestion - Math.floor(MAX_DOTS / 2));
    let endIndex = startIndex + MAX_DOTS;

    if (endIndex > questionsLength) {
        endIndex = questionsLength;
        startIndex = Math.max(0, endIndex - MAX_DOTS);
    }
    const dots = Array.from(
        { length: endIndex - startIndex },
        (_, index) => startIndex + index
    );

    const blinkAnim = useRef(new Animated.Value(1)).current;
    const blinkLoop = useRef<Animated.CompositeAnimation | null>(null);

	useEffect(() => {
        blinkLoop.current = Animated.loop(
            Animated.sequence([
                Animated.timing(blinkAnim, {
                    toValue: 0.2,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(blinkAnim, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ])
        );
        blinkLoop.current.start();
    
        return () => {
            blinkLoop.current?.stop();
        };
    }, [currentQuestion]);

    const handleTimeOut = () => {
        blinkLoop.current?.stop();
        onTimeOut();
    };
    

    return (
        <View className="flex flex-col w-full rounded-b-3xl pt-12 px-6 bg-main-red">
            <View className="flex flex-row items-center justify-center">
                <TouchableOpacity 
                    onPress={() => router.replace('/')} 
                    className="w-8 h-8 absolute left-1 items-center justify-center rounded-md bg-secondary-red"
                >
                    <AntDesign name="arrowleft" size={16} color="white" />
                </TouchableOpacity>

                <Text className="text-white text-xl">Pergunta {currentQuestion + 1}</Text>

                <View className="flex flex-row items-center justify-center gap-2 absolute right-1 rounded-2xl p-1 bg-secondary-red">
                    <AntDesign name="clockcircleo" size={18} color="white" />
                    <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} onTimeOut={handleTimeOut} />
                </View>
            </View>

            <View className="flex flex-row justify-center gap-4 mt-8 mb-8">
                {dots.map((questionIndex) => {
                    const isCurrent = questionIndex === currentQuestion;
                    const backgroundColor = isCurrent
                        ? 'bg-blue-300'
                        : questionIndex < currentQuestion
                        ? answerHistory[questionIndex]
                            ? 'bg-green-500'
                            : 'bg-red-500'
                        : 'bg-soft-brown';

                    const DotWrapper = isCurrent ? Animated.View : View;

                    return (
                        <DotWrapper
                            key={questionIndex}
                            style={isCurrent ? { opacity: blinkAnim } : {}}
                            className={`w-9 h-9 rounded-full items-center justify-center ${backgroundColor}`}
                        >
                            <Text className="text-white">{questionIndex + 1}</Text>
                        </DotWrapper>
                    );
                })}
            </View>


            <View className="flex flex-row items-center w-full p-4 gap-3 rounded-2xl">
                <Text className="text-white text-sm">Vidas: </Text>
                {Array.from({ length: lives }).map((_, index) => (
                        <AntDesign key={index} name="heart" size={20} color="red"/>
                ))}
            </View>

        </View>
    );
}