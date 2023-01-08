import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz13_7.png";

function Quiz13_7() {
  const [data, setData] = useState({});
  const U = data?.U || 0;
  const td = data?.td || 0;
  const L = data?.L || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["U", "td", "L"]} />
        W = (2 * ((U * td) ^ 2)) / L<br />
        Result: {((2 * ((U * td) ^ 2)) / L).toFixed(4)} 
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz13_7;
