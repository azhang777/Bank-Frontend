import { useEffect, useState } from "react";
import Loading from "../../common/Loading";
import { requestCustomerAccounts } from "../../services/accountService";
import CustomTable from "../../common/CustomTable";
import CommonRow from "../../common/CommonRow";

const Account = () => {
  const [accounts, setAccounts] = useState(null);
  const columns = ["ID", "Account Type", "Nickname"];
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
        <h1 className='text-center'>no accounts exist :(</h1>
      ) : (
        <CustomTable
          columns={columns}
          dataRows={accounts.map((account) => (
            <CommonRow
              key={account.id}
              column1={account.id}
              column2={account.accountType}
              column3={account.nickName}
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
