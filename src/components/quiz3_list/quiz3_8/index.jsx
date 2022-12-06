import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz3_8.png";

function Quiz3_8() {
  const [data, setData] = useState({});
  const E = data?.E || 0;
  const J = data?.J || 0;
  const R1 = data?.R1 || 0;
  const R2 = data?.R2 || 0;
  const R3 = data?.R3 || 0;

  return (
    <PartWrapper>
      <Half>
        <Form
          data={data}
          setData={setData}
          inputs={["E", "J", "R1", "R2", "R3"]}
        />
        P = E ** 2 / (2 * R1 + (R2 * R3) / (R2 + R3)) - E * J<br />
        Result: {(E ** 2 / (2 * R1 + (R2 * R3) / (R2 + R3)) - E * J).toFixed(
          4
        )}{" "}
        W
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz3_8;
