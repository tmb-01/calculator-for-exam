import React, { useState } from "react";
import { Half, PartWrapper } from "../../../pages/quiz1/styles";
import { Form } from "../../form";
import img from "../../../assets/images/quiz6_5.png";

function Quiz6_5() {
  const [data, setData] = useState({});
  const G11 = data?.G11 || 0;
  

  return (
    <PartWrapper>
      <Half>
        <Form
          data={data}
          setData={setData}
          inputs={["G", "G"]}
        />
         <br />
        Result: {(0).toFixed(4)} A
      </Half>
      <Half>
        <img src={img} alt="" />
      </Half>
    </PartWrapper>
  );
}

export default Quiz6_5;
