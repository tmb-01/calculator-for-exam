import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz14_6.png";

function Quiz14_6() {
  const [data, setData] = useState({});
  const J = data?.J || 0;
  const C = data?.C || 0;
  const L = data?.L || 0;
  const R = data?.R || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["J", "C", "L", "R"]} />
        W = 0.32 * J ** 2 * (0.04 * C * R ** 2 + L)<br />
        Result: {(0.32 * J ** 2 * (0.04 * C * R ** 2 + L)).toFixed(4)}
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz14_6;
