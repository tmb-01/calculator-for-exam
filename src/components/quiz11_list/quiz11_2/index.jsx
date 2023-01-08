import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz11_2.png";

function Quiz11_2() {
  const [data, setData] = useState({});
  const C1 = data?.C1 || 0;
  const C2 = data?.C2 || 0;
  const E = data?.E || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["C1", "C2", "E"]} />
        W = 0.5 * (C1 + C2) * E ** 2<br />
        Result: {(0.5 * (C1 + C2) * E ** 2).toFixed(4)}
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz11_2;
