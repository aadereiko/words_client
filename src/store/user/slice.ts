import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUserState {
    id: string;
}

const initialState: IUserState = {
    id: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, { payload }: PayloadAction<IUserState>) {
            state.id = payload.id;
        }
    }
})

export const {
    setUser: setUserAction,
} = userSlice.actions;

export const { reducer: userReducer } = userSlice;