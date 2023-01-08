import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz14_5.png";

function Quiz14_5() {
  const [data, setData] = useState({});
  const E1 = data?.E1 || 0;
  const E2 = data?.E2 || 0;
  const C = data?.C || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["E1", "E2", "C"]} />
        deltaW = 0.5 * C * (E1 ** 2 - E2 ** 2)<br />
        Result: {(0.5 * C * (E1 ** 2 - E2 ** 2)).toFixed(4)}
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz14_5;
