import axios from "axios";

const URL = "dummy url";

export const login = async (dispatch, loginPayload) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginPayload),
  };

  try {
    dispatch({ type: "REQUEST_LOGIN" });
    let response = await axios.post(URL, requestOptions);
    let data = await response.data;

    if (data.user) {
      localStorage.setItem("user", JSON.stringify(data));
      dispatch({ type: "LOGIN_SUCCESS", payload: data });
      return data;
    }

    dispatch({ type: "LOGIN_ERROR", error: data.error });
    return;
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", error: error });
  }
};

export const logout = async (dispatch) => {
  localStorage.removeItem("user");
  dispatch({ type: "LOGOUT" });
}