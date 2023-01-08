import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz14_2.png";

function Quiz14_2() {
  const [data, setData] = useState({});
  const t = data?.t || 0;
  const E = data?.E || 0;
  const C = data?.C || 0;
  const R = data?.R || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["t", "E", "C", "R"]} />
        i = (E / R) * (0.2 + 0.5 * (Math.E ** (-t / (R * C)) + Math.E ** (-t / (2 * R * C))))<br />
        Result:{" "}
        {(
          (E / R) *
          (0.2 +
            0.5 * (Math.E ** (-t / (R * C)) + Math.E ** (-t / (2 * R * C))))
        ).toFixed(4)}
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz14_2;
