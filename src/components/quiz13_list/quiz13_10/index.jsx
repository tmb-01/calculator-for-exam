import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz13_10.png";

function Quiz13_10() {
  const [data, setData] = useState({});
  const T = data?.T || 0;
  const E = data?.E || 0;
  const τd = data?.τd || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["E", "τd", "T"]} />
        U = (-T * E) / τd
        <br />
        Result: {((-T * E) / τd).toFixed(4)} v
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz13_10;
