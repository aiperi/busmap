import {combineReducers} from "redux";
import createSagaMiddleware from 'redux-saga';
import {rootSagas} from "./rootSagas";
import {configureStore} from "@reduxjs/toolkit";
import {loadFromLocalStorage, saveToLocalStorage} from "./localStorage";
import usersSlice, {initialState} from "./slices/userSlice";


const rootReducer = combineReducers({
    'users': usersSlice.reducer,
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


export default store;