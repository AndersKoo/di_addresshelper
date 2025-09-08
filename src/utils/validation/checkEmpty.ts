export const checkEmpty = (value: string): string => {
  if (value.trim() === "") {
    return "feltet kan ikke være tomt";
  }
  return "";
};
