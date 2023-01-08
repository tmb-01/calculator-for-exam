import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz11_8.png";

function Quiz11_8() {
  const [data, setData] = useState({});
  const C1 = data?.C1 || 0;
  const C2 = data?.C2 || 0;
  const E = data?.E || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["E", "C1", "C2"]} />
        W = 0.5 * C1 * ((E * C2) / (C1 + C2)) ** 2<br />
        Result: {(0.5 * C1 * ((E * C2) / (C1 + C2)) ** 2).toFixed(4)} v
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz11_8;
