import Point from "ol/geom/Point";
import { ChargingLocationStructure } from "../../types";
import Feature from "ol/Feature";
import Style from "ol/style/Style";
import Icon from "ol/style/Icon";
import { fromLonLat } from "ol/proj";
import { useCallback } from "react";

const useMapLocations = (availableLocations: ChargingLocationStructure[]) => {
  const hasMapLocations = useCallback(
    () =>
      availableLocations.map((location) => {
        const {
          coordinates: { latitude, longitude },
        } = location;

        const availableLocation = new Point(fromLonLat([longitude, latitude]));

        const pinOnMap = new Feature(availableLocation);
        pinOnMap.setId(location.id);

        pinOnMap.setStyle(
          new Style({
            image: new Icon({
              anchor: [0, 1],
              src: "/images/location_icon_36px.svg",
            }),
          }),
        );

        return pinOnMap;
      }),
    [availableLocations],
  );

  return { hasMapLocations };
};

export default useMapLocations;
