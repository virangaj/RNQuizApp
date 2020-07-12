import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Colors from "../constant/Colors";
function Progress(props) {
  return (
    <View style={styles.quizBox}>
      <Text style={styles.text}>
        QUESTION {props.current} OF {props.total}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  quizBox: {
    borderRadius: 10,
    backgroundColor: Colors.gold,
    margin: 5,
    marginTop: 20,
    width: "80%",
    elevation: 5,
    paddingVertical: 15,
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    color: "white",
  },
});
export default Progress;
