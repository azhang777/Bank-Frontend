import axios from "axios";

export const requestCustomers = async () => {
  try {
    const res = await axios(`https://localhost:7095/api/customers`);

    return res.data;
  } catch (error) {
    throw new Error("Failed to retrieve customers: " + error.message);
  }
};
