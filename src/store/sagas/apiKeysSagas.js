import axiosApi from "../../axiosApi";
import {put} from "redux-saga/effects";
import {addKeyFailure, addKeySuccess} from "../actions/apiKeysAction";


export function* AddKeySagas({payload}) {
    try {
        const response = yield axiosApi.post('/stops/', payload);
        yield put(addKeySuccess());

    } catch (e) {
        console.log('Не удалось добавить');
        yield put(addKeyFailure());
    }
}
