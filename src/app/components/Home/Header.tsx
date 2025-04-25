import { View, Text } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Header(){
    return (
        <View className="flex flex-row w-full justify-between items-center rounded-b-3xl pt-12 pb-20 px-8 bg-red-950">
            <View className="flex flex-col">
                <Text className="text-white text-2xl">Olá, Thiago</Text>
                <Text className="text-white text-xs">Cada segundo conta. Que tal treinar agora?</Text>
            </View>

            <View className="flex items-center justify-center h-20 w-20 rounded-full bg-red-900">
                <AntDesign name="user" size={38} color="white" />
            </View>
        </View>
    )
}