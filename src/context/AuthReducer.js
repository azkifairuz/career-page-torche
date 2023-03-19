let userStorage = localStorage.getItem("user");
let user = userStorage ? JSON.parse(userStorage).user : null;
let token = userStorage ? JSON.parse(userStorage).auth_token : null;

export const initialState = {
  user: user || null,
  token: token || null,
  isFetching: false,
  isisLoading: false,
  error: false,
};

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...initialState,
        isLoading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        user: action.payload.user,
        token: action.payload.auth_token,
        isLoading: false,
      };
    case "LOGOUT":
      return {
        ...initialState,
        user: "",
        token: "",
      };

    case "LOGIN_ERROR":
      return {
        ...initialState,
        isLoading: false,
        error: action.error,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};