import axios from "axios";
import { useEffect, useState } from "react";

const Customer = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomerData = async () => {
      axios
        .get(`https://localhost:7095/api/customers`)
        .then((res) => setCustomers(res.data.data))
        .catch((err) => console.log(err));
    };
    fetchCustomerData();
  }, []);
  return (
    <div>
      <h2>Customers</h2>
      <ul>
        {customers.map((customer) => (
          <li
            key={customer.id}
            className='fs-3'
          >
            Customer {customer.id}: {customer.firstName}
          </li>
        ))}
      </ul>
    </div>
  );
};

//within the li, we will create a component that will go into specific customer and show name, and other info. check exalidraw.
export default Customer;
