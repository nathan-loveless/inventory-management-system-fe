import { REGISTER_ACCOUNT, LOGIN, LOGOUT } from "../actions/actions";
import { TASK_START, TASK_FAIL } from "../actions/actions";

const initialState = {
  user: {
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

  message: ""
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
        message: action.payload.message
      };
    }

    case LOGOUT: {
      return {
        ...state,
        isLogged: false
      };
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
