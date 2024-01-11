import axios from "axios";

export const requestCustomers = async () => {
  try {
    const res = await axios(`https://localhost:7095/api/customers`);

    return res.data;
  } catch (error) {
    throw new Error("Failed to retrieve customers: " + error.message);
  }
};

export const requestCreateCustomer = async (newCustomer) => {
  try {
    const res = await axios.post(
      `https://localhost:7095/api/customers`,
      newCustomer
    );

    return res;
  } catch (error) {
    throw new Error(`Failed to create customer`, error);
  }
};

export const requestUpdateCustomer = async () => {
  return null;
};
