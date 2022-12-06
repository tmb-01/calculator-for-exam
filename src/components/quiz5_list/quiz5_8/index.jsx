import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz5_8.png";

function Quiz5_8() {
  const [data, setData] = useState({});
  const G21 = data?.G21 || 0;
  const G22 = data?.G22 || 0;
  const E = data?.E || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["G21", "G22", "E"]} />
        [V] = -((G21 * E) / G22) <br />
        Result: {(-((G21 * E) / G22)).toFixed(4)} V
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz5_8;
