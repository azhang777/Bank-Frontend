import { useEffect, useState } from "react";
import CustomList from "../../common/CustomList";
import Loading from "../../common/Loading";
import { requestTransactions } from "../../services/transactionService";
import CustomTable from "../../common/CustomTable";
import CommonRow from "../../common/CommonRow";

const Transaction = () => {
  const [transactions, setTransactions] = useState(null);
  const columns = ["ID", "Transaction Type", "Date"];
  useEffect(() => {
    const retrieveTransactions = async () => {
      try {
        const response = await requestTransactions();
        setTransactions(response.data);
      } catch (error) {
        console.log(error);
        setTransactions([]);
      }
    };

    retrieveTransactions();
  }, []);

  if (!transactions) {
    return <Loading title='Transactions' />;
  }

  return (
    <div>
      <h1 className='text-center py-5'>Transactions</h1>
      {transactions.length === 0 ? (
        <h1 className='text-center'>no transactions exist :(</h1>
      ) : (
        <CustomTable
          columns={columns}
          dataRows={transactions.map((transaction) => (
            <CommonRow
              key={transaction.id}
              column1={transaction.id}
              column2={transaction.transactionType}
              column3={transaction.transactionDate}
            />
          ))}
        />
      )}
    </div>
  );
};

export default Transaction;

/*
        <CustomList>
          {transactions.map((transaction) => (
            <a
              href=''
              className='list-group-item list-group-item-action text-center'
              key={transaction.id}
            >
              <h1>
                Transaction {transaction.id} : {transaction.transactionType} |{" "}
                {transaction.transactionDate}
              </h1>
            </a>
          ))}
        </CustomList>
*/
