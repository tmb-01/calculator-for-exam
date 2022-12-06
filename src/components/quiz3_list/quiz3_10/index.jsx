import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
// import img from "../../../assets/images/quiz3_10.png";

function Quiz3_10() {
  const [data, setData] = useState({});
  const P = data?.P || 0;
  const R = data?.R || 0;
  const J = data?.J || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["P", "R", "J"]} />
        R2 = (R * Math.sqrt(P / R)) / (J - Math.sqrt(P / R))
        <br />
        Result: {((R * Math.sqrt(P / R)) / (J - Math.sqrt(P / R))).toFixed(4)} Ω
      </Half>
      <Half>
        {/* <img src={img} alt="" /> */}
      </Half>
    </PartWrapper>
  );
}

export default Quiz3_10;
