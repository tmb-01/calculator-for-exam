import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz9_8.png";

function Quiz9_8() {
  const [data, setData] = useState({});
  const T = data?.T || 0;
  const R = data?.R || 0;

  return (
    <PartWrapper>
      <Half>
        Find value of capacitor C such, that voltage on capacitor (reset signal)
        rises from 0 to ½ VCC in time of t = 20 ms. VCC = 3.4 V, RP = 51 kΩ.
        (The unit must be placed)
        <br />
        <Form data={data} setData={setData} inputs={["T", "R"]} />
        C = -(T / (R * Math.log(0.5)))
        <br />
        Result: {(-(T / (R * Math.log(0.5)))).toFixed(4)} F
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz9_8;
