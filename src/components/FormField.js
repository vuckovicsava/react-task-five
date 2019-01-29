import React from 'react';

const FormField = ({ errors, name, label, type, value, handleChange }) => (
  <div className="form__group">
    <div className="form__field-wrapper">
      <label className="form__label" htmlFor={name}>{label}</label>
      <input
        className="form__field"
        type={type}
        name={name} 
        id={name}
        value={value}
        onChange={handleChange}
        required
      />
    </div>
    { errors.length > 0 && errors.map(err => (
      <span key={err} className="form__error">{err}</span>)
    )}
  </div>
);

export default FormField;