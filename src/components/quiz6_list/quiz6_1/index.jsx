import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz6_1.png";

function Quiz6_1() {
  const [data, setData] = useState({});
  const P = data?.P || 0;
  const R = data?.R || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["P", "R"]} />
        Ex = Math.sqrt(5 * P * R)<br />
        Result: {(Math.sqrt(5 * P * R)).toFixed(4)} V
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz6_1;
