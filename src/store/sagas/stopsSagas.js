import {put, takeEvery} from 'redux-saga/effects';
import axiosApi from "../../axiosApi";
import {
    addStopFailure,
    addStopRequest,
    addStopSuccess, deleteSelectedStopFailure, deleteSelectedStopRequest, deleteSelectedStopSuccess,
    deleteStopFailure,
    deleteStopRequest,
    deleteStopSuccess,
    editStopFailure,
    editStopRequest,
    editStopSuccess,
    fetchAllStopsCountRequest,
    fetchAllStopsCountSuccess,
    fetchSingleStopRequest,
    fetchSingleStopSuccess,
    fetchStopsFailure,
    fetchStopsForBus,
    fetchStopsForBusRequest,
    fetchStopsForTaxi,
    fetchStopsForTaxiRequest,
    fetchStopsForTrolleybus,
    fetchStopsForTrolleybusRequest,
    fetchStopsRequest,
    fetchStopsSuccess,
    fetchUnknownStops,
    fetchUnknownStopsRequest, showOverlay
} from "../actions/stopsActions";
import {toast} from "react-toastify";
import History from "../../History";
import {busStops} from "../../paths";


export function* fetchStopsSagas({payload}) {
    try {
        if(payload) {
            const response = yield axiosApi.get('/stops' + payload);
            yield put(fetchStopsSuccess(response.data));
            console.log(response.data)
        }else{
            const response = yield axiosApi.get('/stops');
            yield put(fetchStopsSuccess(response.data));
            console.log(response.data)
        }

    } catch (e) {
        toast.error('Не удалось загрузить');
        yield put(fetchStopsFailure());
    }
}


export function* fetchSingleStopSaga({payload}){
    try {
        const response = yield axiosApi.get('/stop/'+payload);
        yield put(fetchSingleStopSuccess(response.data))
    }catch (e) {
        toast.error("Ошибка при загружении остановки")
    }
}


export function* fetchAllStopsCountSaga({payload}) {
    try{
        const response = yield axiosApi.get('/stops' + payload);
        yield put(fetchAllStopsCountSuccess(response.data));

    } catch (e) {
        toast.error('Не удалось загрузить');
    }
}



export function* fetchStopsForBusSaga({payload}) {
    try{
            const response = yield axiosApi.get('/stops' + payload);
            yield put(fetchStopsForBus(response.data));

    } catch (e) {
        toast.error('Не удалось загрузить');
    }
}


export function* fetchStopsForTrolleybusSaga({payload}) {
    try{
        const response = yield axiosApi.get('/stops' + payload);
        yield put(fetchStopsForTrolleybus(response.data));

    } catch (e) {
        toast.error('Не удалось загрузить');
    }
}

export function* fetchStopsForTaxiSaga({payload}) {
    try{
        const response = yield axiosApi.get('/stops' + payload);
        yield put(fetchStopsForTaxi(response.data));

    } catch (e) {
        toast.error('Не удалось загрузить');
    }
}

export function* fetchUnknownStopsSaga({payload}) {
    try{
        const response = yield axiosApi.get('/stops' + payload);
        yield put(fetchUnknownStops(response.data));

    } catch (e) {
        toast.error('Не удалось загрузить');
    }
}


export function* AddStopsSagas({payload}) {
    console.log(payload)
    try {
        const response = yield axiosApi.post('/stop/', payload);
        yield put(addStopSuccess());
        yield put(fetchStopsRequest())
        toast.success(`${payload.n} - остановка добавлена`);
    } catch (e) {
        yield put(addStopFailure());
    }
}


function* deleteStopSaga({payload:id}) {

    try {
        yield axiosApi.delete(`/stop/${id}`);
        yield put(deleteStopSuccess(id));
        yield put(fetchStopsRequest())
        toast.success('Остановка удалена!');
    } catch (e) {
        yield put(deleteStopFailure());
    }
}


function* deleteSelectedStopSaga({payload:id}) {
    try {
        yield axiosApi.delete(`/stops`, {data:{"ids":id}});
        yield put(deleteSelectedStopSuccess(id));
        // yield put(fetchStopsRequest())
        toast.success('Выбранные остановки удалены!');
    } catch (e) {
        yield put(deleteSelectedStopFailure());
        console.log(e)
    }
}



function* editStopSaga({payload}) {
    console.log(payload)
    try {
        yield axiosApi.put(`/stop/${payload.id}`, payload.obj);
        yield put(editStopSuccess());
        yield put(fetchStopsRequest())
        toast.success('Остановка обновлена!');
        History.push(busStops);
    } catch (e) {
        yield put(editStopFailure());
    }
}



const stopsSaga = [
    takeEvery(fetchStopsRequest, fetchStopsSagas),
    takeEvery(fetchStopsForBusRequest, fetchStopsForBusSaga),
    takeEvery(fetchAllStopsCountRequest, fetchAllStopsCountSaga),
    takeEvery(fetchStopsForTrolleybusRequest, fetchStopsForTrolleybusSaga),
    takeEvery(fetchStopsForTaxiRequest, fetchStopsForTaxiSaga),
    takeEvery(fetchUnknownStopsRequest, fetchUnknownStopsSaga),
    takeEvery(addStopRequest, AddStopsSagas),
    takeEvery(fetchSingleStopRequest, fetchSingleStopSaga),
    takeEvery(deleteStopRequest, deleteStopSaga),
    takeEvery(editStopRequest, editStopSaga),
    takeEvery(deleteSelectedStopRequest, deleteSelectedStopSaga),
];

export default stopsSaga;