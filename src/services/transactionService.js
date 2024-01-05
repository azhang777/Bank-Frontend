import axios from "axios";

export const requestTransactions = async () => {
  try {
    const res = await axios(`https://localhost:7095/api/transactions`);

    return res.data;
  } catch (error) {
    throw new Error("Failed to retrieve transactions:" + error.message);
  }
};
