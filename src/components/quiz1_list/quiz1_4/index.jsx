import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz1_4.png";

function Quiz1_4() {
  const [data, setData] = useState({});
  const J = data?.J || 0;
  const E = data?.E || 0;
  const R1 = data?.R1 || 0;
  const R2 = data?.R2 || 0;
  const R3 = data?.R3 || 0;

  return (
    <PartWrapper>
      <Half>
        <Form
          data={data}
          setData={setData}
          inputs={["J", "E", "R1", "R2", "R3"]}
        />
        P = (J ** 2 * R2 * R3) / (R2 + R3) - J * E
        <br />
        Result: {((J ** 2 * R2 * R3) / (R2 + R3) - J * E).toFixed(4)} W
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz1_4;
