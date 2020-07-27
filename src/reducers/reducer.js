import {
  REGISTER_ACCOUNT,
  LOGIN,
  LOGOUT,
  GET_USERS,
  UPDATE_USER,
  DELETE_USER,
  ADD_INVENTORY,
  UPDATE_INVENTORY,
  DELETE_INVENTORY,
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
  users: [],
  inventory: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_ACCOUNT: {
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

    case ADD_INVENTORY: {
      const addInventory = state.inventory.map((inv, index) => {
        if (inv.id === action.payload.id) {
          return action.payload;
        }
        return inv;
      });
      return { ...state, inventory: addInventory };
    }

    case UPDATE_INVENTORY: {
      const updateInventory = state.inventory.map((inv, index) => {
        if (inv.id === action.payload.id) {
          return action.payload;
        }
        return inv;
      });
      return { ...state, inventory: updateInventory };
    }

    case DELETE_INVENTORY: {
      return {
        ...state,
        inventory: state.inventory.filter(inv => {
          return inv.id !== action.payload;
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
