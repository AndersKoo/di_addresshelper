import React from "react";

import { StreetItem } from "../streetItem";

import styles from "./style.module.css";

import type { StreetSearchResponse } from "../../api/types/types";

interface SearchResultsProps {
  searchResults: StreetSearchResponse | null;
}

export const SearchResults: React.FC<SearchResultsProps> = ({
  searchResults,
}) => {
  if (!searchResults) return null;

  // Destrukturerer searchResults fra types -> streets
  const { streets, totalResults } = searchResults;

  return (
    <div className={styles.searchResultsContainer}>
      <h2>Søkeresultat</h2>
      <p>Antall resultater: {totalResults}</p>
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
