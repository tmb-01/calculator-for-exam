import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz10_1.png";

function Quiz10_1() {
  const [data, setData] = useState({});
  const R = data?.R || 0;
  const C = data?.C || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} 
        inputs={["R","C"]} />
        t = (5 / 2) * R * C <br />
        Result: {((5 / 2) * R * C).toFixed(4)} nanosecond
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz10_1;
