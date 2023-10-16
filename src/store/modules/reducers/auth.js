import * as types from '../../types';

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  user: {},
};

const auth = (state = initialState, action) => {
  switch (action?.type) {
    case types.SIGNUP_REQUEST: {
      const newState = { ...state }
      newState.isLoading = true

      return newState
    }

    case types.SIGNUP_SUCCESS: {
      const newState = { ...state }
      newState.isLoggedIn = true
      newState.isLoading = false
      newState.user = action.payload.username

      return newState
    };

    case types.SIGNUP_FAILURE: {
      const newState = { ...initialState }
      newState.isLoading = false

      return newState
    };

    default:
      return state;
  }
};

export default auth;
