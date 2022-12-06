import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz4_2.png";

function Quiz4_2() {
  const [data, setData] = useState({});
  const U = data?.U || 0;
  
  

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["U", "U"]} />
         <br />
        Result: {(0).toFixed(4)} W
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz4_2;
