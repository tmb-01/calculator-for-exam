import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz7_7.png";

function Quiz7_7() {
  const [data, setData] = useState({});
  const E = data?.E || 0;
  const J = data?.J || 0;
  const Rj = data?.Rj || 0;
  const U0 = data?.U0 || 0;
  const U1 = data?.U1 || 0;
  const I1 = data?.I1 || 0;
  const Re = data?.Re || 0;

  return (
    <PartWrapper>
      <Half>
        <Form
          data={data}
          setData={setData}
          inputs={["E", "J", "Rj", "U0", "U1", "I1", "Re"]}
        />
        I = (E - J * Rj - U0) / ((U1 - U0) / I1 + Rj + Re)
        <br />
        Result: {((E - J * Rj - U0) / ((U1 - U0) / I1 + Rj + Re)).toFixed(4)} A
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz7_7;
