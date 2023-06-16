import axios from "axios";
import cookies from "js-cookie";

export default async function callAPI(config) {
  const { url, method, data, mustAuthenticated } = config;
  let headers = { "Content-Type": "application/json" };

  if (mustAuthenticated) {
    const jwtToken = cookies.get("token");
    headers["Authorization"] = `Bearer ${jwtToken}`;
  }

  const response = await axios({
    url,
    method,
    data,
    headers,
  }).catch((err) => {
    return err.response;
  });

  if (!response.data) {
    const res = {
      error: true,
      message: 'error',
      data: null,
    };
    return res;
  }

  return response.data;
}
