import {
  REGISTER_ACCOUNT,
  LOGIN,
  LOGOUT,
  GET_ACTIVE_USERS,
  GET_INACTIVE_USERS,
  GET_PENDING_USERS,
  UPDATE_USER,
  DELETE_USER,
  TASK_START,
  TASK_FAIL
} from "../actions/actions";

const initialState = {
  user: {
    id: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    email: "",
    status: "",
    role: ""
  },

  message: "",
  isAdmin: false,
  activeUsers: [],
  inactiveUsers: [],
  pendingUsers: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_ACCOUNT: {
      console.log(
        "NL: Reducers: Register: action.payload: ",
        action.payload.message
      );
      return {
        ...state,
        message: action.payload.message
      };
    }

    case LOGIN: {
      return {
        ...state,
        user: action.payload.user,
        message: action.payload.message,
        isAdmin: action.payload.isAdmin
      };
    }

    case LOGOUT: {
      return {
        ...state,
        isLogged: false
      };
    }

    case GET_ACTIVE_USERS: {
      console.log(
        "NL: reducer.js: GET_ACTIVE_USERS: payload: ",
        action.payload
      );
      return { ...state, activeUsers: action.payload };
    }
    case GET_INACTIVE_USERS: {
      return { ...state, inactiveUsers: action.payload };
    }
    case GET_PENDING_USERS: {
      return { ...state, pendingUsers: action.payload };
    }

    case UPDATE_USER: {
      return { ...state, user: action.payload };
    }

    case DELETE_USER: {
      return { ...state, user: action.payload };
    }

    case TASK_START: {
      return {
        ...state,
        error: "",
        isLoading: true
      };
    }
    case TASK_FAIL: {
      return {
        ...state,
        message: action.payload.message,
        isLoading: false
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
