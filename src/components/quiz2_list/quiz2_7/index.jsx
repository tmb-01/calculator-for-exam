import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz2_7.png";

function Quiz2_7() {
  const [data, setData] = useState({});
  const R1 = data?.R1 || 0;
  const R2 = data?.R2 || 0;
  const R3 = data?.R3 || 0;
  const P1 = data?.P1 || 0;
  const P2 = data?.P2 || 0;
  const P3 = data?.P3 || 0;

  return (
    <PartWrapper>
      <Half>
        <Form
          data={data}
          setData={setData}
          inputs={["R1", "R2", "R3", "P1", "P2", "P3"]}
        />
        U = Math.sqrt(P2 * R2) * ((R2 + R1) / R1) * (R3 + (R1 * R2) / (R1 + R2)){" "}
        <br />
        Result:{" "}
        {(
          Math.sqrt(P2 * R2) *
          ((R2 + R1) / R1) *
          (R3 + (R1 * R2) / (R1 + R2))
        ).toFixed(4)}{" "}
        V
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz2_7;
