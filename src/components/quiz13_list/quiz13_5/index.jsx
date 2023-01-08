import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz13_5.png";

function Quiz13_5() {
  const [data, setData] = useState({});
  const L = data?.L || 0;
  const U = data?.U || 0;
  const τ = data?.τ || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["L", "U", "τ"]} />
        W = 0.5 * ((U * τ) ** 2 / L)<br />
        Result: {(0.5 * ((U * τ) ** 2 / L)).toFixed(4)}
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz13_5;
