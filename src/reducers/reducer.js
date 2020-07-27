import {
  REGISTER_ACCOUNT,
  LOGIN,
  LOGOUT,
  GET_USERS,
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
  users: []
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

    case GET_USERS: {
      return { ...state, users: action.payload };
    }

    case UPDATE_USER: {
      const updateUsers = state.users.map((user, index) => {
        if (user.id === action.payload.id) {
          return action.payload;
        }
        return user;
      });
      return { ...state, users: updateUsers };
    }

    case DELETE_USER: {
      return {
        ...state,
        users: state.users.filter(user => {
          return user.id !== action.payload;
        })
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
