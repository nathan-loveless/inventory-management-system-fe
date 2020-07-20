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
    .post("", data)
    .then(res => {
      dispatch({ type: REGISTER_ACCOUNT, payload: res.data });
      props.history.push("/login");
    })
    .catch(err => {
      dispatch({ type: TASK_FAIL, payload: err.message });
      console.log(err.message);
    });
};

export const userLogon = (data, props) => dispatch => {
  axios
    .post("", {
      login: data.login,
      password: data.password
    })
    .then(res => {
      localStorage.setItem("token", res.data.Token);
      dispatch({ type: LOGIN, payload: res.data });
      props.history.push("/portal");
    })
    .catch(err => {
      dispatch({ type: TASK_FAIL, payload: err.message });
      console.log(err);
    });
};

export const userLogout = data => dispatch => {
  dispatch({ type: LOGOUT, payload: data });
};
