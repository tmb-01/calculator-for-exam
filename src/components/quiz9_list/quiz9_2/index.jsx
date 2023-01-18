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
        What constant current, is required to charge a 3 μF capacitor from 0 to
        2 V in 5 ms ? (The unit must be placed)
        <br />
        <Form
          data={data}
          setData={setData}
          inputs={["C", "deltaU", "deltaT"]}
        />
        I = C * (deltaU / deltaT)
        <br />
        Result: {(C * (deltaU / deltaT)).toFixed(2)} mA
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz9_2;
