import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz4_9.png";

function Quiz4_9() {
  const [data, setData] = useState({});
  const E = data?.E || 0;
  const R1 = data?.R1 || 0;
  const R2 = data?.R2 || 0;
  const R3 = data?.R3 || 0;
  const R4 = data?.R4 || 0;

  return (
    <PartWrapper>
      <Half>
        <Form
          data={data}
          setData={setData}
          inputs={["E", "R1", "R2", "R3", "R4"]}
        />
        E0 = E * ((R2 + (R3 * R4) / (R3 + R4)) / (R2 + R1 + (R3 * R4) / (R3 +
        R4))) <br />
        Result:{" "}
        {(
          E *
          ((R2 + (R3 * R4) / (R3 + R4)) / (R2 + R1 + (R3 * R4) / (R3 + R4)))
        ).toFixed(4)}{" "}
        V
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz4_9;
