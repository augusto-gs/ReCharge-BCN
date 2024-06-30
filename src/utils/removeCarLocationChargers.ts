import { ChargingLocationStructure } from "../types";

const removeCarLocationChargers = (locations: ChargingLocationStructure[]) => {
  const filteredLocations = locations.map((location) => ({
    ...location,
    stations: location.stations.map((station) => ({
      ...station,
      ports: station.ports.filter((port) => port.notes === "MOTORCYCLE_ONLY"),
    })),
  }));

  return filteredLocations.filter((location) =>
    location.stations.some((station) => station.ports.length > 0),
  );
};

export default removeCarLocationChargers;
