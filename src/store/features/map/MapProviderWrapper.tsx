import { PropsWithChildren, useMemo } from "react";
import MapContext from "./MapContext";
import VectorSource from "ol/source/Vector";
import Vector from "ol/layer/Vector";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import Map from "ol/Map";
import Overlay from "ol/Overlay";

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

    const overlay = new Overlay({
      autoPan: {
        animation: {
          duration: 250,
        },
      },
      id: "popup",
    });

    const map = new Map({
      layers: [tileLayer, vector],
      overlays: [overlay],
    });

    return { map, vector, source };
  }, []);

  return <MapContext.Provider value={mapValue}>{children}</MapContext.Provider>;
};

export default MapProviderWrapper;
