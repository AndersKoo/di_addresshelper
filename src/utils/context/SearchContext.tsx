import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { type StreetSearchResponse } from "../../api/types/types";

interface SearchContextType {
  streetName: string;
  setStreetName: (value: string) => void;
  searchResults: StreetSearchResponse | null;
  setSearchResults: (value: StreetSearchResponse | null) => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  error: string;
  setError: (value: string) => void;
  inputError: string;
  setInputError: (value: string) => void;
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

export const SearchContext = createContext<SearchContextType | undefined>(
  undefined
);

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return context;
};

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [streetName, setStreetName] = useState("");
  const [searchResults, setSearchResults] =
    useState<StreetSearchResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [inputError, setInputError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const value: SearchContextType = {
    streetName,
    setStreetName,
    searchResults,
    setSearchResults,
    isLoading,
    setIsLoading,
    error,
    setError,
    inputError,
    setInputError,
    showModal,
    setShowModal,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};
