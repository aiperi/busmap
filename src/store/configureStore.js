import {combineReducers} from "redux";
import createSagaMiddleware from 'redux-saga';
import {rootSagas} from "./rootSagas";
import {configureStore} from "@reduxjs/toolkit";
import {loadFromLocalStorage, saveToLocalStorage} from "./localStorage";
import usersSlice, {initialState} from "./slices/userSlice";
import stopSlice from "./slices/stopSlice";
import axiosApi from "../axiosApi";
import {getCookie} from "react-use-cookie";

const csrfToken = getCookie('csrftoken');


const rootReducer = combineReducers({
    'users': usersSlice.reducer,
    'stops':stopSlice.reducer,

});


const sagaMiddleware = createSagaMiddleware();

const persistedState = loadFromLocalStorage();

const middleware = [sagaMiddleware];

const store = configureStore({
    reducer: rootReducer,
    middleware,
    preloadedState: persistedState,
    devTools: true,
});

sagaMiddleware.run(rootSagas);


store.subscribe(() => {
    saveToLocalStorage({
        users: {
            ...initialState,
            user: store.getState().users.user
        },
    });
});


axiosApi.interceptors.request.use(config => {
    try {
        config.headers['X-CSRFToken'] = csrfToken;
    } catch (e) {}

    return config;
});


export default store;