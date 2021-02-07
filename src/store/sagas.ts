import { all } from 'redux-saga/effects';
import userSagas from './user/sagas';
import wordsSetSagas from './wordsSet/sagas';

export default function* sagas() {
    yield all([...userSagas, ...wordsSetSagas]);
}