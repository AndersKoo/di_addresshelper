import type { StreetSearchResponse } from "./types/types";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_BASE_URL = `https://staging-ws.di.no/ws/json/addressHelper/v-2/NO/streetSearch`;

export const searchStreet = async (
  streetName: string // Input fra bruker
): Promise<StreetSearchResponse> => {
  try {
    const url = `${API_BASE_URL}/${encodeURIComponent(
      streetName
    )}?apiKey=${API_KEY}`;

    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
    }
    throw error;
  }
};
