import { IWordSetCreateResponse, IWordsSet, IWordsServerSet, ILoadSelectedSetReq, IFullWordsServerSet, IWord, IWordServer, IActionWordInSetProps, IWordWithId, IWordsSetWithId } from './types';
import { requestAPI, IResponse, handleResponseSnackbar } from './../../services/request';
import { createAction } from '@reduxjs/toolkit';
import { call, takeEvery, put } from 'redux-saga/effects';
import { setSelectedWordSetAction, setWordsSetOfCurrentUSerAction } from './slice';
import { transformFullWordsSetFromService, transformWordsSetFromService } from './service';

// check
export const createWordsSetAction = createAction<IWordsSet>('wordsSet/create');
export const createWordAction = createAction<IWord>('wordsSet/createWord');
export const loadAllUserSetsAction = createAction<void>('wordsSet/load/me');
export const loadSelectedSetAction = createAction<ILoadSelectedSetReq>('wordsSet/selected');
export const copyToSetAction = createAction<IActionWordInSetProps>('wordsSet/copyToSet');
export const removeFromSetAction = createAction<IActionWordInSetProps>('wordsSet/removeFromSet');
export const updateWordAction = createAction<IWordWithId>('wordsSet/updateWord');
export const updateSetAction = createAction<IWordsSetWithId>('wordsSet/updateSet');

function* createWordsSet({ payload }: ReturnType<typeof createWordsSetAction>) {
    const resp: IResponse<IWordSetCreateResponse> = yield call(requestAPI, '/sets', {
        method: 'POST',
        body: payload,
    });

    yield put(handleResponseSnackbar(resp));
}

function* loadAllUserSets() {
    const resp: IResponse<IWordsServerSet[]> = yield call(requestAPI, '/sets/me');
    if (resp?.data) {
        yield put(setWordsSetOfCurrentUSerAction(resp.data.map(wordsSet => transformWordsSetFromService(wordsSet))));
    }

}

function* loadSelectedSet({ payload }: ReturnType<typeof loadSelectedSetAction>) {
    const resp: IResponse<IFullWordsServerSet> = yield call(requestAPI, `/words/${payload.id}`);
    if (resp?.data) {
        yield put(setSelectedWordSetAction(transformFullWordsSetFromService(resp.data)));
    }
}

function* createWord({ payload }: ReturnType<typeof createWordAction>) {
    const resp: IResponse<IWordServer> = yield call(requestAPI, '/words', {
        method: 'POST',
        body: payload,
    });

    yield put(handleResponseSnackbar(resp));
}

function* copyToSet({ payload }: ReturnType<typeof copyToSetAction>) {
    const resp: IResponse<void> = yield call(requestAPI, `/words/${payload.wordId}/addToSet`, {
        method: "PATCH",
        body: {
            setId: payload.setId,
        }
    });

    yield put(handleResponseSnackbar(resp));
}

function* removeFromSet({ payload }: ReturnType<typeof copyToSetAction>) {
    const resp: IResponse<void> = yield call(requestAPI, `/words/${payload.wordId}/removeSet`, {
        method: "PATCH",
        body: {
            setId: payload.setId,
        }
    });

    yield put(handleResponseSnackbar(resp));
}

function* updateWord({ payload }: ReturnType<typeof updateWordAction>) {
    const { wordId, ...body } = payload;
    const resp: IResponse<IWord> = yield call(requestAPI, `/words/${wordId}`, {
        method: 'PATCH',
        body,
    });

    yield put(handleResponseSnackbar(resp));
}


function* updateSet({ payload }: ReturnType<typeof updateSetAction>) {
    console.log(payload);
    const { setId, ...body } = payload;
    const resp: IResponse<IWord> = yield call(requestAPI, `/sets/${setId}`, {
        method: 'PATCH',
        body,
    });

    yield put(handleResponseSnackbar(resp));
}



export default [
    takeEvery(createWordsSetAction, createWordsSet),
    takeEvery(loadAllUserSetsAction, loadAllUserSets),
    takeEvery(loadSelectedSetAction, loadSelectedSet),
    takeEvery(createWordAction, createWord),
    takeEvery(copyToSetAction, copyToSet),
    takeEvery(removeFromSetAction, removeFromSet),
    takeEvery(updateWordAction, updateWord),
    takeEvery(updateSetAction, updateSet)
];