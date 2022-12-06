import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz5_7.png";

function Quiz5_7() {
  const [data, setData] = useState({});
  const E = data?.E || 0;
  const R = data?.R || 0;
  const K = data?.K || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["E", "R", "K"]} />
        I = E / ((1 + k) * R) <br />
        Result: {(E / ((1 + K) * R)).toFixed(4)} A
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz5_7;
