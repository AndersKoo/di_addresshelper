import React from "react";

import { StreetItem } from "../streetItem";

import styles from "./style.module.css";
import type { Street } from "../../api/types/types";

interface SearchResultsProps {
  searchResults: {
    streets: Street[];
  } | null;
}

export const SearchResults: React.FC<SearchResultsProps> = ({
  searchResults,
}) => {
  if (!searchResults) return null;
  const { streets } = searchResults;

  return (
    <div className={styles.searchResultsContainer}>
      <h2>Søkeresultat</h2>
      {streets && streets.length > 0 ? (
        <>
          {streets.map((street, index) => (
            <StreetItem key={index} street={street} />
          ))}
        </>
      ) : (
        <p>Adressen finnes ikke i API</p>
      )}
    </div>
  );
};
