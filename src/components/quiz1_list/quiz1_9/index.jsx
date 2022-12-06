import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz1_9.png";

function Quiz1_9() {
  const [data, setData] = useState({});
  const X = data?.X || 0;
  const R = data?.R || 0;
  const R1 = data?.R1 || 0;
  const R2 = data?.R2 || 0;
  const J = data?.J || 0;

  return (
    <PartWrapper>
      <Half>
        <Form
          data={data}
          setData={setData}
          inputs={["J", "X", "R", "R1", "R2"]}
        />
        P = J ** 2 * (X ** 2 - 1) * ((R1 ** 2 * R2 ** 2) / (R1 + R2) ** 2 / R2)
        <br />
        Result:{" "}
        {(
          J ** 2 *
          (X ** 2 - 1) *
          ((R1 ** 2 * R2 ** 2) / (R1 + R2) ** 2 / R2)
        ).toFixed(4)}{" "}
        W
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz1_9;
