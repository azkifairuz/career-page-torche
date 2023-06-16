import callAPI from "config/api";

const ROOT_URL = process.env.REACT_APP_API_KEY;
const API_VERSION = 'api/v1';

export const login = async (data) => {
  const url = `${ROOT_URL}/${API_VERSION}/users/login`;

  const jsonData = JSON.stringify(data);

  const res =  callAPI({
    url,
    method: "POST",
    data: jsonData,
  });

  return res;
}

export const signup = async (data) => {
  const url = `${ROOT_URL}/${API_VERSION}/users/register`;

  const jsonData = JSON.stringify(data);

  console.log(jsonData)

  const res = await callAPI({
    url,
    method: "POST",
    data: jsonData,
  });

  return res;
}