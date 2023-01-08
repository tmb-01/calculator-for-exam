import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz11_3.png";

function Quiz11_3() {
  const [data, setData] = useState({});
  const X = data?.X || 0;
  const R = data?.R || 0;
  const C = data?.C || 0;
  const T = data?.T || 0;
  const t = data?.t || 0;

  return (
    <PartWrapper>
      <Half>
        <Form
          data={data}
          setData={setData}
          inputs={["X", "R", "C", "T", "t"]}
        />
        U = X * R * C * (1 - Math.E ** (-t / T))
        <br />
        Result: {(X * R * C * (1 - Math.E ** (-t / T))).toFixed(4)} v
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz11_3;
