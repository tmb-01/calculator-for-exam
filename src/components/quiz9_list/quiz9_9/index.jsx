import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz9_9.png";

function Quiz9_9() {
  const [data, setData] = useState({});
  const R = data?.R || 0;
  const Rs = data?.Rs || 0;
  const C = data?.C || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["R", "Rs", "C"]} />
        T = (R + Rs) * C <br />
        Result: {((R + Rs) * C).toFixed(4)} s
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz9_9;
