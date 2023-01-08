import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz13_8.png";

function Quiz13_8() {
  const [data, setData] = useState({});
  const E = data?.E || 0;
  const R = data?.R || 0;
  const Rl = data?.Rl || 0;

  return (
    <PartWrapper>
      <Half>
        integrator loaded
        <Form data={data} setData={setData} inputs={["E", "R", "Rl"]} />
        U = (-E * Rl) / (R + Rl) <br />
        Result: {((-E * Rl) / (R + Rl)).toFixed(4)}
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz13_8;
