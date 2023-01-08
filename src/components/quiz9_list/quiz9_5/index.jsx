import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz9_5.png";

function Quiz9_5() {
  const [data, setData] = useState({});
  const C = data?.C || 0;
  const C1 = data?.C1 || 0;
  const Ct = data?.Ct || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} 
        inputs={["C","C1","Ct"]} />
        Cx = (C * C1 - Ct * C1 - Ct * C) / (Ct - C) <br />
        Result: {((C * C1 - Ct * C1 - Ct * C) / (Ct - C)).toFixed(4)}
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz9_5;
