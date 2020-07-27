import axios from "axios";
import { axiosWithAuth } from "../auth/axiosWithAuth";

export const REGISTER_ACCOUNT = "REGISTER_ACCOUNT";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const GET_USERS = "GET_USERS";
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
        dispatch(getUsers());
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

export const getUsers = () => dispatch => {
  axiosWithAuth()
    .get(`${process.env.REACT_APP_BASE_API_URL}/users`)
    .then(res => {
      dispatch({ type: GET_USERS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: TASK_FAIL, payload: err.message });
      console.log(err);
    });
};

export const updateUser = (data, prevStatus) => dispatch => {
  if (prevStatus === "pending" && data.status !== "pending") {
    data.role = "none";
  } else if (prevStatus !== "pending" && data.status === "pending") {
    data.role = "none";
  } else if (data.status === "inactive" && data.role !== "none") {
    data.role = "none";
  }

  if (data.status === "active" && data.role === "none") {
    data.role = "read";
  }

  axiosWithAuth()
    .put(`${process.env.REACT_APP_BASE_API_URL}/users/${data.id}`, data)
    .then(res => {
      dispatch({ type: UPDATE_USER, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: TASK_FAIL, payload: err.message });
      console.log(err.message);
    });
};

export const deleteUser = id => dispatch => {
  axiosWithAuth()
    .delete(`${process.env.REACT_APP_BASE_API_URL}/users/${id}`, id)
    .then(res => {
      dispatch({
        type: DELETE_USER,
        payload: id
      });
    })
    .catch(err => {
      dispatch({ type: TASK_FAIL, payload: err.message });
      console.log(err);
    });
};
