import { createSelector } from '@reduxjs/toolkit';
import { IStore } from './../root-reducer';


export const selectUserSlice = (store: IStore) => store.user;

export const selectCurrentUserFullName =
    createSelector(selectUserSlice, (userSlice): string => `${userSlice.lastName} ${userSlice.firstName}`);

export const selectIsAuth =
    createSelector(selectUserSlice, (userSlice): boolean | null => userSlice.isAuth);