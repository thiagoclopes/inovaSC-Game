import "../styles/global.css";
import { Slot } from "expo-router";
import { View } from "react-native";
import React from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from "react-native";



export default function RootLayout() {
  
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <StatusBar style="light" backgroundColor="#1E90FF" />
      <View className="flex-1">
        <Slot/>
      </View>
    </SafeAreaView>
  )
}
