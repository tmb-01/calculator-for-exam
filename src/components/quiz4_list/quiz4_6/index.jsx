import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz4_6.png";

function Quiz4_6() {
  const [data, setData] = useState({});
  const Ri = data?.Ri || 0;
  const P = data?.P || 0;
  const Is = data?.Is || 0;
  const E0 = data?.E0 || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["Ri", "P", "Is", "E0"]} />
        R = Math.sqrt(Ri / P) * E0 - E0 / Is - Ri <br />
        Result: {(Math.sqrt(Ri / P) * E0 - E0 / Is - Ri).toFixed(4)} Ω
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz4_6;
