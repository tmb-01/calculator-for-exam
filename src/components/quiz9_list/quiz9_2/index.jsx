import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz9_2.png";

function Quiz9_2() {
  const [data, setData] = useState({});
  const C = data?.C || 0;
  const deltaU = data?.deltaU || 0;
  const deltaT = data?.deltaT || 0;

  return (
    <PartWrapper>
      <Half>
        <Form
          data={data}
          setData={setData}
          inputs={["C", "deltaU", "deltaT"]}
        />
        I = C * (deltaU / deltaT)
        <br />
        Result: {(C * (deltaU / deltaT)).toFixed(4)} A
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz9_2;
