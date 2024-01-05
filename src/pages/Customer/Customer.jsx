import { useEffect, useState } from "react";
import { requestCustomers } from "../../services/CustomerService";
import CustomList from "../../common/CustomList";
import Loading from "../../common/Loading";
import CustomTable from "../../common/CustomTable";
import CommonRow from "../../common/CommonRow";

const Customer = () => {
  const [customers, setCustomers] = useState(null);
  const columns = ["ID", "First Name", "Lastname"];
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
      {customers.length === 0 ? (
        <h1>no customers exist :(</h1>
      ) : (
        <CustomTable
          columns={columns}
          dataRows={customers.map((customer) => (
            <CommonRow
              key={customer.id}
              column1={customer.id}
              column2={customer.firstName}
              column3={customer.lastName}
            />
          ))}
        />
      )}
    </>
  );
};

//within the li, we will create a component that will go into specific customer and show name, and other info. check exalidraw.
export default Customer;

/*
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
*/
