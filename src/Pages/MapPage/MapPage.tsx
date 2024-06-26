import { useEffect } from "react";
import MapDisplay from "../../components/MapDisplay/MapDisplay";
import MapPageStyled from "./MapPageStyled";
import useMotorbikeLocationApi from "../../hooks/useMotorbikeLocationApi";
import { useAppDispatch } from "../../store/hooks";
import { loadMotorbikesActionCreator } from "../../store/features/motorbikes/motorbikeSlice";

const MapPage = (): React.ReactElement => {
  const { getBikeLocations } = useMotorbikeLocationApi();
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const motorbikes = await getBikeLocations();

      if (motorbikes) {
        dispatch(loadMotorbikesActionCreator(motorbikes));
      }
    })();
  }, [dispatch, getBikeLocations]);

  return (
    <MapPageStyled className="map-page">
      <MapDisplay />
    </MapPageStyled>
  );
};

export default MapPage;
