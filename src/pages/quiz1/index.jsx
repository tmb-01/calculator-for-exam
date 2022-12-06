import React from "react";
import { Link } from "react-router-dom";
import Quiz1_1 from "../../components/quiz1_list/quiz1_1";
import Quiz1_10 from "../../components/quiz1_list/quiz1_10";
import Quiz1_3 from "../../components/quiz1_list/quiz1_3";
import Quiz1_4 from "../../components/quiz1_list/quiz1_4";
import Quiz1_6 from "../../components/quiz1_list/quiz1_6";
import Quiz1_7 from "../../components/quiz1_list/quiz1_7";
import Quiz1_8 from "../../components/quiz1_list/quiz1_8";
import Quiz1_9 from "../../components/quiz1_list/quiz1_9";
import { Title, Wrapper } from "./styles";

function Quiz1() {
  return (
    <Wrapper>
      <Link to="/ieec">Go Back</Link>
      <Title>Quiz 1</Title>
      <Quiz1_1 />
      <Quiz1_3 />
      <Quiz1_4 />
      <Quiz1_6 />
      <Quiz1_7 />
      <Quiz1_8 />
      <Quiz1_9 />
      <Quiz1_10 />
    </Wrapper>
  );
}

export default Quiz1;
