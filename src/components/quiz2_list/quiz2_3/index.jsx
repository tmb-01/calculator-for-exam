import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz2_3.png";

function Quiz2_3() {
  const [data, setData] = useState({});
  const U = data?.U || 0;
  const R2 = data?.R2 || 0;
  const Il = data?.Il || 0;
  const Ul = data?.Ul || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["U", "R2","Il","Ul"]} />
        R1 = U / (Il + Ul / R2) - ((Ul / Il) * R2) / (Ul / Il + R2) <br />
        Result:{" "}
        {(U / (Il + Ul / R2) - ((Ul / Il) * R2) / (Ul / Il + R2)).toFixed(4)} Ω
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz2_3;
