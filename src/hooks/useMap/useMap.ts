import Feature from "ol/Feature";
import { ChargingLocationStructure } from "../../types";
import Point from "ol/geom/Point";
import { fromLonLat } from "ol/proj";
import Style from "ol/style/Style";
import Icon from "ol/style/Icon";
import { useCallback } from "react";
import { useAppDispatch } from "../../store/hooks";
import Map from "ol/Map";
import { loadSelectedMotorbikeActionCreator } from "../../store/features/motorbikes/motorbikeSlice";
import { Coordinate } from "ol/coordinate";
import View from "ol/View";
import { useNavigate } from "react-router-dom";

const useMap = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const createFeatures = (locations: ChargingLocationStructure[]) =>
    locations.map((location) => {
      const {
        coordinates: { latitude, longitude },
      } = location;

      const availableLocation = new Point(fromLonLat([longitude, latitude]));

      const pinOnMap = new Feature(availableLocation);
      pinOnMap.setId(location.id);
      pinOnMap.setProperties({ location });

      pinOnMap.setStyle(
        new Style({
          image: new Icon({
            anchor: [0, 1],
            src: "/images/location_icon_36px.svg",
          }),
        }),
      );

      return pinOnMap;
    });

  const addListener = useCallback(
    (
      map: Map,
      settingFunctions: {
        setCoordinates: React.Dispatch<React.SetStateAction<Coordinate | null>>;
        setIsPopup: React.Dispatch<React.SetStateAction<boolean>>;
      },
    ) => {
      map.on("click", (event) => {
        map.forEachFeatureAtPixel(event.pixel, (clickedFeature) => {
          if (clickedFeature) {
            const coordinate = event.coordinate;

            const pinOnMap = clickedFeature.getProperties().location;

            dispatch(loadSelectedMotorbikeActionCreator(pinOnMap));

            settingFunctions.setCoordinates(coordinate);
            settingFunctions.setIsPopup(true);
          }
        });
      });
    },
    [dispatch],
  );

  const seeDetails = useCallback(
    (location: ChargingLocationStructure, map: Map) => {
      navigate("/map");

      dispatch(loadSelectedMotorbikeActionCreator(location));

      map.setView(
        new View({
          center: fromLonLat([
            location.coordinates.longitude,
            location.coordinates.latitude,
          ]),
          zoom: 15,
        }),
      );
    },
    [dispatch, navigate],
  );

  return { createFeatures, addListener, seeDetails };
};

export default useMap;
