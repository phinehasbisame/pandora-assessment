"use client";

import { InputProps } from "@/interfaces";
import { ChangeEvent, FC } from "react";

const Input: FC<InputProps> = ({
  name,
  type,
  placeholder,
  value,
  className,
  onChange,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onChange((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      className={className}
      onChange={(event) => handleChange(event)}
    />
  );
};

export default Input;
