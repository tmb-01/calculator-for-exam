import React from "react";
import { Link } from "react-router-dom";
import Quiz4_1 from "../../components/quiz4_list/quiz4_1";
import Quiz4_10 from "../../components/quiz4_list/quiz4_10";
import Quiz4_2 from "../../components/quiz4_list/quiz4_2";
import Quiz4_3 from "../../components/quiz4_list/quiz4_3";
import Quiz4_4 from "../../components/quiz4_list/quiz4_4";
import Quiz4_5 from "../../components/quiz4_list/quiz4_5";
import Quiz4_6 from "../../components/quiz4_list/quiz4_6";
import Quiz4_7 from "../../components/quiz4_list/quiz4_7";
import Quiz4_8 from "../../components/quiz4_list/quiz4_8";
import Quiz4_9 from "../../components/quiz4_list/quiz4_9";

import { Title, Wrapper } from "./styles";

function Quiz4() {
  return (
    <Wrapper>
      <Link to="/ieec">Go Back</Link>
      <Title>Quiz 4</Title>
      <Quiz4_1 />
      {/* <Quiz4_2 /> */}
      {/* <Quiz4_3 /> */}
      <Quiz4_4 />
      <Quiz4_5 />
      <Quiz4_6 />
      {/* <Quiz4_7 /> */}
      {/* <Quiz4_8 /> */}
      <Quiz4_9 />
      <Quiz4_10 />
      
      
    </Wrapper>
  );
}

export default Quiz4;
