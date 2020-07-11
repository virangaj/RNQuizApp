import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Colors from "../constant/Colors";
function Questions(props) {
  return (
    <View style={styles.quizBox}>
      <Text style={styles.text}>{props.question}</Text>
    </View>
  );
}
export default Questions;

const styles = StyleSheet.create({
  quizBox: {
    borderRadius: 10,
    backgroundColor: Colors.maroon,
    margin: 5,
    marginTop: 100,
    width: "90%",
    padding: 5,

    paddingVertical: 15,
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});
