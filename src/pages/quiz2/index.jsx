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

import { Title, Wrapper } from "./styles";

function Quiz2() {
  return (
    <Wrapper>
      <Link to="/ieec">Go Back</Link>

      <Title>Quiz 2</Title>
      <Quiz2_1 />
      <Quiz2_3 />
      <Quiz2_4 />
      <Quiz2_5 />
      <Quiz2_6 />
      <Quiz2_7 />
      <Quiz2_8 />
      <Quiz2_9 />
      <Quiz2_10 />
      
    </Wrapper>
  );
}

export default Quiz2;
