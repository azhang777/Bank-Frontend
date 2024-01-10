import axios from "axios";

export const requestBills = async () => {
  try {
    const res = await axios(`https://localhost:7095/api/bills`);

    return res.data;
  } catch (error) {
    throw new Error("Failed to retrieve bills:" + error.message);
  }
};

export const requestCreateBill = async (newBill, accountId) => {
  try {
    const res = await axios.post(`https://localhost:7095/api/accounts/${accountId}/bills`, newBill)

    return res.data;
  }
  catch(error) {
    throw new Error("Failed to create bill:" + error.message);
  }
}