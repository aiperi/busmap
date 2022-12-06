import React from 'react';
import {Backdrop, Card, CardContent, Fade, Modal} from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {useSelector} from "react-redux";
import "./style.css"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {xs: 250, md: 700},
    backgroundColor: 'background.paper',
    p: 2,

}

const ModalComponent = ({open, onClose}) => {
    const routes = useSelector(state => state.stops.stopInRoutes);
    const  count = useSelector(state => state.stops.routesCountInStop);
    console.log(routes);
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={onClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Card sx={style} variant="outlined">
                    <CardContent>
                        <Typography variant="overline" textAlign="center" sx={{marginBottom:"20px"}} >
                            Эта остановка задействованна в маршрутах: {count}
                        </Typography>
                        <div className={"route-box"}>

                        {routes && Object.keys(routes).map(obj=>(
                            <div className={"routes"}>
                                <div className="routesNum" >
                                  <Typography variant={"button"}>{routes[obj].n}</Typography>
                                </div>
                                <div style={{overflow:"hidden", whiteSpace:"nowrap", marginLeft:"10px"}}>
                                    {routes[obj].plan.map(stop =>(
                                        <Typography variant={"caption"} sx={{fontSize:"15px"}}>{stop}</Typography>
                                    ))}
                                </div>

                            </div>
                        ))}
                        </div>

                    </CardContent>
                    <Grid container justifyContent="space-evenly" alignItems="center">

                        {/*<Grid item>*/}
                        {/*    <Button*/}
                        {/*        color="primary"*/}
                        {/*        onClick={confirm}*/}
                        {/*        variant="outlined"*/}
                        {/*    >*/}
                        {/*        Да*/}
                        {/*    </Button>*/}
                        {/*</Grid>*/}
                        {/*<Grid item>*/}
                        {/*    <Button*/}
                        {/*        color="secondary"*/}
                        {/*        onClick={onClose}*/}
                        {/*        variant="outlined"*/}
                        {/*    >*/}
                        {/*        Нет*/}
                        {/*    </Button>*/}
                        {/*</Grid>*/}
                    </Grid>
                </Card>
            </Fade>
        </Modal>
    );
};

export default ModalComponent;