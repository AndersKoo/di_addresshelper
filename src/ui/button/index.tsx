import React from "react";
import styles from "./style.module.css";

interface ButtonProps {
  text: string;
  onClick: () => void;
  isLoading: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, isLoading }) => {
  return (
    <button onClick={onClick} disabled={isLoading} className={styles.button}>
      {isLoading ? "Søker..." : text}
    </button>
  );
};
