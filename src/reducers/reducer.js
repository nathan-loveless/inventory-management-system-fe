import { REGISTER_ACCOUNT, LOGIN, LOGOUT } from "../actions/actions";
import { TASK_START, TASK_FAIL } from "../actions/actions";

const initialState = {
  user: {}
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_ACCOUNT: {
      return {
        ...state,
        message: action.payload.message,
        isLoading: false
      };
    }

    case LOGIN: {
      console.log(
        "NL: reducer.js: USER_LOGON: action.payload.AuthorContent: ",
        action.payload.AuthorContent
      );
      return {
        ...state,
        user: action.payload.User,
        authorContent: action.payload.AuthorContent,
        contentLibrary: action.payload.ContentLibrary,
        isLogged: true,
        isLoading: false
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
        error: action.payload,
        isLoading: false
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
