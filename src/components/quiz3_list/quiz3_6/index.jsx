import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz3_6.png";

function Quiz3_6() {
  const [data, setData] = useState({});
  const I1 = data?.I1 || 0;
  const I2 = data?.I2 || 0;
  const E = data?.E || 0;
  const J = data?.J || 0;
  const R = data?.R || 0;

  return (
    <PartWrapper>
      <Half>
        <Form
          data={data}
          setData={setData}
          inputs={["I1", "I2", "E", "J", "R"]}
        />
        P = I1 * R * (J - I1) - E * (I1 + I2)
        <br />
        Result: {(I1 * R * (J - I1) - E * (I1 + I2)).toFixed(4)} W
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz3_6;
