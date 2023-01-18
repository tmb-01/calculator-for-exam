import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz9_11.png";

function Quiz9_11() {
  const [data, setData] = useState({});
  const U = data?.U || 0;
  const τ = data?.τ || 0;
  const L = data?.L || 0;

  return (
    <PartWrapper>
      <Half>
        An inductance L = 7 mH is initially uncharged. A voltage pulse of
        magnitude Um = 7 V and duration τ = 3 ms is applied at t = 0. Find the
        energy stored (with unit) at t = 2τ.
        <br />
        <Form data={data} setData={setData} inputs={["U", "τ", "L"]} />
        W = 0.5 * ((U * τ) ** 2 / L)
        <br />
        Result: {((1 / 2) * ((U * τ) ** 2 / L)).toFixed(4)} mJ
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz9_11;
