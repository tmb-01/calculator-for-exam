import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz1_3.png";

function Quiz1_3() {
  const [data, setData] = useState({});
  const E = data?.E || 0;
  const J = data?.J || 0;
  const R = data?.R || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["E", "J", "R"]} />
        I = (E / (2 * R)) - (J / 2)
        <br />
        Result: {(E / (2 * R) - J / 2).toFixed(4)} A
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz1_3;
