import {put, takeEvery} from 'redux-saga/effects';
import axiosApi from "../../axiosApi";
import {
    addStopFailure,
    addStopRequest,
    addStopSuccess,
    fetchStopsFailure,
    fetchStopsRequest,
    fetchStopsSuccess
} from "../actions/stopsActions";
import {toast} from "react-toastify";


export function* fetchStopsSagas() {
    try {
        const response = yield axiosApi.get('/stops');
        yield put(fetchStopsSuccess(response.data));
        console.log(response.data)
    } catch (e) {
        toast.error('Не удалось загрузить');
        yield put(fetchStopsFailure());
    }
}

export function* AddStopsSagas({payload}) {
    try {
        const response = yield axiosApi.post('/stop/', payload);
        yield put(addStopSuccess());

    } catch (e) {
        console.log('Не удалось добавить');
        console.log(e);
        yield put(addStopFailure());
    }
}





const stopsSaga = [
    takeEvery(fetchStopsRequest, fetchStopsSagas),
    takeEvery(addStopRequest, AddStopsSagas),
];

export default stopsSaga;