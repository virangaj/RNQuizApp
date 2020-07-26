import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Alert,
  Vibration,
  Modal,
  TouchableOpacity,
} from "react-native";

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
import firebase from "../firebase";
import "firebase/firestore";
import Colors from "../constant/Colors";
import Header from "../components/Header";
import Questions from "../components/Questions";
import EndScreen from "../screens/EndScreen";
import Progress from "../components/Progress";

import * as consts from "../constant/Data";

export default function Quiz(props) {
  const [qdata, setQdata] = useState([]);
  const [QuizData, setQuizData] = useState([]);
  useEffect(() => {
    setQdata(consts.questionData);
  }, []);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [marks, setMarks] = useState(0);
  // const questionArray = {
  //   question: qdata.map((q) => q.q),
  //   a: qdata.map((q) => q.a),
  //   b: qdata.map((q) => q.b),
  //   c: qdata.map((q) => q.c),
  //   d: qdata.map((q) => q.d),
  //   id: qdata.map((q) => q.id),
  //   correct_answer: qdata.map((q) => q.answer),
  // };
  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const dataQ = await db.collection("questions_db").get();
      setQuizData(dataQ.docs.map((doc) => doc.data()));
    };
    fetchData();
  }, []);

  const questionArray = {
    question: QuizData.map((q) => q.quiz),
    a: QuizData.map((q) => q.answer_a),
    b: QuizData.map((q) => q.answer_b),
    c: QuizData.map((q) => q.answer_c),
    d: QuizData.map((q) => q.answer_d),
    id: QuizData.map((q) => q.id),
    correct_answer: QuizData.map((q) => q.correct_num),
  };
  const question = questionArray.question[currentQuestion];

  console.log("question", questionArray);

  //next buttom
  const next = () => {
    Vibration.vibrate(50);

    if (currentAnswer === 0) {
      Alert.alert("Input Undetected", "Please select an Answer", [
        { text: "Reset", style: "destructive", onPress: reset },
        { text: "Ok", style: "destructive" },
      ]);
    } else {
      if (currentAnswer === questionArray.correct_answer[currentQuestion]) {
        setMarks(marks + 1);
        setCurrentAnswer(0);
      }
      console.log("curent answer", currentAnswer);
      console.log("Marks", marks);
      console.log("correct Ans", questionArray.correct_answer[currentQuestion]);
      if (currentQuestion + 1 < qdata.length) {
        setCurrentQuestion(currentQuestion + 1);
        setCurrentAnswer(0);
        return;
      }

      if (currentQuestion + 1 === qdata.length) {
        setShowResult(true);
        setCurrentAnswer(0);
        return;
      }
    }
  };

  const reset = () => {
    setCurrentQuestion(0);
    setMarks(0);
    setCurrentAnswer(0);
    setShowResult(false);
    Vibration.vibrate(100);
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      {showResult === true ? (
        <View style={styles.quizBox}>
          <StatusBar style="auto" />
          <Header />
          <EndScreen marks={marks} reset={reset} />
        </View>
      ) : (
        <View>
          {
            <View>
              <StatusBar style="auto" />
              <Header />
              <View style={styles.quizBox}>
                <Progress current={currentQuestion + 1} total={qdata.length} />
                <Questions question={question} />

                <RadioForm
                  radio_props={[
                    { label: questionArray.a[currentQuestion], value: 1 },
                    { label: questionArray.b[currentQuestion], value: 2 },
                    { label: questionArray.c[currentQuestion], value: 3 },
                    { label: questionArray.d[currentQuestion], value: 4 },
                  ]}
                  initial={0}
                  buttonColor={Colors.bottomBar}
                  selectedButtonColor={Colors.green}
                  buttonSize={18}
                  animation={true}
                  onPress={(value) => {
                    setCurrentAnswer(value);
                  }}
                />

                <View style={styles.buttonArea}>
                  <TouchableOpacity
                    style={{ ...styles.btn, backgroundColor: Colors.pink }}
                    onPress={reset}
                  >
                    <Text style={styles.footer}>RESET</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{ ...styles.btn, backgroundColor: Colors.bottomBar }}
                    onPress={next}
                  >
                    <Text style={styles.footer}>NEXT</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          }
        </View>
      )}
    </Modal>
  );
}

const styles = StyleSheet.create({
  quizBox: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  buttonArea: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  btn: {
    paddingHorizontal: 10,
    width: "30%",
  },
  footer: {
    color: "white",

    fontSize: 16,
  },
  btn: {
    width: "30%",

    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    marginVertical: 10,
    paddingVertical: 10,
    borderRadius: 50,
    marginHorizontal: 20,
  },
});
