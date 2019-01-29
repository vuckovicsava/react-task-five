import React from 'react';

const FormField = ({ errors, name, label, type, value, handleChange }) => (
  <div className="form__group">
    { errors.length > 0 && errors.map(err => (
      <span key={err} className="form__error">{err}</span>)
    )}
    <label htmlFor={name}>{label}</label>
    <input 
      type={type}
      name={name} 
      id={name}
      value={value}
      onChange={handleChange}
      required
    />
  </div>
);

export default FormField;