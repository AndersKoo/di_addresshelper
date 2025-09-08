// API based types
export interface Street {
  countryCode: string;
  city: string;
  streetName: string;
  streetIds: number[];
  isAliasMatch: string;
}

export interface StreetSearchResponse {
  streets: Street[];
  totalResults: number;
}
