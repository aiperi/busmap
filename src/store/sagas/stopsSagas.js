import {put, takeEvery} from 'redux-saga/effects';
import axiosApi from "../../axiosApi";
import {
    addStopFailure, addStopsRequest,
    addStopSuccess,
    fetchStopsFailure,
    fetchStopsRequest,
    fetchStopsSuccess
} from "../actions/stopsActions";



export function* fetchStopsSagas() {
    try {
            const response = yield axiosApi.get('/stops/');
            yield put(fetchStopsSuccess(response.data));

    } catch (e) {
        console.log('Не удалось загрузить');
        yield put(fetchStopsFailure());
    }
}

export function* AddStopsSagas({payload}) {
    try {
        const response = yield axiosApi.post('/stops/', payload);
        yield put(addStopSuccess());

    } catch (e) {
        console.log('Не удалось добавить');
        yield put(addStopFailure());
    }
}





const stopsSaga = [
    takeEvery(fetchStopsRequest, fetchStopsSagas),
    takeEvery(addStopsRequest, AddStopsSagas),
];

export default stopsSaga;