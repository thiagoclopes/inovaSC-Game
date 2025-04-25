import React from "react";
import { View, Text } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function UserStatsCard() {
    return (
        <View className="flex flex-row w-[80%] m-auto mt-[-50] justify-between items-center rounded-3xl bg-vibrant-green">

            <View className="flex flex-row gap-4 p-4 w-[50%] border-r border-r-soft-green">

                <View className="flex w-14 h-14 items-center justify-center rounded-full bg-soft-green">
                    <AntDesign name="staro" size={38} color="yellow" />
                </View>

                <View className="flex flex-col">
                    <Text className="text-white text-2xl">2300</Text>
                    <Text className="text-white text-xs">Pontos</Text>
                </View>
                
            </View>


            <View className="flex flex-row gap-4 p-4 w-[50%] border-l border-l-soft-green">

                <View className="flex w-14 h-14 items-center justify-center rounded-full bg-soft-green">
                    <AntDesign name="Trophy" size={38} color="yellow" />
                </View>

                <View className="flex flex-col">
                    <Text className="text-white text-2xl">32</Text>
                    <Text className="text-white text-xs">Ranking</Text>
                </View>
                
            </View>

        </View>  
    )
}