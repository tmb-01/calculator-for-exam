import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz7_4.png";

function Quiz7_4() {
  const [data, setData] = useState({});
  const Uin = data?.Uin || 0;
  const U2 = data?.U2 || 0;
  const I2 = data?.I2 || 0;
  const Ri = data?.Ri || 0;

  return (
    <PartWrapper>
      <Half>
        <Form
          data={data}
          setData={setData}
          inputs={["Uin", "U2", "I2", "Ri"]}
        />
        R = (Uin - U2) / (I2 + U2 / Ri)<br />
        Result: {((Uin - U2) / (I2 + U2 / Ri)).toFixed(4)} Ω
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz7_4;
