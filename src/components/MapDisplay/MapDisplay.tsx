import "ol/ol.css";
import { useContext, useEffect, useRef, useState } from "react";
import MapDisplayStyled from "./MapDisplayStyled";
import MapContext from "../../store/features/map/MapContext";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Coordinate } from "ol/coordinate";
import useMap from "../../hooks/useMap/useMap";
import countNumberOfAvailableStations from "../../utils/countNumberOfAvailableStations";
import { Station } from "../../types";
import removeCarLocationChargers from "../../utils/removeCarLocationChargers";
import View from "ol/View";
import { fromLonLat } from "ol/proj";
import { hidePopupActionCreator } from "../../store/features/ui/uiSlice";

const MapDisplay = () => {
  const mapContainerRef = useRef<HTMLUListElement>(null);

  const { map, source } = useContext(MapContext);

  const { locations, location } = useAppSelector(
    (state) => state.motorbikesLocationState,
  );

  const dispatch = useAppDispatch();
  const { isPopUp } = useAppSelector((state) => state.uiState);

  const [coordinates, setCoordinates] = useState<Coordinate | null>(null);

  const { createFeatures, addListener } = useMap();

  const motorbikeLocations = removeCarLocationChargers(locations);

  source.addFeatures(createFeatures(motorbikeLocations));

  const closePopUp = () => {
    const overlay = map.getOverlayById("popup");

    if (overlay) {
      overlay.setPosition(undefined);
    }

    dispatch(hidePopupActionCreator());
  };

  const getNumberOfAvailableStations = (stations: Station[]) => {
    const { totalPorts, availablePorts } =
      countNumberOfAvailableStations(stations);

    return `${availablePorts}/${totalPorts}`;
  };

  useEffect(() => {
    map.setTarget("map");

    const view: View = map.getView();

    if (!view.getCenter()) {
      map.setView(
        new View({
          center: fromLonLat([2.1734, 41.3851]),
          zoom: 12,
          maxZoom: 18,
          minZoom: 8,
        }),
      );
    }

    const overlay = map.getOverlayById("popup")!;

    overlay.setElement(mapContainerRef.current!);

    addListener(map, { setCoordinates });

    return () => {
      map.setTarget();
    };
  }, [addListener, map]);

  useEffect(() => {
    if (isPopUp && coordinates && mapContainerRef.current) {
      const overlay = map.getOverlayById("popup");

      if (overlay) {
        overlay.setPosition(coordinates);
      }
    }
  }, [coordinates, isPopUp, map]);

  return (
    <MapDisplayStyled data-testid="map" id="map" tabIndex={0}>
      <ul id="popup" className="location-detail" ref={mapContainerRef}>
        <li className="location-detail__address">
          {isPopUp ? location.address.address_string : null}
        </li>
        <li className="location-detail__stations">
          Available chargers:{" "}
          <span className="location-detail__available-stations">
            {isPopUp ? getNumberOfAvailableStations(location.stations) : null}
          </span>
        </li>
        <button
          onClick={closePopUp}
          id="popup-closer"
          className="location-detail__closer"
        ></button>
        <div id="popup-content"></div>
      </ul>
    </MapDisplayStyled>
  );
};

export default MapDisplay;
