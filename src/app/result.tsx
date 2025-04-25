import { View, Text, TouchableOpacity } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';

export default function ResultScreen() {
  const { score } = useLocalSearchParams<{ score: string }>();

  return (
    <View className="flex-1 justify-center items-center p-4">
        <Text className="text-2xl font-bold text-blue-600 mb-4">
            Pontuação Final: {score}
        </Text>
        <TouchableOpacity className="bg-blue-500 mb-4" onPress={() => router.push('/')}>
            <Text className="text-white px-4 py-2">Jogar Novamente</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-blue-500 mb-4" >
            <Text className="text-white px-4 py-2">Sobre o projeto</Text>
        </TouchableOpacity>
    </View>
  );
}