import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz6_4.png";

function Quiz6_4() {
  const [data, setData] = useState({});
  const P = data?.P || 0;
  const R = data?.R || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["P", "R"]} />
        Jx = Math.sqrt(P / (1.28 * R)) <br />
        Result: {Math.sqrt(P / (1.28 * R)).toFixed(4)} A
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz6_4;
