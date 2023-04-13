import React from "react";

export default function Button({
  children,
  variant,
  startIcon,
  endIcon,
  size,
  color,
  type,
  ...props
}) {
  return (
    <div>
      <p>{`<Button ${type} />`}</p>
      <button
        {...props}
        className={`${variant} ${size} ${color}`}
      >
        <span>{startIcon}</span>
        <span className="children">{children}</span>
        <span>{endIcon}</span>
      </button>
    </div>
  );
}
