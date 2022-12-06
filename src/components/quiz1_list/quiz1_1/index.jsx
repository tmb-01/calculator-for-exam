import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz1_1.png";

function Quiz1_1() {
  const [data, setData] = useState({});
  const P = data?.P || 0;
  const J = data?.J || 0;
  const R = data?.R || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["P", "J", "R"]} />
        Rx = ((P / J) * R) / (J * R - P / J) <br />
        Result: {(((P / J) * R) / (J * R - P / J)).toFixed(4)} Ω
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz1_1;
