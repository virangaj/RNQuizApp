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
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";
import Colors from "../constant/Colors";

export default function Tiles(props) {
  return (
    <TouchableOpacity
      style={{
        ...styles.tileView,
        ...props.tile,
        backgroundColor: props.color,
      }}
    >
      {props.children}

      <Text style={{ ...styles.text, ...props.text }}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  tileView: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5,

    padding: 20,
    borderRadius: 10,
    marginTop: 5,
    width: "45%",
    justifyContent: "center",
    height: 120,
    alignItems: "center",
  },
});
