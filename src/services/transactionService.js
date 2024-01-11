import axios from "axios";

export const requestTransactions = async () => {
  try {
    const res = await axios(`https://localhost:7095/api/transactions`);

    return res.data;
  } catch (error) {
    throw new Error("Failed to retrieve transactions:" + error.message);
  }
};

export const requestCreateDeposit = async (newDeposit, accountId) => {
  try {
    const res = await axios.post(
      `https://localhost:7095/api/accounts/${accountId}/deposits`,
      newDeposit
    );

    return res.data;
  } catch (error) {
    throw new Error("Failed to create deposit:" + error.message);
  }
};

export const requestCreateWithdrawal = async (newWithdrawal, accountId) => {
  try {
    const res = await axios.post(
      `https://localhost:7095/api/accounts/${accountId}/withdrawals`,
      newWithdrawal
    );

    return res.data;
  } catch (error) {
    throw new Error("Failed to create withdrawal:" + error.message);
  }
};

export const requestCreateP2P = async (newP2P, accountId) => {
  try {
    const res = await axios.post(
      `https://localhost:7095/api/accounts/${accountId}/p2p`,
      newP2P
    );

    return res.data;
  } catch (error) {
    throw new Error("Failed to create P2P:" + error.message);
  }
};
