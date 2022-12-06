import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz5_1.png";

function Quiz5_1() {
  const [data, setData] = useState({});
  const G11 = data?.G11 || 0;
  const G22 = data?.G22 || 0;
  const G12 = data?.G12 || 0;
  const G21 = data?.G21 || 0;
  const E = data?.E || 0;

  return (
    <PartWrapper>
      <Half>
        <Form
          data={data}
          setData={setData}
          inputs={["G11", "G22", "G12", "G21", "E"]}
        />
        [A] = G11 * E + G12 * ((-G21 * E) / G22)
        <br />
        Result: {(G11 * E + G12 * ((-G21 * E) / G22)).toFixed(4)} A
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz5_1;
