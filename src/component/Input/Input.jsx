import React, { useState } from "react";

export default function Input({label,name,error,variant,...props}) {
  const [text , setText] = useState('');
  return (
    <div className="input">
      <input
        className={`${error} ${variant}`}
        {...props}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}
