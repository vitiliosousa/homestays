'use client'
import { useState, SelectHTMLAttributes } from 'react';

interface FloatingLabelSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
}

export function FloatingLabelSelect({
  label,
  options,
  className = '',
  value = '',
  onFocus,
  onBlur,
  ...props
}: FloatingLabelSelectProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [selectValue, setSelectValue] = useState(value);

  const handleFocus = (e: React.FocusEvent<HTMLSelectElement>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
    if (!selectValue) setIsFocused(false);
    onBlur?.(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
    if (props.onChange) props.onChange(e);
  };

  return (
    <div className="relative w-full">
      <select
        {...props}
        value={selectValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`w-full h-10 border border-black rounded px-2 text-xs pt-2 focus:outline-none focus:ring-1 focus:ring-black appearance-none  ${className}`}
      >
        <option value=""></option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <label
        className={`absolute left-2 transition-all duration-200 ease-in-out pointer-events-none ${
          isFocused || selectValue
            ? 'top-0 text-xs bg-white px-1 -translate-y-1/2 text-black'
            : 'top-1/2 text-xs -translate-y-1/2 text-gray-400'
        }`}
      >
        {label}
      </label>
      {/* Ícone de seta */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}