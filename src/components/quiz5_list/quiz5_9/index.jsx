import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz5_9.png";

function Quiz5_9() {
  const [data, setData] = useState({});
  const E = data?.E || 0;
  const R21 = data?.R21 || 0;
  const R11 = data?.R11 || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["R11", "R21", "E"]} />
        U2/U1 = (E * R21) / R11 / E <br />
        Result: {((E * R21) / R11 / E).toFixed(4)}
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz5_9;
