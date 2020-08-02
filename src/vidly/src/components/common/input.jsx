import React from "react";

const Input = ({ name, label, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={label}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        name={name}
        type="password"
        className="form-control"
        id={name}
      />
    </div>
  );
};

export default Input;
