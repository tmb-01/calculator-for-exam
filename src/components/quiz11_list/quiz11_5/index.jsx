import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz11_5.png";

function Quiz11_5() {
  const [data, setData] = useState({});
  const R1 = data?.R1 || 0;
  const R2 = data?.R2 || 0;
  const E1 = data?.E1 || 0;
  const E2 = data?.E2 || 0;
  const L = data?.L || 0;

  return (
    <PartWrapper>
      <Half>
        <Form
          data={data}
          setData={setData}
          inputs={["R1", "R2", "E1", "E2", "L"]}
        />
        deltaW = 0.5 * L * (((E1 + E2) / (R1 + R2)) ** 2 - (E2 / R2) ** 2)<br />
        Result:{" "}
        {(0.5 * L * (((E1 + E2) / (R1 + R2)) ** 2 - (E2 / R2) ** 2)).toFixed(4)}
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz11_5;
