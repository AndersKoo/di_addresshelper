import React from "react";
import styles from "./style.module.css";

import type { Street } from "../../api/types/types";

interface StreetItemProps {
  street: Street;
}

export const StreetItem: React.FC<StreetItemProps> = ({ street }) => {
  const { streetName, city, countryCode, streetIds, isAliasMatch } = street;
  return (
    <div className={styles.streetContainer}>
      <h3 className={styles.streetTitle}>{streetName}</h3>
      <p className={styles.streetText}>By: {city}</p>
      <p className={styles.streetText}>Land: {countryCode}</p>
      <p className={styles.streetText}>Gate-IDer: {streetIds.join(", ")}</p>
      {isAliasMatch && isAliasMatch.length > 0 ? (
        <>
          <p className={styles.streetText}>Alias: {isAliasMatch}</p>
        </>
      ) : null}
    </div>
  );
};
