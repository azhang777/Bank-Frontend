import { useEffect, useState } from "react";
import Loading from "../../common/Loading";
import { requestCustomerAccounts } from "../../services/accountService";
import CustomTable from "../../common/CustomTable";
import AccountRow from "./AccountRow";

const Account = () => {
  const [accounts, setAccounts] = useState(null);
  const columns = ["ID", "Account Type", "Nickname", ""];

  useEffect(() => {
    const retrieveCustomerAccounts = async () => {
      try {
        const response = await requestCustomerAccounts();
        setAccounts(response.data);
      } catch (error) {
        console.error(error);
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
        <h1 className='text-center'>no accounts exist :(</h1>
      ) : (
        <CustomTable
          columns={columns}
          dataRows={accounts.map((account) => (
            <AccountRow
              key={account.id}
              account={account}
            />
          ))}
        />
      )}
    </div>
  );
};

export default Account;

/*
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
*/
