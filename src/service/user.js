import callAPI from "config/api";

const ROOT_URL = process.env.REACT_APP_API_KEY;
const API_VERSION = "api/v1";

export const getUserProfile = async () => {
  const url = `${ROOT_URL}/${API_VERSION}/users/basic-profile`;

  const res = await callAPI({
    url,
    method: "GET",
    withCredentials: true,
  });

  console.log("get basic", res);

  return res;
};
