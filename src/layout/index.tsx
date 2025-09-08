import React, { useEffect } from "react";

import { Container } from "../ui/container";
import { SearchForm } from "../ui/searchform";
import { SearchResults } from "../ui/searchresults";
import { Status } from "../ui/status";

import { useSearchContext } from "../utils/context/SearchContext";
import { useHandleSearch } from "../utils/search/hooks/handlesearch";
import { useHandleInputChange } from "../utils/search/hooks/handleinputchange";

import styles from "./style.module.css";

const Layout: React.FC = () => {
  // Context
  const { streetName, isLoading, inputError, searchResults, setSearchResults } =
    useSearchContext();

  // Hooks
  const { handleSearch } = useHandleSearch();
  const { handleInputChange } = useHandleInputChange();

  // Oppdateres api states
  useEffect(() => {
    // Fjern søkeresultater hvis input-feltet er tomt
    if (!streetName.trim() && searchResults) {
      setSearchResults(null);
    }
  }, [streetName, searchResults]);

  return (
    <Container>
      <div className={styles.layout}>
        <h1 className={styles.title}>Adresse Søk</h1>
        <SearchForm
          streetname={streetName}
          isLoading={isLoading}
          onInputChange={handleInputChange}
          onSearch={() => {
            handleSearch();
          }}
        />
        {inputError && <Status type="error" message={inputError} />}
        <SearchResults searchResults={searchResults} />
      </div>
    </Container>
  );
};

export default Layout;
