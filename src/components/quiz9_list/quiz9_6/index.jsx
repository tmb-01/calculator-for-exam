import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz9_6.png";

function Quiz9_6() {
  const [data, setData] = useState({});
  const L = data?.L || 0;
  const z = data?.z || 0;
  const z_ = data?.z_ || 0;

  return (
    <PartWrapper>
      <Half>
        Given a coil of z = 700 turns and L = 17 mH inductance. Find the
        inductance L’ (with unit), after adding 0.5z turns: z’ = (1 + 0.5)z.
        <br />
        <Form data={data} setData={setData} inputs={["L", "z", "z_"]} />
        L' = (L * (z ** 2)) / (z_ ** 2) <br />
        Result: {((L * z ** 2) / z_ ** 2).toFixed(4)} mH
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz9_6;
