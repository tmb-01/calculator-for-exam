import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz9_1.png";

function Quiz9_1() {
  const [data, setData] = useState({});
  const E = data?.E || 0;
  const Rin = data?.Rin || 0;
  const R = data?.R || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["E", "Rin", "R"]} />
        u(5T) = ((E * Rin) / (R + Rin)) <br />
        Result: {((E * Rin) / (R + Rin)).toFixed(4)} V
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz9_1;
