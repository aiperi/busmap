import React from 'react';
import {CssBaseline} from "@mui/material";
import AppToolBar from "../AppToolBar/AppToolBar";
import {useLocation} from "react-router-dom";
import {login} from "../../../paths";

const Layout = ({children}) => {
    const location = useLocation();
    return (
        <>
            {/*<CssBaseline/>*/}
            {location.pathname !== login &&(
                <AppToolBar/>
            )}
            <div style={{display: 'flex', minHeight: '100vh', flexDirection: 'column'}}>
                <div style={{flex: '1 1 auto'}}>

                    {children}
                </div>
            </div>
        </>
    );
};

export default Layout;