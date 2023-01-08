import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz12_9.png";

function Quiz12_9() {
  const [data, setData] = useState({});
  const C = data?.C || 0;
  const E1 = data?.E1 || 0;
  const E2 = data?.E2 || 0;
  const R1 = data?.R1 || 0;
  const R2 = data?.R2 || 0;

  return (
    <PartWrapper>
      <Half>
        <Form
          data={data}
          setData={setData}
          inputs={["C", "E1", "E2", "R1", "R2"]}
        />
        deltaW = 0.5 * C * (E1 ** 2 - ((E1 * R2 + E2 * R1) / (R1 + R2)) ** 2)<br />
        Result:{" "}
        {(0.5 * C * (E1 ** 2 - ((E1 * R2 + E2 * R1) / (R1 + R2)) ** 2)).toFixed(
          4
        )}
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz12_9;
