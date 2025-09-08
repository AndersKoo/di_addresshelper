// API based types
export interface Street {
  streetName: string;
  city: string;
  countryCode: string;
  streetIds: number[];
  isAliasMatch: string;
}

export interface StreetSearchResponse {
  streets: Street[];
}
