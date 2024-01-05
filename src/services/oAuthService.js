import axios from "axios";

//async function declaration: we are handling asynchronous nature of axios
export const requestAccount = async (user) => {
  try {
    const res = await axios(
      //return the promise
      `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
      {
        headers: {
          Authorization: `Bearer ${user.access_token}`,
          Accept: "application/json",
        },
      }
    );

    return res.data;
  } catch (error) {
    throw new Error("Failed to retrieve account: " + error.message);
  }
};

/*
  return axios(
    //return the promise
    `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
    {
      headers: {
        Authorization: `Bearer ${user.access_token}`,
        Accept: "application/json",
      },
    }
  )
    .then((res) => {
      return res.data; //if promise succeeds, return the data
    })
    .catch((error) => {
      throw new Error("Failed to retrieve account: " + error.message);
    });
*/

/*
  try {
    const response = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
      {
        headers: {
          Authorization: `Bearer ${user.access_token}`,
          Accept: "application/json",
        },
      }
    );
    return response.data;
  } catch (err) {
    throw new Error("Failed to retrieve account:" + err.message);
  }
*/
