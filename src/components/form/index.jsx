import React, { useState } from "react";
import { InputWrapper } from "./styles";

function Form({ inputs, data, setData }) {
  return (
    <div>
      {inputs?.map((label, index) => (
        <Input
          key={index}
          label={label}
          value={data[label]}
          onChange={(value) => setData((prev) => ({ ...prev, [label]: value }))}
        />
      ))}
    </div>
  );
}

function Input({ label, onChange, value }) {
  return (
    <InputWrapper>
      <b>{label}</b>
      <input
        type="number"
        onChange={(e) => onChange(Number(e.target.value))}
        value={value}
      />
    </InputWrapper>
  );
}

export { Form, Input };
