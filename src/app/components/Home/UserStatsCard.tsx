import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, Alert } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { API_BASE_URL } from "../../../../config";

interface User {
  id: string;
  nome: string;
  pontosNvl1: number;
  pontosNvl2: number;
  pontosNvl3: number;
  nivel: number;
}

interface UserStatsCardProps {
  userId: string;
}

export default function UserStatsCard({ userId }: UserStatsCardProps) {
  const [user, setUser] = useState<User | null>(null);
  const [ranking, setRanking] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await fetch(`${API_BASE_URL}/usuarios/${userId}`);
        if (!userResponse.ok) {
          throw new Error("Erro ao buscar dados do usuário.");
        }
        const userData: User = await userResponse.json();
        setUser(userData);

        const allUsersResponse = await fetch(`${API_BASE_URL}/usuarios`);
        if (!allUsersResponse.ok) {
          throw new Error("Erro ao buscar dados dos usuários.");
        }
        const allUsers: User[] = await allUsersResponse.json();

        const rankedUsers = allUsers
          .map((u) => ({
            id: u.id,
            totalPoints: (u.pontosNvl1 || 0) + (u.pontosNvl2 || 0) + (u.pontosNvl3 || 0),
          }))
          .sort((a, b) => b.totalPoints - a.totalPoints);

        // Encontrar a posição do usuário atual
        const userRank = rankedUsers.findIndex((u) => u.id === userId) + 1;
        setRanking(userRank);
      } catch (error) {
        console.error(error);
        Alert.alert("Erro", "Não foi possível carregar as estatísticas do usuário.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }

  if (!user) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-red-500">Erro ao carregar dados do usuário</Text>
      </View>
    );
  }

  const totalPoints = (user.pontosNvl1 || 0) + (user.pontosNvl2 || 0) + (user.pontosNvl3 || 0);

  return (
    <View className="flex flex-row w-[80%] m-auto mt-[-50] justify-between items-center rounded-3xl bg-vibrant-green">
      <View className="flex flex-row gap-4 p-4 w-[50%] border-r border-r-soft-green">
        <View className="flex w-14 h-14 items-center justify-center rounded-full bg-soft-green">
          <AntDesign name="staro" size={38} color="yellow" />
        </View>
        <View className="flex flex-col">
          <Text className="text-white text-2xl">{totalPoints}</Text>
          <Text className="text-white text-xs">Pontos</Text>
        </View>
      </View>
      <View className="flex flex-row gap-4 p-4 w-[50%] border-l border-l-soft-green">
        <View className="flex w-14 h-14 items-center justify-center rounded-full bg-soft-green">
          <AntDesign name="Trophy" size={38} color="yellow" />
        </View>
        <View className="flex flex-col">
          <Text className="text-white text-2xl">{ranking || '-'}</Text>
          <Text className="text-white text-xs">Ranking</Text>
        </View>
      </View>
    </View>
  );
}