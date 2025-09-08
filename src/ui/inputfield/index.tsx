import React from "react";
import styles from "./style.module.css";

interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  onKeyDown,
  placeholder,
}) => {
  return (
    <input
      type="text"
      className={`${styles.input}`}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
    />
  );
};
