import React from "react";

function Input({label, type, name, value, onChange }) {
  return (
    <div>
      <h1>{label}</h1>
      <input type={type} name={name} value={value} onChange={onChange} />
    </div>
    
)}

export default Input;
