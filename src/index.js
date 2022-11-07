import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App';
// import store from "./store/configureStore";
import theme from "./theme";
import {ThemeProvider} from "@mui/material/styles";
import "./index.css"



const app = (
    // <Provider store={store}>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
    // </Provider>
);

ReactDOM.render(app, document.getElementById('root'));