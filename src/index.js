import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import store from "./store/configureStore";
import theme from "./theme";
import {Provider} from "react-redux";
import {ThemeProvider} from "@mui/material/styles";
import "./index.css"
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import CustomNavigate from "./components/CustomNavigate/CustomNavigate";



const app = (
    <Provider store={store}>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <ToastContainer
                    position="bottom-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable
                    pauseOnHover={false}/>
                <App/>
                <CustomNavigate/>
            </ThemeProvider>
        </BrowserRouter>
     </Provider>
);

ReactDOM.render(app, document.getElementById('root'));