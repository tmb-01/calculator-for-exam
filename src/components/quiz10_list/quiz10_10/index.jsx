import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz10_10.png";

function Quiz10_10() {
  const [data, setData] = useState({});
  const E1 = data?.E1 || 0;
  const E2 = data?.E2 || 0;
  const R = data?.R || 0;
  const R1 = data?.R1 || 0;
  const R2 = data?.R2 || 0;

  return (
    <PartWrapper>
      <Half>
        A switch is moved from 1 to 2 at t=0. Calculate increment of the
        capacitor voltage: AU-U-Us (sign and value, in V). E₁=15V; E2-20V, R=90,
        R₁=30; R2=80; C=2µF.
        <br />
        <Form
          data={data}
          setData={setData}
          inputs={["E1", "E2", "R", "R1", "R2"]}
        />
        deltaU = (E2 * R) / (R2 + R) - (E1 * R) / (R1 + R) <br />
        Result: {((E2 * R) / (R2 + R) - (E1 * R) / (R1 + R)).toFixed(4)} V
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz10_10;
