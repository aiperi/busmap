import usersSlice from "../slices/userSlice";

export const {
    loginUser,
    loginUserSuccess,
    loginUserFailure,
    clearError,
    logout,
} = usersSlice.actions;