import { View, Text, TouchableOpacity } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from "expo-router";

export default function PlayButton(){
    return (
        <TouchableOpacity className="w-[50%] px-8 py-2 mt-8 mb-36 rounded-lg items-center justify-center bg-purple-600" onPress={() => router.push('/quiz')}>
            <Text className="text-white px-4 py-2">Jogar</Text>
        </TouchableOpacity>
    )
}