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

export default function Header() {
  const image = require("../assets/logo.png");

  function start() {
    Alert.alert("Simple Button pressed");
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.button}>
        <Button color={Colors.bottomBar} title="Back" onPress={start} />
      </View>
      <View style={styles.headerView}>
        <Text style={styles.heading}>QuizBox</Text>
      </View>
      <View style={styles.imgView}>
        <Image source={image} style={styles.img} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 95,

    backgroundColor: Colors.pink,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  headerView: {
    flex: 4,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.bottomBar,
  },
  img: {
    width: 50,
    height: 50,
  },
  imgView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    width: 50,
    height: 50,
  },
  button: {
    flex: 1,
  },
});
