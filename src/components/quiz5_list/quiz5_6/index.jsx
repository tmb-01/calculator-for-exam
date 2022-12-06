import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz5_6.png";

function Quiz5_6() {
  const [data, setData] = useState({});
  const R1 = data?.R1 || 0;
  

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["R1", "R2"]} />
         <br />
        Result: {(0).toFixed(4)} Ω
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz5_6;
