import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Colors from "../constant/Colors";
function EndScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.quizBox}>
        <Text style={styles.text}>QUIZ OVER</Text>
      </View>
      <View style={styles.scoreWrapper}>
        <Text style={styles.marks}>Your Result</Text>
        <Text style={styles.marks}>{props.marks}</Text>
      </View>
      <Button title="Try Again" onPress={props.reset} />
    </View>
  );
}
export default EndScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  quizBox: {
    borderRadius: 10,
    backgroundColor: Colors.gold,
    margin: 5,
    marginTop: 50,
    width: "90%",
    padding: 5,
    elevation: 5,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  scoreWrapper: {
    borderRadius: 10,
    borderColor: Colors.bottomBar,
    borderWidth: 2,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    marginVertical: 10,
  },

  marks: {
    fontSize: 20,
    color: Colors.bottomBar,
    fontWeight: "bold",
  },
});
