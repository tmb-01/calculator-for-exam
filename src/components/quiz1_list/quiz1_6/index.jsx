import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz1_6.png";

function Quiz1_6() {
  const [data, setData] = useState({});
  const I = data?.I || 0;
  const Gw = data?.Gw || 0;
  const G = data?.G || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["I", "Gw", "G"]} />
        U = (I / (Gw + G))
        <br />
        Result: {(I / (Gw + G)).toFixed(4)} V
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz1_6;
