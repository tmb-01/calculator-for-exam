import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz4_4.png";

function Quiz4_4() {
  const [data, setData] = useState({});
  const Eo1 = data?.Eo1 || 0;
  const Eo2 = data?.Eo2 || 0;
  const Rt1 = data?.Rt1 || 0;
  const Rt2 = data?.Rt2 || 0;

  return (
    <PartWrapper>
      <Half>
        <Form
          data={data}
          setData={setData}
          inputs={["Eo1", "Eo2", "Rt1", "Rt2"]}
        />
        Eo3 = Eo1 - ((Eo1 + Eo2) * Rt1) / (Rt1 + Rt2) <br />
        Result: {(Eo1 - ((Eo1 + Eo2) * Rt1) / (Rt1 + Rt2)).toFixed(4)} W
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz4_4;
