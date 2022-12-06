import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz3_7.png";

function Quiz3_7() {
  const [data, setData] = useState({});
  const J = data?.J || 0;
  const X = data?.X || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["J", "X"]} />
        deltaJ = J * (Math.sqrt(X) - 1)
        <br />
        Result: {(J * (Math.sqrt(X) - 1)).toFixed(4)} W
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz3_7;
