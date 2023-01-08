import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz9_3.png";

function Quiz9_3() {
  const [data, setData] = useState({});
  // const J = data?.J || 0;


  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} 
        inputs={[]} />
         <br />
        Result: η=50% 
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz9_3;
