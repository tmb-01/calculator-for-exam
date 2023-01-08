import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz13_2.png";

function Quiz13_2() {
  const [data, setData] = useState({});
  const I = data?.I || 0;
  const td = data?.td || 0;
  const C = data?.C || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["I","td","C"]} />
        W = (2 * (I * td) ** 2) / C<br />
        Result: {((2 * (I * td) ** 2) / C).toFixed(4)} v
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz13_2;
