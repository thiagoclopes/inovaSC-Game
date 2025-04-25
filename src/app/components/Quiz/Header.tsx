import { View, Text, TouchableOpacity } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import Timer, { TimerProps } from "./Timer";
import { router } from "expo-router";

interface HeaderProps{
    currentQuestion: number,
    questionsLenght: number,
    timer: TimerProps
}
export default function Header({currentQuestion, questionsLenght, timer: { timeLeft, setTimeLeft, onTimeOut }} : HeaderProps){
    const MAX_DOTS = 7;

    let startIndex = Math.max(0, currentQuestion - Math.floor(MAX_DOTS / 2));
    let endIndex = startIndex + MAX_DOTS;

    if (endIndex > questionsLenght) {
        endIndex = questionsLenght;
        startIndex = Math.max(0, endIndex - MAX_DOTS);
    }
    const dots = Array.from(
        { length: endIndex - startIndex },
        (_, index) => startIndex + index
    );

    return (
        <View className="flex flex-col w-full rounded-b-3xl pt-12 pb-12 px-6 bg-red-950">
            <View className="flex flex-row items-center justify-center">

                <TouchableOpacity onPress={() => router.replace('/')} className="w-8 h-8 absolute left-1 items-center justify-center rounded-md bg-soft-red">
                    <AntDesign name="arrowleft" size={16} color="white" />
                </TouchableOpacity>

                <Text className="text-white text-xl">Pergunta {currentQuestion+1}</Text>

                <View className="flex flex-row items-center justify-center gap-2 absolute right-1 rounded-2xl p-1 bg-soft-red">
                    <AntDesign name="clockcircleo" size={18} color="white" />
                    <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} onTimeOut={onTimeOut} />
                </View>
            </View>

            <View className="flex flex-row justify-center gap-4 mt-8">
                {dots.map((questionIndex) => (
                <View
                    key={questionIndex}
                    className={`w-9 h-9 rounded-full items-center justify-center ${
                    questionIndex === currentQuestion
                        ? 'bg-soft-green' 
                        : questionIndex < currentQuestion
                        ? 'bg-soft-green/60'
                        : 'bg-orange-900/80'
                    }`}
                >
                    <Text className="text-white">{questionIndex+1}</Text>
                </View>
                ))}
            </View>

            
        </View>
    )
}