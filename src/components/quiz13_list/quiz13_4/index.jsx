import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz13_4.png";

function Quiz13_4() {
  const [data, setData] = useState({});
  const U1 = data?.U1 || 0;
  const U2 = data?.U2 || 0;
  const tmin = data?.tmin || 0;
  const C = data?.C || 0;

  return (
    <PartWrapper>
      <Half>
        <Form
          data={data}
          setData={setData}
          inputs={["U1", "U2", "tmin", "C"]}
        />
        R = -tmin / (C * Math.log(1 - U2 / U1))
        <br />
        Result: {(-tmin / (C * Math.log(1 - U2 / U1))).toFixed(4)}
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz13_4;
