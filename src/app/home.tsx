import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import Header from "./components/Home/Header";
import UserStatsCard from "./components/Home/UserStatsCard";
import PlayButton from "./components/Home/PlayButton";
import { API_BASE_URL } from "../../config";

interface Usuario {
  id: string;
  nome: string;
  pontosNvl1: number;
  pontosNvl2: number;
  pontosNvl3: number;
  nivel: number;
}

export default function HomeScreen() {
  const { id } = useLocalSearchParams();
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!id) {
        Alert.alert("Erro", "ID do usuário não encontrado.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`${API_BASE_URL}/usuarios/${id}`);
        if (!response.ok) {
          throw new Error("Erro ao buscar informações do usuário.");
        }

        const data = await response.json();
        setUsuario(data);
      } catch (error) {
        console.error(error);
        Alert.alert("Erro", "Não foi possível carregar as informações do usuário.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [id]);

  return (
    <View className="flex-1 items-center justify-center bg-soft-pink">
		{usuario && <Header nome={usuario.nome} />}
		{usuario && <UserStatsCard userId={usuario.id} />}
		<Image
			className="flex w-72 h-72 m-auto"
			source={require("../assets/mascot.png")}
		/>
		{usuario && (
			<PlayButton
				nivel={(usuario.nivel as 1 | 2 | 3) || 1}
				userId={id as string}
			/>
		)}
    </View>
  );
}