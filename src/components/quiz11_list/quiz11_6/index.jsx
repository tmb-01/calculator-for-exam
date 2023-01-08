import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz11_6.png";

function Quiz11_6() {
  const [data, setData] = useState({});
  const R = data?.R || 0;
  const E = data?.E || 0;
  const C1 = data?.C1 || 0;
  const C2 = data?.C2 || 0;
  const t = data?.t || 0;

  return (
    <PartWrapper>
      <Half>
        <Form
          data={data}
          setData={setData}
          inputs={["R", "E", "C1", "C2", "t"]}
        />
        i1(t) = ((E * C1) / (R * (C1 + C2))) * Math.E ** (-t / (R * (C1 + C2)))
        <br />
        Result:{" "}
        {(
          ((E * C1) / (R * (C1 + C2))) *
          Math.E ** (-t / (R * (C1 + C2)))
        ).toFixed(4)}
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz11_6;
