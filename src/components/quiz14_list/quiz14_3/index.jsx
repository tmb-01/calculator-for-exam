import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz14_3.png";

function Quiz14_3() {
  const [data, setData] = useState({});
  const t = data?.t || 0;
  const E = data?.E || 0;
  const C = data?.C || 0;
  const L = data?.L || 0;
  const R = data?.R || 0;

  return (
    <PartWrapper>
      <Half>
        <Form
          data={data}
          setData={setData}
          inputs={["t", "E", "C", "L", "R"]}
        />
        i = ((0.25 * E) / R) * (5 + Math.E ** (-t / (2 * R * C)) - 2 * Math.E ** ((-t * R) / L))<br />
        Result:{" "}
        {(
          ((0.25 * E) / R) *
          (5 + Math.E ** (-t / (2 * R * C)) - 2 * Math.E ** ((-t * R) / L))
        ).toFixed(4)}
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz14_3;
