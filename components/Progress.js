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
    borderColor: Colors.gold,
    borderWidth: 2,
    margin: 5,
    marginTop: 20,
    width: "80%",

    paddingVertical: 15,
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    color: Colors.gold,
    fontWeight: "bold",
  },
});
export default Progress;
