import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz14_4.png";

function Quiz14_4() {
  const [data, setData] = useState({});
  const R = data?.R || 0;
  const L = data?.L || 0;
  const C = data?.C || 0;
  const E1 = data?.E1 || 0;
  const E2 = data?.E2 || 0;
  

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} 
        inputs={["R", "L","C","E1","E2"]} />
        {/* C = L / R ** 2<br /> */}
        0.5C*(E1^2-E2^2) <br />
        Result: {(
          // L / R ** 2
          0.5*C*(E1**2-E2**2)
          ).toFixed(4)}
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz14_4;
