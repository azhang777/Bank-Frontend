import { useEffect, useState } from "react";
import CustomList from "../../common/CustomList";
import Loading from "../../common/Loading";
import { requestCustomerAccounts } from "../../services/accountService";

const Account = () => {
  const [accounts, setAccounts] = useState(null);

  useEffect(() => {
    const retrieveCustomerAccounts = async () => {
      try {
        const response = await requestCustomerAccounts();
        setAccounts(response.data);
      } catch (error) {
        console.log(error);
        setAccounts([]);
      }
    };

    retrieveCustomerAccounts();
  }, []);

  if (!accounts) {
    return <Loading title='Accounts' />;
  }

  return (
    <div>
      <h1 className='text-center py-5'>Accounts</h1>
      {accounts.length === 0 ? (
        <h1 className='text-center'>no bills exist :(</h1>
      ) : (
        <CustomList>
          {accounts.map((account) => (
            <a
              href=''
              className='list-group-item list-group-item-action text-center'
              key={account.id}
            >
              <h1>
                Account {account.id} : {account.nickName} |{" "}
                {account.accountType}
              </h1>
            </a>
          ))}
        </CustomList>
      )}
    </div>
  );
};

export default Account;
