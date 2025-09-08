import React from "react";
import styles from "./style.module.css";

type StatusType = "success" | "warning" | "error" | "info";

interface StatusProps {
  type: StatusType;
  message: string;
  className?: string;
}

export const Status: React.FC<StatusProps> = ({ type, message }) => {
  let statusMessage: string;
  let statusClass: string;

  switch (type) {
    case "success":
      statusMessage = `✅ ${message}`;
      statusClass = styles.success;
      break;
    case "warning":
      statusMessage = `⚠️ ${message}`;
      statusClass = styles.warning;
      break;
    case "error":
      statusMessage = `❌ ${message}`;
      statusClass = styles.error;
      break;
    case "info":
      statusMessage = `ℹ️ ${message}`;
      statusClass = styles.info;
      break;
    default:
      statusMessage = message;
      statusClass = styles.default;
  }

  return (
    <div className={`${styles.container} ${statusClass}`}>{statusMessage}</div>
  );
};
