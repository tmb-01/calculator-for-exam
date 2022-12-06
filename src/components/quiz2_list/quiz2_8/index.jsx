import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
// import img from "../../../assets/images/quiz2_7.png";

function Quiz2_8() {
  const [data, setData] = useState({});
  const X = data?.X || 0;
  const U = data?.U || 0;
  const I = data?.I || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["X", "U", "I"]} />
        t = X / (U * I)
        <br />
        Result: {(X / (U * I)).toFixed(4)} V
      </Half>
      <Half>{/* <img src={img} alt="" /> */}</Half>
    </PartWrapper>
  );
}

export default Quiz2_8;
