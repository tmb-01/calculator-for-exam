import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz2_4.png";

function Quiz2_4() {
  const [data, setData] = useState({});
  const P = data?.P || 0;
  const R = data?.R || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["P", "R"]} />
        Ex = Math.sqrt(5 * P * R) <br />
        Result: {Math.sqrt(5 * P * R).toFixed(4)} V
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz2_4;
