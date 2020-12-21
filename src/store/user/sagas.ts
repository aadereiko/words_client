import { createAction } from '@reduxjs/toolkit';
import { call, takeEvery, put } from 'redux-saga/effects';

import { setUserAction } from "./slice";
// check
export const loadUserAction = createAction<any>('user/load');

function* loadUser() {
    console.log("EFFECT");

    yield put(setUserAction({ id: "1" }));
}

export default [takeEvery(loadUserAction, loadUser)];