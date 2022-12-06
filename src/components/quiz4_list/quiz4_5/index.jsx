import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
// import img from "../../../assets/images/quiz4_5.png";

function Quiz4_5() {
  const [data, setData] = useState({});
  const Rt = data?.Rt || 0;
  const R1 = data?.R1 || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["Rt", "R1"]} />
        R2 = (Rt * R1) / (R1 - Rt) <br />
        Result: {((Rt * R1) / (R1 - Rt)).toFixed(4)} W
      </Half>
      <Half>{/* <img src={img} alt="" /> */}</Half>
    </PartWrapper>
  );
}

export default Quiz4_5;
