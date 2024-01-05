import axios from "axios";

export const requestBills = async () => {
  try {
    const res = await axios(`https://localhost:7095/api/bills`);

    return res.data;
  } catch (error) {
    throw new Error("Failed to retrieve bills:" + error.message);
  }
};
