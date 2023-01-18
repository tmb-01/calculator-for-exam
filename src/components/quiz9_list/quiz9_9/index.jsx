import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz9_9.png";

function Quiz9_9() {
  const [data, setData] = useState({});
  const R = data?.R || 0;
  const Rs = data?.Rs || 0;
  const C = data?.C || 0;

  return (
    <PartWrapper>
      <Half>
        Capacitor C = 431 µF is charged by a constant voltage source. Calculate
        time constant (with unit) of voltage u(t), if resistance RS = 31 Ω.
        Assume discharged capacitor before the switch is closed. E = 22 V, R =
        114 Ω.
        <br />
        <Form data={data} setData={setData} inputs={["R", "Rs", "C"]} />
        T = (R + Rs) * C <br />
        Result: {(((R + Rs) * C) / 1000).toFixed(2)} ms
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz9_9;
