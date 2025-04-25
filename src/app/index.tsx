import { router } from "expo-router";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Header from "./components/Home/Header";
import UserStatsCard from "./components/Home/UserStatsCard";
import PlayButton from "./components/Home/PlayButton";


export default function HomeScreen() {
    return (
		<View className="flex-1 items-center justify-center bg-soft-pink">
			<Header />
			<UserStatsCard />
			<Image className="flex w-72 h-72 m-auto" source={require('../assets/mascot.png')}/>

			<PlayButton />

		</View>
    );
  }