import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz7_1.png";

function Quiz7_1() {
  const [data, setData] = useState({});
  const J = data?.J || 0;
  const R = data?.R || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} 
        inputs={["J", "R"]} />
        P = J * 0.7 - 0.7 ** 2 / R<br />
        Result: {(J * 0.7 - 0.7 ** 2 / R).toFixed(4)} W
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz7_1;
