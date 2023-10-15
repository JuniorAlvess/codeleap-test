import * as types from '../../store/types';

export function signUpRequest(payload) {
  return {
    type: types.SIGNUP_REQUEST,
    payload,
  };
}

export function signUpSuccess(payload) {
  return {
    type: types.SIGNUP_SUCCESS,
    payload,
  };
}

export function signUpFailure(payload) {
  return {
    type: types.SIGNUP_FAILURE,
    payload,
  };
}
