import React from "react";
import { Link } from "react-router-dom";
import Quiz2_1 from "../../components/quiz2_list/quiz2_1";
import Quiz2_10 from "../../components/quiz2_list/quiz2_10";
import Quiz2_3 from "../../components/quiz2_list/quiz2_3";
import Quiz2_4 from "../../components/quiz2_list/quiz2_4";
import Quiz2_5 from "../../components/quiz2_list/quiz2_5";
import Quiz2_6 from "../../components/quiz2_list/quiz2_6";
import Quiz2_7 from "../../components/quiz2_list/quiz2_7";
import Quiz2_8 from "../../components/quiz2_list/quiz2_8";
import Quiz2_9 from "../../components/quiz2_list/quiz2_9";
import Quiz3_1 from "../../components/quiz3_list/quiz3_1";
import Quiz3_10 from "../../components/quiz3_list/quiz3_10";
import Quiz3_2 from "../../components/quiz3_list/quiz3_2";
import Quiz3_3 from "../../components/quiz3_list/quiz3_3";
import Quiz3_5 from "../../components/quiz3_list/quiz3_5";
import Quiz3_6 from "../../components/quiz3_list/quiz3_6";
import Quiz3_7 from "../../components/quiz3_list/quiz3_7";
import Quiz3_8 from "../../components/quiz3_list/quiz3_8";

import { Title, Wrapper } from "./styles";

function Quiz3() {
  return (
    <Wrapper>
      <Link to="/ieec">Go Back</Link>
      <Title>Quiz 3</Title>
      <Quiz3_1 />
      <Quiz3_2 />
      <Quiz3_3 />
      <Quiz3_5 />
      <Quiz3_6 />
      {/* <Quiz3_7 /> */}
      <Quiz3_8 />
      <Quiz3_10 />
      
    </Wrapper>
  );
}

export default Quiz3;
