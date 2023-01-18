import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz10_5.png";

function Quiz10_5() {
  const [data, setData] = useState({});
  const R = data?.R || 0;
  const C = data?.C || 0;

  return (
    <PartWrapper>
      <Half>
        The switch is closed at t=0. Calculate duration of the transient state,
        in us (assume this duration as five time constants). R=80, E=8V, C=4µF.
        <br />
        <Form data={data} setData={setData} inputs={["R", "C"]} />
        t = 11 * R * C<br />
        Result: {(11 * R * C).toFixed(4)} nanosecond
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz10_5;
