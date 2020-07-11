import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FirstScreen from "./screens/FirstScreen";
import QuizMenu from "./screens/QuizMenu";
import Quiz from "./screens/Quiz";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <FirstScreen /> */}
      <Quiz />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
