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
import Quiz6_1 from "../../components/quiz6_list/quiz6_1";
import Quiz6_10 from "../../components/quiz6_list/quiz6_10";
import Quiz6_2 from "../../components/quiz6_list/quiz6_2";
import Quiz6_3 from "../../components/quiz6_list/quiz6_3";
import Quiz6_4 from "../../components/quiz6_list/quiz6_4";
import Quiz6_5 from "../../components/quiz6_list/quiz6_5";
import Quiz6_6 from "../../components/quiz6_list/quiz6_6";
import Quiz6_7 from "../../components/quiz6_list/quiz6_7";
import Quiz6_8 from "../../components/quiz6_list/quiz6_8";
import Quiz6_9 from "../../components/quiz6_list/quiz6_9";

import { Title, Wrapper } from "./styles";

function Quiz6() {
  return (
    <Wrapper>
      <Link to="/ieec">Go Back</Link>
      <Title>Quiz 6</Title>
      <Quiz6_1 />
      <Quiz6_2 />
      <Quiz6_3 />
      <Quiz6_4 />
      {/* <Quiz6_5 /> */}
      <Quiz6_6 />
      {/* <Quiz6_7 /> */}
      <Quiz6_8 />
      <Quiz6_9 />
      <Quiz6_10 />
      
    </Wrapper>
  );
}

export default Quiz6;
