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
import Quiz5_1 from "../../components/quiz5_list/quiz5_1";
import Quiz5_10 from "../../components/quiz5_list/quiz5_10";
import Quiz5_2 from "../../components/quiz5_list/quiz5_2";
import Quiz5_3 from "../../components/quiz5_list/quiz5_3";
import Quiz5_4 from "../../components/quiz5_list/quiz5_4";
import Quiz5_5 from "../../components/quiz5_list/quiz5_5";
import Quiz5_6 from "../../components/quiz5_list/quiz5_6";
import Quiz5_7 from "../../components/quiz5_list/quiz5_7";
import Quiz5_8 from "../../components/quiz5_list/quiz5_8";
import Quiz5_9 from "../../components/quiz5_list/quiz5_9";

import { Title, Wrapper } from "./styles";

function Quiz5() {
  return (
    <Wrapper>
      <Link to="/ieec">Go Back</Link>
      <Title>Quiz 5</Title>
      <Quiz5_1 />
      <Quiz5_2 />
      <Quiz5_3 />
      <Quiz5_4 />
      <Quiz5_5 />
      {/* <Quiz5_6 /> */}
      <Quiz5_7 />
      <Quiz5_8 />
      <Quiz5_9 />
      {/* <Quiz5_10 /> */}
      
    </Wrapper>
  );
}

export default Quiz5;
