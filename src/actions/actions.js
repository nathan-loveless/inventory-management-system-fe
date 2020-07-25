import axios from "axios";
import { axiosWithAuth } from "../auth/axiosWithAuth";

export const REGISTER_ACCOUNT = "REGISTER_ACCOUNT";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const GET_ACTIVE_USERS = "GET_ACTIVE_USERS";
export const GET_INACTIVE_USERS = "GET_INACTIVE_USERS";
export const GET_PENDING_USERS = "GET_PENDING_USERS";
export const UPDATE_USER = "UPDATE_USER";
export const DELETE_USER = "DELETE_USER";
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
      if (res.data.user.role === "admin") {
        dispatch(getActiveUsers());
        dispatch(getInactiveUsers());
        dispatch(getPendingUsers());
      }
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

export const getActiveUsers = () => dispatch => {
  axiosWithAuth()
    .get(`${process.env.REACT_APP_BASE_API_URL}/users/activeUsers`)
    .then(res => {
      console.log("NL: getActiveUsers res.data: ", res.data);
      dispatch({ type: GET_ACTIVE_USERS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: TASK_FAIL, payload: err.message });
      console.log(err);
    });
};

export const getInactiveUsers = () => dispatch => {
  axiosWithAuth()
    .get(`${process.env.REACT_APP_BASE_API_URL}/users/inactiveUsers`)
    .then(res => {
      console.log("NL: getInactiveUsers res.data: ", res.data);
      dispatch({ type: GET_INACTIVE_USERS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: TASK_FAIL, payload: err.message });
      console.log(err);
    });
};

export const getPendingUsers = () => dispatch => {
  axiosWithAuth()
    .get(`${process.env.REACT_APP_BASE_API_URL}/users/pendingUsers`)
    .then(res => {
      console.log("NL: getPendingUsers res.data: ", res.data);
      dispatch({ type: GET_PENDING_USERS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: TASK_FAIL, payload: err.message });
      console.log(err);
    });
};

export const updateUser = (data, prevStatus) => dispatch => {
  let url = "";
  console.log("NL: actions.js: updateUser (not inside ifs): data: ", data);

  if (prevStatus === "pending" && data.status !== "pending") {
    data.role = "none";
    url = `${process.env.REACT_APP_BASE_API_URL}/activateuser/${data.id}`;
  } else if (prevStatus !== "pending" && data.status === "pending") {
    data.role = "none";
    url = `${process.env.REACT_APP_BASE_API_URL}/deactiveuser/${data.id}`;
  } else if (data.status === "inactive" && data.role != "none") {
    data.role = "none";
    url = `${process.env.REACT_APP_BASE_API_URL}/updateuser/${data.id}`;
  } else if (data.status === "active" && data.role === "none") {
    data.role = "read";
    url = `${process.env.REACT_APP_BASE_API_URL}/updateuser/${data.id}`;
  } else {
    url = `${process.env.REACT_APP_BASE_API_URL}/updateuser/${data.id}`;
    console.log(
      "NL: actions.js: updateUsers: data: ",
      data,
      " prevStatus: ",
      prevStatus,
      "URL: ",
      url
    );
  }

  axiosWithAuth()
    .delete(url, data)
    .then(res => {
      dispatch({
        type: GET_PENDING_USERS,
        payload: { data: res.data, prevStatus: prevStatus }
      });
    })
    .catch(err => {
      dispatch({ type: TASK_FAIL, payload: err.message });
      console.log(err);
    });
};

export const deleteUser = (data, prevStatus) => dispatch => {
  axiosWithAuth()
    .put(
      `${process.env.REACT_APP_BASE_API_URL}/users/deleteuser/${data.id}`,
      data
    )
    .then(res => {
      dispatch({
        type: DELETE_USER,
        payload: { data: res.data, prevStatus: prevStatus }
      });
    })
    .catch(err => {
      dispatch({ type: TASK_FAIL, payload: err.message });
      console.log(err);
    });
};
