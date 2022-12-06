import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz7_6.png";

function Quiz7_6() {
  const [data, setData] = useState({});
  const E = data?.E || 0;
  const R = data?.R || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["E", "R"]} />
        I = (E - 1.4) / R<br />
        Result: {((E - 1.4) / R).toFixed(4)} mA
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz7_6;
