
import React, { useState } from 'react';

const CustomInput = ({
  label,
  placeholder,
  value,
  onChange,
  className,
  labelClassName,
  type,
  validate,
  errorMessage,
}) => {
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const newValue = e.target.value;
    if (validate) {
      const validationError = validate(newValue);
      setError(validationError);
    }
    onChange(e);
  };

  return (
    <div className="flex flex-col mb-4">
      {label && <label className={`mb-2 text-gray-700 ${labelClassName}`}>{label}</label>}
      <input
        className={`${className} ${error ? 'border-red-500' : ''}`}
        placeholder={placeholder}
        value={value}
        type={type || 'text'}
        onChange={handleChange}
      />
      {error && <p className="text-red-500 text-sm mt-1">{errorMessage || error}</p>}
    </div>
  );
};

export default CustomInput;
