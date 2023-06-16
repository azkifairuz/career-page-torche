import callAPI from "config/api";

const ROOT_URL = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export const login = async (data) => {
  const url = `${ROOT_URL}/${API_VERSION}/users/login`;

  const jsonData = JSON.stringify(data);

  return callAPI({
    url,
    method: "POST",
    data: jsonData,
  });
}