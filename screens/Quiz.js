import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Image, Alert } from "react-native";
import Colors from "../constant/Colors";
import Answers from "../components/Answers";
import Header from "../components/Header";
import Questions from "../components/Questions";
import * as consts from "../constant/Data";
export default function Quiz() {
  const [qdata, setQdata] = useState([]);

  useEffect(() => {
    setQdata(consts.questionData);
  }, []);
  const [currentQuestion, serCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const questionArray = {
    question: qdata.map((q) => q.q),
    a: qdata.map((q) => q.a),
    b: qdata.map((q) => q.b),
    c: qdata.map((q) => q.c),
    d: qdata.map((q) => q.d),
    id: qdata.map((q) => q.id),
    correct_answer: qdata.map((q) => q.answer),
  };
  const question = questionArray.question[currentQuestion];

  console.log("question", question);
  const handleClick = (e) => {
    Alert.alert("Clicked");
  };
  return (
    <View style={styles.container}>
      <Header />
      {/* {qdata.map((data) => {
        return (
          <View>
            <Text>{data.q}</Text>
          </View>
        );
      })} */}
      <View style={styles.quizBox}>
        <Questions question={question} />
      </View>
      {/* <Answers
        currentQuestion="1"
        question="quiz1"
        currentAnswer="1"
        handleClick={handleClick}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  quizBox: {
    alignItems: "center",
    justifyContent: "center",
  },
});
