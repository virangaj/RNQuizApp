import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import FirstScreen from "./screens/FirstScreen";
import QuizMenu from "./screens/QuizMenu";
import Quiz from "./screens/Quiz";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "./constant/Colors";
const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FirstScreen />
      <View style={styles.button}>
        <Button
          color={Colors.pink}
          title="Start"
          onPress={() => navigation.navigate("Quiz")}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};
const QuizOpen = () => {
  return (
    <View style={styles.container}>
      {/* <QuizMenu /> */}
      <Quiz />
      <StatusBar style="auto" />
    </View>
  );
};
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Welcome} />
        <Stack.Screen name="Quiz" component={QuizOpen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    height: 50,
  },
});
