import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz2_9.png";

function Quiz2_9() {
  const [data, setData] = useState({});
  const R1 = data?.R1 || 0;
  const R2 = data?.R2 || 0;
  const R3 = data?.R3 || 0;
  const E1 = data?.E1 || 0;
  const E2 = data?.E2 || 0;

  return (
    <PartWrapper>
      <Half>
        <Form
          data={data}
          setData={setData}
          inputs={["R1", "R2", "R3", "E1", "E2"]}
        />
        J = ((R2 / (R1 + R2)) * E1 - E2) / R3
        <br />
        Result: {(((R2 / (R1 + R2)) * E1 - E2) / R3).toFixed(4)} A
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz2_9;
