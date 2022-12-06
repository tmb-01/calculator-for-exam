import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz7_2.png";

function Quiz7_2() {
  const [data, setData] = useState({});
  const P = data?.P || 0;
  const R = data?.R || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} 
        inputs={["P", "R"]} />
         <br />
        Result: {(0).toFixed(4)} V
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz7_2;
