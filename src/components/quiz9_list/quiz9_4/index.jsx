import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz9_4.png";

function Quiz9_4() {
  const [data, setData] = useState({});
  const L = data?.L || 0;
  const R = data?.R || 0;
  const R2 = data?.R2 || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["L", "R", "R2"]} />
        t = -(L / (R + R2)) * Math.log(0.5) <br />
        Result: {(-(L / (R + R2)) * Math.log(0.5)).toFixed(4)} s
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz9_4;
