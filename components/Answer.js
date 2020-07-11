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

function Answer(props) {
  let classes = ["answer"];
  if (props.selected) {
    classes.push("selected");
  }
  return (
    <Button
      title={props.letter}
      className={classes.join(" ")}
      onClick={props.handleClick}
    >
      <span className="letter"> {props.letter}.</span> {props.answer}
    </Button>
  );
}
export default Answer;
