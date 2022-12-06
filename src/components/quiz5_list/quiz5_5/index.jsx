import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz5_5.png";

function Quiz5_5() {
  const [data, setData] = useState({});
  const R1 = data?.R1 || 0;
  const R2 = data?.R2 || 0;
  const E = data?.E || 0;
  

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} 
        inputs={["R1", "R2","E"]} />
        R21 = (R2*(E-E*(R2/(R1+R2))/E)) <br />
        Result: {((R2*(E-E*(R2/(R1+R2))/E))).toFixed(4)} Ω
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz5_5;
