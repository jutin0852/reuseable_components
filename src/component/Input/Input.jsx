import React, { useState } from "react";

export default function Input({label,name,error,variant,someText,...props}) {
  const [text , setText] = useState('');
  return (
    <div className={`input ${error}`} >
      <p>{someText}</p>
      <input
        className={` ${variant}`}
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
