import { useSearchContext } from "../../context/SearchContext";

export const useHandleInputChange = () => {
  const { setStreetName, inputError, setInputError } = useSearchContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStreetName(e.target.value);

    // Slette feilmeldinger når bruker begynner å skrive
    if (inputError && e.target.value.trim() !== "") {
      setInputError("");
    }
  };

  return { handleInputChange };
};
