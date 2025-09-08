import { checkEmpty } from "../../validation/checkEmpty";
import { searchStreet } from "../../../api/index";
import { useSearchContext } from "../../context/SearchContext";

export const useHandleSearch = () => {
  // Destrukturerer context
  const {
    streetName,
    setInputError,
    setIsLoading,
    setError,
    setSearchResults,
  } = useSearchContext();

  // Håndterer søkene fra api
  const handleSearch = async () => {
    const validationMessage = checkEmpty(streetName);
    if (validationMessage) {
      setInputError(validationMessage);
      return;
    }

    setIsLoading(true);
    setInputError("");
    setSearchResults(null);

    try {
      const result = await searchStreet(streetName); // Kaller api
      setSearchResults(result); // Lagrer søkeresultatet i context/useState
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { handleSearch };
};
