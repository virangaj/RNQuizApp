import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
  Alert,
} from "react-native";
import Colors from "../constant/Colors";

export default function FirstScreen() {
  const image = require("../assets/logo.png");

  function start() {
    Alert.alert("Simple Button pressed");
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.heading}>QUIZBUZZER</Text>
      <View style={styles.img}>
        <Image source={image} />
      </View>
      <View style={styles.button}>
        <Button color={Colors.pink} title="Start" onPress={start} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.bottomBar,
  },
  img: {
    alignItems: "center",
    justifyContent: "center",

    maxWidth: "50%",
  },
  button: {
    marginTop: 10,
    width: "50%",
  },
});
