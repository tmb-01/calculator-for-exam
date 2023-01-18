import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz9_1.png";

function Quiz9_1() {
  const [data, setData] = useState({});
  const E = data?.E || 0;
  const Rin = data?.Rin * 1000000 || 0;
  const R = data?.R * 1000 || 0;

  return (
    <PartWrapper>
      <Half>
        Calculate steady state value of voltage on oscilloscope input with
        following parameters: input resistance RIN = 6 MΩ, input capacitance CIN
        = 6 pF. E = 5.6 V, R = 699 kΩ. (The unit must be placed)
        <br />
        <Form data={data} setData={setData} inputs={["Rin", "E", "R"]} />
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
