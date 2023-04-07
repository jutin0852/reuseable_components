import React from "react";
import Input from "./Input";

export default function MyInputs() {
  return (
    <div>
      <Input
        label="Label"
        type="text"
        placeholder="placeholder"
        name="label"
        variant="defaultInput"
      />
      <Input
        label="Label"
        type="text"
        placeholder="placeholder"
        name="label"
        variant="defaultInput"
        error="error"
      />
      <Input
        label="Label"
        type="text"
        placeholder="placeholder"
        name="label"
        disabled
      />
      <Input
        label="Label"
        type="text"
        placeholder="placeholder"
        name="label"
        variant="defaultInput"
        someText="some interesting text"
      />
      <Input
        label="Label"
        type="text"
        placeholder="placeholder"
        name="label"
        variant="defaultInput"
        error="error"
        someText="some interesting text"
      />
    </div>
  );
}
