import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz3_2.png";

function Quiz3_2() {
  const [data, setData] = useState({});
  const U1 = data?.U1 || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["U1"]} />
        U2 = (3 * U1) / 10 <br />
        Result: {((3 * U1) / 10).toFixed(4)} V
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz3_2;
