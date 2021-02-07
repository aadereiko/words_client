import { loadAllUserSetsAction } from './../wordsSet/sagas';
import { ILoginUser, ILoginUserResponse, IUser } from './types';
import { getToken, setToken, removeToken } from './../../services/localStorageService';
import { requestAPI, IResponse, handleResponseSnackbar } from './../../services/request';
import { ActionCreatorWithPayload, createAction } from '@reduxjs/toolkit';
import { call, takeEvery, put, Effect } from 'redux-saga/effects';

import { resetUserAction, setUserAction } from "./slice";
// check
export const loadUserAction = createAction<void>('user/load');
export const loginUserAction = createAction<ILoginUser>('user/login');
export const logoutUserAction = createAction<void>('user/logout');

function* loadUser() {
    const resp: IResponse<IUser> = yield call(requestAPI, '/users/me');

    if (resp?.data) {
        yield put(setUserAction(resp.data));
        yield put(loadAllUserSetsAction());
    } else {
        yield put(resetUserAction());
    }
}

function* loginUser({ payload }: ReturnType<typeof loginUserAction>) {
    const resp: IResponse<ILoginUserResponse> = yield call(requestAPI, '/users/auth', {
        method: 'POST',
        body: payload,
    })

    if (resp?.data) {
        setToken(resp.data.token);
        yield put(setUserAction(resp.data.user));
    }

    yield put(handleResponseSnackbar(resp));

}

function* logoutUser() {
    removeToken();

    yield put(resetUserAction());
}

export default [
    takeEvery(loadUserAction, loadUser),
    takeEvery(loginUserAction, loginUser),
    takeEvery(logoutUserAction, logoutUser)
];