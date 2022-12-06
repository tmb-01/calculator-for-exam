import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz2_10.png";

function Quiz2_10() {
  const [data, setData] = useState({});
  const R = data?.R || 0;
  const P = data?.P || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["R", "P"]} />
        E = 4 * Math.sqrt(P * R)
        <br />
        Result: {(4 * Math.sqrt(P * R)).toFixed(4)} V
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz2_10;
