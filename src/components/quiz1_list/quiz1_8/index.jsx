import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz1_8.png";

function Quiz1_8() {
  const [data, setData] = useState({});
  const P = data?.P || 0;
  const R = data?.R || 0;

  return (
    <PartWrapper>
      <Half>
        <Form
          data={data}
          setData={setData}
          inputs={["P", "R"]}
        />
        E = 4 * R * Math.sqrt(P / R)
        <br />
        Result: {(4 * R * Math.sqrt(P / R)).toFixed(4)} V
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz1_8;
