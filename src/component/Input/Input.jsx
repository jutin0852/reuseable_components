import React, { useState } from "react";

export default function Input({
  label,
  name,
  error,
  variant,
  someText,
  startIcon,
  endIcon,
  size,
  multiline,
  row,
  ...props
}) {
  if (multiline) {
    return (
      <div className={`input `}>
        <textarea rows={row} {...props}></textarea>
        <label htmlFor={name}>{label}</label>
      </div>
    );
  }
  return (
    <div className={`input ${startIcon && "icon"} ${error} ${size}`}>
      <p>{someText}</p>
      <img className="startIcon" src={startIcon} alt={startIcon} />
      <img className="endIcon" src={endIcon} alt="" />
      <input className={` ${variant} `} {...props} />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}
