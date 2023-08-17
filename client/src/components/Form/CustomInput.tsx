import React, { ChangeEventHandler } from "react";

interface CustomInputProps {
  type: string;
  name?: string;
  value: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  required,
  disabled,
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
    />
  );
};
