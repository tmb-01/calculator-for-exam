import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz7_10.png";

function Quiz7_10() {
  const [data, setData] = useState({});
  const E = data?.E || 0;
  const U = data?.U || 0;
  const R1 = data?.R1 || 0;
  const R3 = data?.R3 || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} 
        inputs={["E", "U", "R1", "R3"]} />
        P = E * ((E - 2 * U) / R1 + (E - U) / R3) <br />
        Result: {(E * ((E - 2 * U) / R1 + (E - U) / R3)).toFixed(4)} W
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz7_10;
