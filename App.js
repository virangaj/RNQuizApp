import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import FirstScreen from "./screens/FirstScreen";
import QuizMenu from "./screens/QuizMenu";
import Quiz from "./screens/Quiz";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "./constant/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function App() {
  const [isAddMode, setIsAddMode] = useState(false);

  // console.log("questions", qdata);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <FirstScreen />
      <Quiz visible={isAddMode} />
      <TouchableOpacity style={styles.btn} onPress={() => setIsAddMode(true)}>
        <Text style={styles.footer}>
          {"              "}START{"              "}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    height: 50,
  },
  btn: {
    width: "100%",
    backgroundColor: Colors.pink,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,

    marginVertical: 10,
    paddingVertical: 10,
    borderRadius: 50,
    marginBottom: 50,
  },
  footer: {
    color: "white",
    fontSize: 16,
  },
});
