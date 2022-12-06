import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz5_4.png";

function Quiz5_4() {
  const [data, setData] = useState({});
  const R21 = data?.R21 || 0;
  const R11 = data?.R11 || 0;
  const E01 = data?.E01 || 0;
  const E02 = data?.E02 || 0;

  return (
    <PartWrapper>
      <Half>
        <Form
          data={data}
          setData={setData}
          inputs={["R11", "R21", "E01", "E02"]}
        />
        [V] = R21 * (E01 / R11) - E02<br />
        Result: {(R21 * (E01 / R11) - E02).toFixed(4)} V
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz5_4;
