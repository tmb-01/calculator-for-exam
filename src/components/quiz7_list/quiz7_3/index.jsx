import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz7_3.png";

function Quiz7_3() {
  const [data, setData] = useState({});
  const Un = data?.Un || 0;
  const Uf = data?.Uf || 0;
  const x = data?.x || 0;
  const In = data?.In || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["Un", "Uf", "x", "In"]} />
        R = (Un * Uf) / (x * In) <br />
        Result: {((Un * Uf) / (x * In)).toFixed(4)} Ω
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz7_3;
