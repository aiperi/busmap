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
      {loading && <CircularProgress size={20} style={theme.progress} color="inherit"/>}
    </Button>
  );
};

export default ButtonWithProgress;