import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz7_5.png";

function Quiz7_5() {
  const [data, setData] = useState({});
  const R = data?.R || 0;

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} 
        inputs={["R"]} />
        P = 0.7 ** 2 / R <br />
        Result: {(0.7 ** 2 / R).toFixed(4)} mW
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz7_5;
