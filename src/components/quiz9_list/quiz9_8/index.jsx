import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz9_8.png";

function Quiz9_8() {
  const [data, setData] = useState({});
  const T = data?.T || 0;
  const R = data?.R || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["T","R"]} />
        C = -(T / (R * Math.log(0.5)))<br />
        Result: {(-(T / (R * Math.log(0.5)))).toFixed(4)} W
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz9_8;
