import "ol/ol.css";
import { useContext, useEffect, useRef, useState } from "react";
import MapDisplayStyled from "./MapDisplayStyled";
import MapContext from "../../store/features/map/MapContext";
import { useAppSelector } from "../../store/hooks";
import Overlay from "ol/Overlay";
import { Coordinate } from "ol/coordinate";
import useMap from "../../hooks/useMap/useMap";
import countNumberOfAvailableStations from "../../utils/countNumberOfAvailableStations";
import { Station } from "../../types";
import removeCarLocationChargers from "../../utils/removeCarLocationChargers";

const MapDisplay = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const { map, source } = useContext(MapContext);

  const { locations, location } = useAppSelector(
    (state) => state.motorbikesLocationState,
  );

  const [isPopup, setIsPopup] = useState(false);
  const [overlayCoord, setCoordinates] = useState<Coordinate | null>(null);

  const { createFeatures, addListener } = useMap();

  const motorbikeLocations = removeCarLocationChargers(locations);

  source.addFeatures(createFeatures(motorbikeLocations));

  const closePopUp = () => {
    const overlay = map.getOverlayById("popup");

    if (overlay) {
      overlay.setPosition(undefined);
    }
  };

  const getNumberOfAvailableStations = (stations: Station[]) => {
    const { totalPorts, availablePorts } =
      countNumberOfAvailableStations(stations);

    return `Available chargers: ${availablePorts}/${totalPorts}`;
  };

  useEffect(() => {
    map.setTarget("map");

    const overlay = new Overlay({
      autoPan: {
        animation: {
          duration: 250,
        },
      },
      element: mapContainerRef.current!,
      id: "popup",
    });

    map.addOverlay(overlay);

    addListener(map, { setCoordinates, setIsPopup });
  }, [addListener, map]);

  useEffect(() => {
    if (isPopup && overlayCoord && mapContainerRef.current) {
      const overlay = map.getOverlayById("popup");

      if (overlay) {
        overlay.setPosition(overlayCoord);
      }
    }
  }, [isPopup, overlayCoord, map]);

  return (
    <MapDisplayStyled data-testid="map" id="map" tabIndex={0}>
      <div id="popup" className="ol-popup" ref={mapContainerRef}>
        {isPopup ? location.address.address_string : null}
        <li>
          {isPopup ? getNumberOfAvailableStations(location.stations) : null}
        </li>
        <button
          onClick={closePopUp}
          id="popup-closer"
          className="ol-popup-closer"
        ></button>
        <div id="popup-content"></div>
      </div>
    </MapDisplayStyled>
  );
};

export default MapDisplay;
