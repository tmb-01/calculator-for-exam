import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz14_7.png";

function Quiz14_7() {
  const [data, setData] = useState({});
  const R = data?.R || 0;
  const E = data?.E || 0;
  const C = data?.C || 0;
  const L = data?.L || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["R", "E", "C", "L"]} />
        W = (1 / 32) * (E ** 2) * (9 * C + L / (R ** 2))
        <br />
        Result: {((1 / 32) * E ** 2 * (9 * C + L / R ** 2)).toFixed(4)}
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz14_7;
