import { useLocation } from "react-router-dom";

const CustomerDetails = () => {
  const location = useLocation();

  const { state } = location;
  const { id, firstName, lastName, address } = state;

  return (
    <div>
      <h1>{id}</h1>
      <h2>{firstName}</h2>
      <h2>{lastName}</h2>
      {address.map((element) => (
        <h1 key={element.id}>{element.streetName}</h1>
      ))}
    </div>
  );
};

export default CustomerDetails;
