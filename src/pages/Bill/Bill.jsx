import { useEffect, useState } from "react";
import { requestBills } from "../../services/billService";
import CustomList from "../../common/CustomList";
import Loading from "../../common/Loading";
import CustomTable from "../../common/CustomTable";
import CommonRow from "../../common/CommonRow";

const Bill = () => {
  const [bills, setBills] = useState(null);
  const columns = ["ID", "Nickname", "Payment Date"];
  useEffect(() => {
    const retrieveBills = async () => {
      try {
        const response = await requestBills();
        setBills(response.data);
      } catch (error) {
        console.log(error);
        setBills([]);
      }
    };

    retrieveBills();
  }, []);

  if (!bills) {
    return <Loading title='Bills' />;
  }

  return (
    <div>
      <h1 className='text-center py-5'>Bills</h1>
      {bills.length === 0 ? (
        <h1 className='text-center'>no bills exist :(</h1>
      ) : (
        <CustomTable
          columns={columns}
          dataRows={bills.map((bill) => (
            <CommonRow
              key={bill.id}
              id={bill.id}
              nickName={bill.nickName}
              accountType={bill.paymentDate}
            />
          ))}
        />
      )}
    </div>
  );
};

export default Bill;

/*
        <CustomList>
          {bills.map((bill) => (
            <a
              href=''
              className='list-group-item list-group-item-action text-center'
              key={bill.id}
            >
              <h1>
                Bill {bill.id} : {bill.nickName} {bill.paymentDate}
              </h1>
            </a>
          ))}
        </CustomList>
*/
