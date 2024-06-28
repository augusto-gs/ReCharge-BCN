import axios from "axios";
import { ChargingLocationStructure } from "../../types";
import { useCallback } from "react";
import showToast from "../../utils/showToast";
import { useAppDispatch } from "../../store/hooks";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../../store/features/ui/uiSlice";

axios.defaults.url = import.meta.env.VITE_BIKE_API_URL;

const useMotorbikeLocationApi = () => {
  const dispatch = useAppDispatch();

  const getBikeLocations = useCallback(async () => {
    try {
      dispatch(showLoadingActionCreator());

      const {
        data: { locations },
      } = await axios.get<{
        locations: ChargingLocationStructure[];
      }>(axios.defaults.url!);

      dispatch(hideLoadingActionCreator());

      return locations;
    } catch (error) {
      dispatch(hideLoadingActionCreator());

      showToast("error", "Couldn't load locations!");
    }
  }, [dispatch]);

  return { getBikeLocations };
};

export default useMotorbikeLocationApi;
