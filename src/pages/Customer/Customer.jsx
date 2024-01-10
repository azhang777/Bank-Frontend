import { useEffect, useState } from "react";
import { requestCustomers } from "../../services/CustomerService";
import Loading from "../../common/Loading";
import CustomTable from "../../common/CustomTable";
import CustomerRow from "./CustomerRow";
import CreateCustomerModal from "./CreateCustomerModal";

const Customer = () => {
  const [customers, setCustomers] = useState(null);
  const columns = ["ID", "First Name", "Lastname"];

  useEffect(() => {
    const retrieveCustomers = async () => {
      try {
        const response = await requestCustomers();
        setCustomers(response.data); //backend response is special, it has msg, code, and data. we want data.
      } catch (error) {
        console.error(error);
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
            <CustomerRow
              key={customer.id}
              customer={customer}
            />
          ))}
        />
      )}
      <div className='container text-center my-5'>
        <CreateCustomerModal />
      </div>
    </>
  );
};

//within the li, we will create a component that will go into specific customer and show name, and other info. check exalidraw.
//no we will not, we will have a useNavigate hook within each Row component that navigates to their respective Detail component location.
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
