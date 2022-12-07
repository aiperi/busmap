import {all} from 'redux-saga/effects';
import usersSagas from "./sagas/usersSagas";
import stopsSagas from "./sagas/stopsSagas";
import routesSagas from "./sagas/routesSagas";


export function* rootSagas() {
    yield all([
        ...usersSagas,
        ...stopsSagas,
        ...routesSagas
    ]);
}