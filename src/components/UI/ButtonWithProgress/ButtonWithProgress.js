import React from 'react';
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import {makeStyles} from "@mui/styles";
import theme from "../../../theme";

const useStyles = makeStyles({
    wrapper: {
        position: 'relative'
    },
});

const ButtonWithProgress = ({children, onClick, loading, ...props}) => {
    const classes = useStyles();

    return (
        <Button
            className={classes.wrapper}
            onClick={onClick}
            {...props}
        >
            {children}
            {loading &&
                <CircularProgress
                    size={20}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        marginTop: '-12px',
                        marginLeft: '-12px',
                        color:"white"
                    }}
                    />}
        </Button>
    );
};

export default ButtonWithProgress;