import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz3_1.png";

function Quiz3_1() {
  const [data, setData] = useState({});
  const Uj = data?.Uj || 0;
  const Ue = data?.Ue || 0;
  

  return (
    <PartWrapper>
      <Half>
        <Form data={data} setData={setData} inputs={["Uj", "Ue"]} />
        U = Uj - Ue <br />
        Result: {(Uj-Ue).toFixed(4)} W
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz3_1;
