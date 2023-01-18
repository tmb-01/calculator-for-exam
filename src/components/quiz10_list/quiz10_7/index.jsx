import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz10_7.png";

function Quiz10_7() {
  const [data, setData] = useState({});
  const E = data?.E || 0;
  const C = data?.C || 0;
  const R1 = data?.R1 || 0;
  const R2 = data?.R2 || 0;

  return (
    <PartWrapper>
      <Half>
        A switch closes at t=0. Find the total energy supplied by the source to
        the capacitor, in pWs. R₁=2k, R=7kn, C=7uF and E=6V.
        <br />
        <Form data={data} setData={setData} inputs={["E", "C", "R1", "R2"]} />
        W = 0.5 * C * E ** 2 * ((R1 - R2) / (R1 + R2)) ** 2<br />
        Result: {(0.5 * C * E ** 2 * ((R1 - R2) / (R1 + R2)) ** 2).toFixed(
          4
        )}{" "}
        nanoWatt (J)
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz10_7;
