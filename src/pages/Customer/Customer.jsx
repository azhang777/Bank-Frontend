import { useEffect, useState } from "react";
import { requestCustomers } from "../../services/CustomerService";
import CustomList from "../../common/CustomList";
import Loading from "../../common/Loading";

const Customer = () => {
  const [customers, setCustomers] = useState(null);

  useEffect(() => {
    const retrieveCustomers = async () => {
      try {
        const response = await requestCustomers();
        setCustomers(response.data); //backend response is special, it has msg, code, and data. we want data.
      } catch (error) {
        console.log(error);
        setCustomers([]); //backend if no customers exist, error is thrown, so try block doesn't set state
      }
    };

    retrieveCustomers();
  }, []);

  if (!customers) {
    return <Loading title='Customers' />;
  }

  return (
    <>
      <h1 className='text-center py-5'>Customers</h1>
      {customers.length !== 0 ? (
        <CustomList>
          {customers.map((customer) => (
            <a
              href=''
              className='list-group-item list-group-item-action text-center'
              key={customer.id}
            >
              <h1>
                Customer {customer.id} : {customer.firstName}{" "}
                {customer.lastName}
              </h1>
            </a>
          ))}
        </CustomList>
      ) : (
        <h1>no customers exist :(</h1>
      )}
    </>
  );
};

//within the li, we will create a component that will go into specific customer and show name, and other info. check exalidraw.
export default Customer;
