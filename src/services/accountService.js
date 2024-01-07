import axios from "axios";

export const requestCustomerAccounts = async () => {
  try {
    const res = await axios(`https://localhost:7095/api/accounts`);

    return res.data;
  } catch (error) {
    throw new Error("Failed to retrieve accounts:" + error.message);
  }
};

export const requestCreateAccount = async (newAccount, customerId) => {
  try {
    const res = await axios.post(
      `https://localhost:7095/api/customers/${customerId}/accounts`,
      newAccount
    );

    return res;
  } catch (error) {
    throw new Error(
      `Failed to create account for customer ${customerId}`,
      error
    );
  }
};
