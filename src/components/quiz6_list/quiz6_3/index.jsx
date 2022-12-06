import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz6_3.png";

function Quiz6_3() {
  const [data, setData] = useState({});
  const P = data?.P || 0;
  const E = data?.E || 0;
  const J = data?.J || 0;
  const R = data?.R || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} 
        inputs={["P", "E","J","R"]} />
        Ex = (P / E + J) * R - E + (P / E) * R <br />
        Result: {((P / E + J) * R - E + (P / E) * R).toFixed(4)} V
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz6_3;
