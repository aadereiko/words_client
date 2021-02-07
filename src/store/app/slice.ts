import { ISnackbar } from './types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAppState {
    snackbar: ISnackbar;
};

const initialState: IAppState = {
    snackbar: {
        text: '',
        isOpened: false,
        isSuccess: false,
    }
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setSnackbar(state, { payload }: PayloadAction<ISnackbar>) {
            state.snackbar = payload;
        },
        resetSnackbar(state) {
            state.snackbar = initialState.snackbar;
        }
    }
})

export const {
    setSnackbar: setSnackbarAction,
    resetSnackbar: resetSnackbarAction,
} = appSlice.actions;

export const { reducer: appReducer } = appSlice;