import { all } from 'redux-saga/effects';
import userSagas from './user/sagas';

export default function* sagas() {
    yield all([...userSagas]);
}