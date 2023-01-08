import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz14_10.png";

function Quiz14_10() {
  const [data, setData] = useState({});
  const E = data?.E || 0;
  const C = data?.C || 0;
  const L = data?.L || 0;
  const R = data?.R || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["E", "C", "L", "R"]} />
        W = 0.125 * E ** 2 * ((0.25 * L) / R ** 2 + C)<br />
        Result: {(0.125 * E ** 2*((0.25 * L) / R ** 2 + C)).toFixed(4)}
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz14_10;
