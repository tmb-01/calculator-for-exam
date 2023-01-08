import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz13_6.png";

function Quiz13_6() {
  const [data, setData] = useState({});
  const E = data?.E || 0;

  return (
    <PartWrapper>
      <Half>
        differentiator loaded
        <Form data={data} setData={setData} 
        inputs={["E"]} />
        U = E <br />
        Result: {(E).toFixed(4)} v
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz13_6;
