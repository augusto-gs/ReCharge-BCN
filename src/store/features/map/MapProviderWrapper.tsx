import { PropsWithChildren, useMemo } from "react";
import MapContext from "./MapContext";
import VectorSource from "ol/source/Vector";
import Vector from "ol/layer/Vector";
import { View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import Map from "ol/Map";
import { fromLonLat } from "ol/proj";

const MapProviderWrapper = ({
  children,
}: PropsWithChildren): React.ReactElement => {
  const mapValue = useMemo(() => {
    const source = new VectorSource({
      wrapX: false,
    });

    const vector = new Vector({
      source: source,
    });

    const tileLayer = new TileLayer({
      source: new OSM({
        wrapX: false,
      }),
    });

    const map = new Map({
      layers: [tileLayer, vector],
    });

    return { map, vector, source };
  }, []);

  return <MapContext.Provider value={mapValue}>{children}</MapContext.Provider>;
};

export default MapProviderWrapper;
