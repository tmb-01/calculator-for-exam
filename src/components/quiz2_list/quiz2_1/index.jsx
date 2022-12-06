import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz2_1.png";

function Quiz2_1() {
  const [data, setData] = useState({});
  const E = data?.E || 0;
  const R = data?.R || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["E", "R"]} />
        P = ((E / 5) * R) ** 2 * 2.6 * R <br />
        Result: {(((E / 5) * R) ** 2 * 2.6 * R).toFixed(4)} W
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz2_1;
