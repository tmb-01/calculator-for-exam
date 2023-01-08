import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz13_1.png";

function Quiz13_1() {
  const [data, setData] = useState({});
  const k = data?.k || 0;
  const R = data?.R || 0;
  const C = data?.C || 0;
  const t = data?.t || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["k", "R", "C", "t"]} />
        U = k * C * R * (1 - Math.E ** (-t / (R * C)))<br />
        Result: {(k * C * R * (1 - Math.E ** (-t / (R * C)))).toFixed(4)}
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz13_1;
