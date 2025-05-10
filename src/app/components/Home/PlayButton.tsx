import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { router } from "expo-router";

interface PlayButtonProps {
  nivel: number;
  userId: string;
}

export default function PlayButton({ nivel, userId }: PlayButtonProps) {
  const handlePlay = () => {
    router.push({
      pathname: "/quiz",
      params: {
        nivel: nivel.toString(),
        userId: userId
      },
    });
  };

  return (
    <TouchableOpacity
      onPress={handlePlay}
      className="bg-vibrant-green px-8 py-4 mb-20 rounded-full"
    >
      <Text className="text-white text-lg font-bold">Jogar (Nível {nivel})</Text>
    </TouchableOpacity>
  );
}