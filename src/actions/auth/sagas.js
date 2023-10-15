import {
  put,
  all,
  takeLatest,
} from 'redux-saga/effects';
import toast from 'react-hot-toast';

import * as types from '../../store/types';
import * as actions from './actions';

import history from '../../services/history';

function* signUpRequest({ payload }) {
  const { username } = payload;
  try {
    if (username !== 'JuniorAlves') throw `Something went wrong!`;

    yield put(actions.signUpSuccess({ username }));
    history.push('/posts');
    toast.success(`Hi ${username}, welcome to CodeLeap network!`);
  } catch (err) {
    toast.error(err);
    yield put(actions.signUpFailure());
  }
}

export default all([takeLatest(types.SIGNUP_REQUEST, signUpRequest)]);
