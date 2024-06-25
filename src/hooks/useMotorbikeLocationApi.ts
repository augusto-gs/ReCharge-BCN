import axios from "axios";
import ChargingLocationStructure from "../types";
import { useCallback } from "react";
import showToast from "../utils/showToast";

axios.defaults.url = import.meta.env.VITE_BIKE_API_URL;

const useMotorbikeLocationApi = () => {
  const getBikeLocations = useCallback(async () => {
    try {
      const {
        data: { locations },
      } = await axios.get<{
        locations: ChargingLocationStructure[];
      }>(axios.defaults.url!);

      return locations;
    } catch (error) {
      showToast("error", "Couldn't load locations!");
    }
  }, []);

  return { getBikeLocations };
};

export default useMotorbikeLocationApi;
