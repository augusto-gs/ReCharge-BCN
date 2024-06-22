import locations from "../../data/bikeData";

const Table = () => (
  <section>
    <h2>Charging points</h2>
    <p>Look for the different charging ports available in the city </p>
    <ul className="table">
      {locations.map((location) => (
        <li key={location.id}>{location.address.address_string}</li>
      ))}
    </ul>
  </section>
);

export default Table;
