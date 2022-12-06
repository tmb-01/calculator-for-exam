import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz6_2.png";

function Quiz6_2() {
  const [data, setData] = useState({});
  const U = data?.U || 0;
  const Ii = data?.Ii || 0;
  const Ui = data?.Ui || 0;
  const R2 = data?.R2 || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["U", "Ii", "Ui", "R2"]} />
        R1 = U / (Ii + Ui / R2) - ((Ui / Ii) * R2) / (Ui / Ii + R2)<br />
        Result:{" "}
        {(U / (Ii + Ui / R2) - ((Ui / Ii) * R2) / (Ui / Ii + R2)).toFixed(4)} Ω
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz6_2;
