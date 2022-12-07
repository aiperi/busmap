import {put, takeEvery} from 'redux-saga/effects';
import {
    addRoutesStopFailure,
    addRoutesStopSuccess,
    fetchRoutesStopsRequest,
    fetchRoutesStopsFailure,
    fetchRoutesStopsSuccess,
    addRoutesStopRequest,
    fetchRoutesGroupsRequest,
    fetchRoutesGroupsSuccess,
    fetchRoutesGroupsFailure,
    fetchRoutesUnitsSuccess,
    fetchRoutesUnitsFailure,
    fetchRoutesUnitsRequest,
    fetchSingleRoutesSuccess,
    fetchSingleRoutesFailure,
    fetchSingleRoutesRequest,
    fetchAssignUnitsSuccess,
    fetchAssignUnitsRequest,
    assignUnitsToRouteSuccess
} from "../actions/routesActions";
import axiosApi from "../../axiosApi";
import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {apiURL} from "../../config";
import {toast} from "react-toastify";

export function* fetchRoutesSagas() {
    try {
        const response = yield axiosApi.get('/routes/');
        yield put(fetchRoutesStopsSuccess(response.data));
    } catch (e) {
        console.log('Не удалось загрузить');
        yield put(fetchRoutesStopsFailure());
    }
}

export function* AddRoutesStopsSagas({ payload }) {
    try {
        const response = yield axiosApi.post('/routes/', payload);
        yield put(addRoutesStopSuccess());
    } catch (e) {
        console.log('Не удалось добавить');
        yield put(addRoutesStopFailure());
    }
}

export function* fetchRoutesGroupsSagas() {
    try {
        const response = yield axiosApi.get('/groups/');
        yield put(fetchRoutesGroupsSuccess(response.data));
    } catch (e) {
        console.log('Не удалось добавить');
        yield put(fetchRoutesGroupsFailure());
    }
}

export function* fetchRoutesUnitsSagas() {
    try {
        const response = yield axiosApi.get('/units/');
        yield put(fetchRoutesUnitsSuccess(response.data));
    } catch (e) {
        console.log('Не удалось добавить');
        yield put(fetchRoutesUnitsFailure());
    }
}

// export function* fetchAssignUnitsSagas() {
//     try {
//         const response = yield axiosApi.get('/units/');
//         yield put(fetchAssignUnitsSuccess(response.data));
//     } catch (e) {
//         console.log('Не удалось добавить');
//         // yield put(fetchAssignUnitsFailure());
//     }
// }

export const assignUnitsToRoute = createAsyncThunk(
    'search/fetchMaterial',
    async ({route, unit, group}, { rejectWithValue, dispatch }) => {
        try {
            const response = await axios({
                method: 'post',
                url: `${apiURL}routes/assign/`, data: {
                    "ids": route,
                    "u": unit,
                    "ug": group,
                },
                headers: {'Authorization':'Token 09e9e3d2ceaff3c90f5c20961fd630dd4fab0af8'},
            });
            // dispatch(assignUnitsToRouteSuccess(response.data));
            toast.success('Обьекты добавлены!');
        } catch (error) {
            toast.error('Не удалось загрузить');
        }
    }
);
// dispatch params
// dispatch(assignUnitsToRouteSagas({route:9, unit:9, group:9}))

// request
// export function* assignUnitsToRouteSagas({payload: {route, unit, group}}) {
//     try {
//         const response = yield axiosApi.post('/routes/assign/', {
//             ids: `${route}`,
//             u: `${unit}`,
//             ug: `${group}`,
//         },
//             );
//         yield put(assignUnitsToRouteSuccess());
//     } catch (e) {
//         console.log('Не удалось добавить');
//         console.log(e);
//         yield put(assignUnitsToRouteFailure());
//     }
// }
//
export function* fetchSingleRoutesSagas({payload:id}) {
    try {
        const response = yield axiosApi.get(`/route/${id}/`);
        yield put(fetchSingleRoutesSuccess(response.data));
    } catch (e) {
        console.log('Не удалось добавить');
        yield put(fetchSingleRoutesFailure());
    }
}

const routesSaga = [
    takeEvery(fetchSingleRoutesRequest, fetchSingleRoutesSagas),
    takeEvery(fetchRoutesStopsRequest, fetchRoutesSagas),
    // takeEvery(fetchAssignUnitsRequest, fetchAssignUnitsSagas),
    takeEvery(fetchRoutesUnitsRequest, fetchRoutesUnitsSagas),
    takeEvery(fetchRoutesGroupsRequest, fetchRoutesGroupsSagas),
    takeEvery(addRoutesStopRequest, AddRoutesStopsSagas),
];

export default routesSaga;
