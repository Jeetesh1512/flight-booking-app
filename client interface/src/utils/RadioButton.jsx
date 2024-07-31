import React from 'react';

const RadioButton = ({ label, value, checked, onChange, className}) => {
  return (
    <label className={className}>
      <input
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
        className="radioInput"
      />
      {label}
    </label>
  );
};

export default RadioButton;
