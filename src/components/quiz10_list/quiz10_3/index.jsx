import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz10_3.png";

function Quiz10_3() {
  const [data, setData] = useState({});
  const R = data?.R || 0;
  const C = data?.C || 0;

  return (
    <PartWrapper>
      <Half>
        A switch is opened at t=0. Calculate duration of the transient state, in
        us (assume this duration as five time constants). R=100, E=8V, C=9μF.
        <br />
        <Form data={data} setData={setData} inputs={["R", "C"]} />
        t = (15 / 4) * R * C <br />
        Result: {((15 / 4) * R * C).toFixed(4)} nanosecond
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz10_3;
