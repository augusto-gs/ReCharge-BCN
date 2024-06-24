import axios from "axios";
import ChargingLocationStructure from "../types";
import { useCallback } from "react";

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
      console.log(error);
    }
  }, []);

  return { getBikeLocations };
};

export default useMotorbikeLocationApi;
