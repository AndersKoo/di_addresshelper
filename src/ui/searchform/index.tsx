import React from "react";

import { InputField } from "../inputfield";
import { Button } from "../../ui/button";

import styles from "./style.module.css";

interface SearchFormProps {
  streetname: string;
  isLoading: boolean;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

export const SearchForm: React.FC<SearchFormProps> = ({
  streetname,
  isLoading,
  onInputChange,
  onSearch,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // Sender callback til handleSearch ved trykk på enter
      onSearch();
    }
  };

  return (
    <div className={styles.searchContainer}>
      <InputField
        value={streetname}
        onChange={onInputChange}
        onKeyDown={handleKeyDown}
      />
      <Button
        onClick={() => {
          // Sender callback til handleSearch ved klikk på knappen
          onSearch();
        }}
        isLoading={isLoading}
        text="Søk"
      />
    </div>
  );
};
