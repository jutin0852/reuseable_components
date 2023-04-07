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
    </div>
  );
}
