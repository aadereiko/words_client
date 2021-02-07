import { selectIsAuth } from './selectors';
import { IUser } from './types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUserState extends IUser {
    isAuth: boolean | null;
};

const initialState: IUserState = {
    _id: '',
    email: '',
    firstName: '',
    lastName: '',
    createdAt: '',
    updatedAt: '',
    isAuth: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, { payload }: PayloadAction<IUser>) {
            state._id = payload._id;
            state.email = payload.email;
            state.firstName = payload.firstName;
            state.lastName = payload.lastName;
            state.createdAt = payload.createdAt;
            state.updatedAt = payload.updatedAt;
            state.isAuth = true;
        },
        resetUser(state) {
            return state = { ...initialState, isAuth: false };
        }
    }
})

export const {
    setUser: setUserAction,
    resetUser: resetUserAction,
} = userSlice.actions;

export const { reducer: userReducer } = userSlice;