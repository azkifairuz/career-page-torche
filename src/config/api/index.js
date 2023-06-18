import axios from "axios";

export default async function callAPI(config) {
  const { url, method, data, withCredentials } = config;
  let headers = { "Content-Type": "application/json" };

  const response = await axios({
    url,
    method,
    data,
    withCredentials,
    headers,
  }).catch((err) => {
    return err.response;
  });

  if (!response.data) {
    const res = {
      error: true,
      message: "error",
      data: null,
    };
    return res;
  }

  console.log(response);

  return response.data;
}
