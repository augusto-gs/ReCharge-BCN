import { http, HttpResponse } from "msw";

const apiURL = import.meta.env.VITE_BIKE_API_URL;

export const errorHandlers = [http.get(apiURL, () => HttpResponse.error())];
