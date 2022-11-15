import {loginUser, loginUserFailure, loginUserSuccess, logout,} from "../actions/usersActions";
import axiosApi from "../../axiosApi";
import {toast} from "react-toastify";
import {put, takeEvery} from "redux-saga/effects";


export function* loginUserSaga({payload: user}) {
    try {
        const response = yield axiosApi.post('/api/login/', user);
        yield put(loginUserSuccess(response.data));
        toast.success('Вы авторизированы!');
    } catch (e) {
        toast.error(e.response.data.global);
        yield put(loginUserFailure(e.response.data));
    }

}



export function* logoutUserSaga() {
    try {
        yield axiosApi.delete('/users/sessions');
    } catch (e) {
        if (e.response && e.response.data) {
            yield  put(loginUserFailure(e.response.data));
        } else {
            yield put(loginUserFailure({message: "No internet connexion"}));
        }
    }
}

const usersSaga = [
    takeEvery(loginUser, loginUserSaga),
    takeEvery(logout, logoutUserSaga),
];

export default usersSaga;