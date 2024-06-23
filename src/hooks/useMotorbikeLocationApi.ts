import axios from "axios";
import ChargingLocationStructure from "../types";

axios.defaults.baseURL = import.meta.env.VITE_BIKE_API_URL;

const useMotorbikeLocationApi = () => {
  const getBikeLocations = async () => {
    const {
      data: { locations },
    } = await axios.get<{ locations: ChargingLocationStructure[] }>(
      axios.defaults.baseURL!,
    );

    return locations;
  };

  return { getBikeLocations };
};

export default useMotorbikeLocationApi;
