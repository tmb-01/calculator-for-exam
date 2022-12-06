import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz6_10.png";

function Quiz6_10() {
  const [data, setData] = useState({});
  const R = data?.R || 0;
  const E = data?.E || 0;
  const J = data?.J || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["R", "E","J"]} />
        Va = -11 * E + 6 * R * 0.5 * J <br />
        Result: {(-11 * E + 6 * R * 0.5 * J).toFixed(4)} V
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz6_10;
