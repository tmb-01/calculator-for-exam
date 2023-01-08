import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz10_6.png";

function Quiz10_6() {
  const [data, setData] = useState({});
  const E = data?.E || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["E"]} />
        deltaU = -(E / 4) <br />
        Result: {(-(E / 4)).toFixed(4)} V
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz10_6;
