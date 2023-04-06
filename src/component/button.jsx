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
      <button {...props} className={`${variant} ${size} ${color}`}>
        <span>
          <img className="Icon" src={`/images/${startIcon}`} alt="" />
        </span>
        {children}
        <span>
          <img className="Icon" src={`/images/${endIcon}`} alt="" />
        </span>
      </button>
    </div>
  );
}
