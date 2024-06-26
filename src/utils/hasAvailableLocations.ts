import ChargingLocationStructure from "../types";

const hasAvailableLocations = (locations: ChargingLocationStructure[]) => {
  const availableLocations = locations.filter((location) =>
    location.stations.some((station) =>
      station.ports.some((port) => port.port_status[0].status === "AVAILABLE"),
    ),
  );

  return availableLocations;
};

export default hasAvailableLocations;
