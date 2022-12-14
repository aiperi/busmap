import {combineReducers} from "redux";
import createSagaMiddleware from 'redux-saga';
import {rootSagas} from "./rootSagas";
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import {loadFromLocalStorage} from "./localStorage";
import usersSlice from "./slices/userSlice";
import stopSlice from "./slices/stopSlice";
import axiosApi from "../axiosApi";
import routesSlice from "./slices/RoutesSlice";

// const csrfToken = getCookie('csrftoken');


const rootReducer = combineReducers({
    'users': usersSlice.reducer,
    'stops':stopSlice.reducer,
    'routes': routesSlice.reducer,

});


const sagaMiddleware = createSagaMiddleware();

const persistedState = loadFromLocalStorage();

const middleware = [ ...getDefaultMiddleware(), sagaMiddleware];

const store = configureStore({
    reducer: rootReducer,
    middleware,
    preloadedState: persistedState,
    devTools: true,
});

sagaMiddleware.run(rootSagas);


// store.subscribe(() => {
//     saveToLocalStorage({
//         users: {
//             ...initialState,
//             user: store.getState().users.user
//         },
//     });
// });


axiosApi.interceptors.request.use(config => {
    try {
        config.headers['Authorization'] = 'Token 09e9e3d2ceaff3c90f5c20961fd630dd4fab0af8';
    } catch (e) {}

    return config;
});


export default store;