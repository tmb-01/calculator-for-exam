import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz13_9.png";

function Quiz13_9() {
  const [data, setData] = useState({});
  const C = data?.C || 0;
  const τ = data?.τ || 0;
  const Im = data?.Im || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["C", "τ", "Im"]} />
        U = (3 * Im * τ) / C <br />
        Result: {((3 * Im * τ) / C).toFixed(4)} v
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz13_9;
