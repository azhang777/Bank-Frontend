import axios from "axios";

export const requestCustomerAccounts = async () => {
  try {
    const res = await axios(`https://localhost:7095/api/accounts`);

    return res.data;
  } catch (error) {
    throw new Error("Failed to retrieve accounts:" + error.message);
  }
};
