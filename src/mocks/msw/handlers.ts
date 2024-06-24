import { http, HttpResponse } from "msw";
import { locationsMock } from "../locationMock";

const apiURL = import.meta.env.VITE_BIKE_API_URL;

export const handlers = [
  http.get(apiURL, () => HttpResponse.json({ locations: locationsMock })),
];
