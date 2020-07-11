import React from "react";
import Answer from "./Answer";
function Answers(props) {
  return (
    <>
      <Answer
        letter="a"
        answer={props.question.a[props.currentQuestion]}
        selected={props.currentAnswer === "a"}
        handleClick={props.handleClick}
      />
      <Answer
        letter="b"
        answer={props.question.b[props.currentQuestion]}
        selected={props.currentAnswer === "b"}
        handleClick={props.handleClick}
      />
      <Answer
        letter="c"
        answer={props.question.c[props.currentQuestion]}
        selected={props.currentAnswer === "c"}
        handleClick={props.handleClick}
      />
      <Answer
        letter="d"
        answer={props.question.d[props.currentQuestion]}
        selected={props.currentAnswer === "d"}
        handleClick={props.handleClick}
      />
    </>
  );
}
export default Answers;
