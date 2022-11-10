import {put, takeEvery} from 'redux-saga/effects';
import axiosApi from "../../../axiosApi";
import {fetchStopsFailure, fetchStopsRequest, fetchStopsSuccess} from "../../actions/stopsActions/stopsActions";



export function* fetchStopsSagas() {
    try {
            const response = yield axiosApi.get('/stops/');
            yield put(fetchStopsSuccess(response.data));

    } catch (e) {
        console.log('Не удалось загрузить');
        yield put(fetchStopsFailure());
    }
}



const stopsSaga = [
    takeEvery(fetchStopsRequest, fetchStopsSagas),
];

export default stopsSaga;