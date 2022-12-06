import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz1_10.png";


function Quiz1_10() {
  const [data, setData] = useState({});
  const I = data?.I || 0;
  const E = data?.E || 0;
  const R = data?.R || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["I", "E", "R"]} />
        Rx = (3 * E - 3 * I * R) / (4 * I)
        <br />
        Result: {((3 * E - 3 * I * R) / (4 * I)).toFixed(4)} Ω
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz1_10;
