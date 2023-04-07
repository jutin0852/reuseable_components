import React from "react";

export default function Input({label,name,...props}) {
  return (
    <div className="input">
      <input {...props} /> 
      <label htmlFor={name}>{label}</label>
    </div>
  );
}
