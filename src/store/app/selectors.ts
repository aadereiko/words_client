import { ISnackbar } from './types';
import { createSelector } from '@reduxjs/toolkit';
import { IStore } from './../root-reducer';


export const selectAppSlice = (store: IStore) => store.app;

export const selectSnackbar =
    createSelector(selectAppSlice, (app): ISnackbar => app.snackbar);

export const selectIsSnackbarOpened = createSelector(selectSnackbar, (snackbar): boolean => !!snackbar?.isOpened);
export const selectIsSnackbarSuccess = createSelector(selectSnackbar, (snackbar): boolean => !!snackbar?.isSuccess);
export const selectSnackbarText = createSelector(selectSnackbar, (snackbar): string => snackbar?.text);