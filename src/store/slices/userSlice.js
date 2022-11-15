import {createSlice} from "@reduxjs/toolkit";

export const initialState = {
    user: null,
    loginError: null,
    loginLoading: false,
};

const name = 'users';

const usersSlice = createSlice({
    name,
    initialState,
    reducers: {
        loginUser(state) {
            state.loginLoading = true;
        },
        loginUserSuccess(state, action) {
            state.loginLoading = false;
            state.user = action.payload;
            state.loginError = null;
        },
        loginUserFailure(state, action) {
            state.loginError = action.payload;
            state.loginLoading = false;
        },
        clearError(state) {
            state.loginError = null;
            state.registerError = null;
        },

        logout(state) {
            state.user = null;
        },
    },
});

export default usersSlice;