import axios from "axios";
import { useEffect, useState } from "react";
import { requestCustomers } from "../../services/CustomerService";

const Customer = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const retrieveCustomers = async () => {
      try {
        const response = await requestCustomers();

        setCustomers(response.data); //backend response is special, it has msg, code, and data. we want data.
      } catch (error) {
        console.log(error);
      }
    };

    retrieveCustomers();
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
