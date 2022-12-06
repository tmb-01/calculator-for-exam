import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz5_3.png";

function Quiz5_3() {
  const [data, setData] = useState({});
  const E01 = data?.E01 || 0;
  const R11 = data?.R11 || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} 
        inputs={["E01", "R11"]} />
        [A] = E01 / R11<br />
        Result: {(E01 / R11).toFixed(4)} A
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz5_3;
