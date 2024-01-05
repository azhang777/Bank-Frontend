import { useEffect, useState } from "react";
import CustomList from "../../common/CustomList";
import Loading from "../../common/Loading";
import { requestTransactions } from "../../services/transactionService";

const Transaction = () => {
  const [transactions, setTransactions] = useState(null);

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
      <h1 className='text-center py-5'>Accounts</h1>
      {transactions.length === 0 ? (
        <h1 className='text-center'>no bills exist :(</h1>
      ) : (
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
      )}
    </div>
  );
};

export default Transaction;
