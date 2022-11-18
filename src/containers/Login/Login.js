import React, {useEffect, useState} from 'react';
import FormElement from "../../components/UI/Form/FormElement";
import ButtonWithProgress from "../../components/UI/ButtonWithProgress/ButtonWithProgress";
import {makeStyles} from "@mui/styles";
import {Container, Grid} from "@mui/material";
import loginLogo from "../../assets/images/APTOSH_login_logo.png";
import {clearError, loginUser} from "../../store/actions/usersActions";
import {useDispatch, useSelector} from "react-redux";
import { Alert } from '@mui/material';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        marginTop: theme.spacing(1),
    },
    alert: {
        marginTop: theme.spacing(3),
        width: '100%',
    },

}));

const Login = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
const error = useSelector(state => state.users.loginError);
const loading = useSelector(state => state.users.loginLoading);
    console.log(error)
    const [user, setUser] = useState({
        username: '',
        password: '',
    });

    useEffect(()=>{
        return ()=>{
            dispatch(clearError())
        }
    },[dispatch])

    const inputChangeHandler = e => {
        const {name, value} = e.target;
        setUser(prevState => ({...prevState, [name]: value}))
    };


    const submitFormHandler = e => {
        e.preventDefault();
        dispatch(loginUser({...user}));
    };



    return (
        <div style={{
            backgroundColor:"#15416c",
            width:"100%", height:"100vh",
            paddingTop:"64px",

        }}>
            <Container component="section" maxWidth="xs" >
                <div className={classes.paper}>
                    <div>
                        <img
                            style={{width: "150px", height:"auto"}}
                            src={loginLogo} alt="aptosh-logo"/>
                    </div>

                    {
                        error &&
                        <Alert severity="error" className={classes.alert}>
                            {error}
                        </Alert>
                    }
                    <Grid
                        component="form"
                        container
                        direction="column"
                        className={classes.form}
                        onSubmit={submitFormHandler}
                    >

                        <FormElement
                            type="text"
                            label="User"
                            onChange={inputChangeHandler}
                            name="username"
                            value={user.username}
                            fullWidth={true}


                        />

                        <FormElement
                            type="password"
                            label="Password"
                            onChange={inputChangeHandler}
                            name="password"
                            autoComplete="current-password"
                            value={user.password}
                            fullWidth={true}
                        />

                        <Grid item xs={12}>
                            <ButtonWithProgress
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                sx={{backgroundColor:"#166767"}}
                                loading={loading}
                                disabled={loading}
                            >
                                Log in
                            </ButtonWithProgress>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    );
};

export default Login;