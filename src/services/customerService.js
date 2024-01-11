import axios from "axios";

export const requestCustomers = async () => {
  try {
    const res = await axios(`https://localhost:7095/api/customers`);

    return res.data;
  } catch (error) {
    throw new Error("Failed to retrieve customers: " + error.message);
  }
};

export const requestCustomer = async (customerId) => {
  try {
    const res = await axios(
      `https://localhost:7095/api/customers/${customerId}`
    );

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

export const requestUpdateCustomer = async (
  existingUpdatedCustomer,
  customerId
) => {
  try {
    const res = await axios.put(
      `https://localhost:7095/api/customers/${customerId}`,
      existingUpdatedCustomer
    );

    return res;
  } catch (error) {
    throw new Error(`Failed to update customer ${customerId}`);
  }
};
