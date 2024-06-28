import { Station } from "../types";

const countNumberOfAvailableStations = (stations: Station[]) => {
  const stationsWithPorts = stations.filter(
    (station) => station.ports.length > 0,
  );

  return stationsWithPorts.map((station) => {
    const { totalPorts, availablePorts } = station.ports.reduce(
      (accumulator, port) => {
        accumulator.totalPorts += 1;

        if (port.port_status[0].status === "AVAILABLE") {
          accumulator.availablePorts += 1;
        }

        return accumulator;
      },
      { totalPorts: 0, availablePorts: 0 },
    );

    return {
      totalPorts,
      availablePorts,
    };
  });
};
export default countNumberOfAvailableStations;
