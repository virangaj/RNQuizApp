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
} from "react-native";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";

import Colors from "../constant/Colors";
import Header from "../components/Header";
import Questions from "../components/Questions";
import EndScreen from "../screens/EndScreen";
import Progress from "../components/Progress";
import * as consts from "../constant/Data";

export default function Quiz() {
  const [qdata, setQdata] = useState([]);

  useEffect(() => {
    setQdata(consts.questionData);
  }, []);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState();
  const [showResult, setShowResult] = useState(false);
  const [marks, setMarks] = useState(0);
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

  // console.log("question", question);

  //next buttom
  const next = () => {
    if (currentAnswer === questionArray.correct_answer[currentQuestion]) {
      setMarks((marks) => marks + 1);
    }
    console.log("Marks", marks);
    console.log("current Ans", currentAnswer);
    Vibration.vibrate(50);
    if (currentQuestion + 1 < qdata.length) {
      setCurrentQuestion(currentQuestion + 1);
      return;
    }
    if (currentQuestion + 1 === qdata.length) {
      setShowResult(true);
      return;
    }
  };
  // useEffect(() => {
  //   setMarks();
  // }, []);
  //reset buttom
  const reset = () => {
    setCurrentQuestion(0);
    setMarks(0);
    setCurrentAnswer(0);
    setShowResult(false);
    Vibration.vibrate(100);
  };

  // if (currentQuestion + 1 > qdata.length) {
  //   return <EndScreen marks={marks} />;
  // }
  return (
    <View>
      {showResult === true ? (
        <View style={styles.quizBox}>
          <Header />
          <EndScreen marks={marks} reset={reset} />
        </View>
      ) : (
        <View>
          {
            <View>
              <Header />
              <View style={styles.quizBox}>
                <Progress
                  current={questionArray.id[currentQuestion]}
                  total={qdata.length}
                />
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
                  <View style={styles.btn}>
                    <Button title="Reset" color={Colors.pink} onPress={reset} />
                  </View>
                  <View style={styles.btn}>
                    <Button title="Next" onPress={next} />
                  </View>
                </View>
              </View>
            </View>
          }
        </View>
      )}
    </View>
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
});
