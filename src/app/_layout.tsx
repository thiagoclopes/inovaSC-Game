import "../styles/global.css";
import { Slot } from "expo-router";
import { Platform, SafeAreaView, View } from "react-native";
import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from "react-native";
import Constants from "expo-constants";



export default function RootLayout() {
  
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <StatusBar style="light" backgroundColor="#1E90FF" />
      <View
        className="flex-1"
        style={
          Platform.OS === "android" ? { paddingTop: Constants.statusBarHeight } : {}
        }
      >
        <Slot/>
      </View>
    </SafeAreaView>
  )
}
