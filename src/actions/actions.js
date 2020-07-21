import axios from "axios";

export const REGISTER_ACCOUNT = "REGISTER_ACCOUNT";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const TASK_FAIL = "TASK_FAIL";
export const TASK_START = "TASK_START";

export const taskStart = () => dispatch => {
  dispatch({
    type: TASK_START
  });
};

export const registerAccount = (data, props) => dispatch => {
  axios
    .post(`${process.env.REACT_APP_BASE_API_URL}/auth/register`, data)
    .then(res => {
      dispatch({ type: REGISTER_ACCOUNT, payload: res.data });
      props.history.push("/regsuccessful");
    })
    .catch(err => {
      dispatch({ type: TASK_FAIL, payload: err.message });
      props.history.push("/regunsuccessful");
      console.log(err.message);
    });
};

export const userLogon = (data, props) => dispatch => {
  axios
    .post(`${process.env.REACT_APP_BASE_API_URL}/auth/login`, data)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN, payload: res.data });
      console.log("NL: actions.js: userLogon: data: ", data);
      props.history.push("/portal/dashboard");
    })
    .catch(err => {
      dispatch({ type: TASK_FAIL, payload: err.message });
      console.log(err);
    });
};

export const userLogout = data => dispatch => {
  dispatch({ type: LOGOUT, payload: data });
};
