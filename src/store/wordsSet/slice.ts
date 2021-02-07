import { IWordsSet, IWordsServerSet, IFullWordsServerSet } from './types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IWordsSetState {
    setsOfUser: Array<IWordsServerSet>;
    selectedSet: IFullWordsServerSet | null;
};

const initialState: IWordsSetState = {
    setsOfUser: [],
    selectedSet: null,
}

const wordsSetSlice = createSlice({
    name: 'wordsSet',
    initialState,
    reducers: {
        setWordsSetOfCurrentUSer(state, { payload }: PayloadAction<Array<IWordsServerSet>>) {
            state.setsOfUser = payload;
        },
        setSelectedWordSet(state, { payload }: PayloadAction<IFullWordsServerSet>) {
            state.selectedSet = payload;
        }
    },
})

export const {
    setWordsSetOfCurrentUSer: setWordsSetOfCurrentUSerAction,
    setSelectedWordSet: setSelectedWordSetAction,
} = wordsSetSlice.actions;

export const { reducer: wordsSetReducer } = wordsSetSlice;