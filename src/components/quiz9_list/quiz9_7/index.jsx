import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz9_7.png";

function Quiz9_7() {
  const [data, setData] = useState({});
  const J = data?.J || 0;


  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} 
        inputs={["J"]} />
         <br />
        Result: {(0).toFixed(4)} W
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz9_7;
