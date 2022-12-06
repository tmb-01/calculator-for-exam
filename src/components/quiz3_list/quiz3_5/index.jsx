import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz3_5.png";

function Quiz3_5() {
  const [data, setData] = useState({});
  const J1_1 = data?.J1_1 || 0;
  const U3_1 = data?.U3_1 || 0;
  const J2_2 = data?.J2_2 || 0;
  const U3_2 = data?.U3_2 || 0;
  const J1_3 = data?.J1_3 || 0;
  console.log("====================================");
  console.log(
    J1_1,
    U3_1,
    J2_2,
    U3_2,
    J1_3,
    J1_3 * (U3_1 / J1_1) + J2_2 * (U3_2 / J2_2)
  );
  console.log("====================================");
  return (
    <PartWrapper>
      <Half>
        <Form
          data={data}
          setData={setData}
          inputs={["J1_1", "U3_1", "J2_2", "U3_2", "J1_3"]}
        />
        U3 = J1_3 * (U3_1 / J1_1) + J2_2 * (U3_2 / J2_2) <br />
        Result: {(J1_3 * (U3_1 / J1_1) + J2_2 * (U3_2 / J2_2)).toFixed(4)} V
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz3_5;
