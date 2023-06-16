const axios = require('axios');
const cookies = require('js-cookie');

export default async function callAPI(config) {
  const { url, method, data, mustAuthenticated } = config;
  let headers = {}

  headers["Content-Type"] = "application/json";

  if (mustAuthenticated) {
    const jwtToken = cookies.get("token");
    headers["Authorization"] = `Bearer ${jwtToken}`;
  }

  const response = await axios({
    url,
    method,
    data,
    headers
  })

  return response;
}