import React from 'react';
import logo from "../../assets/images/APTOSH_print_logo.png";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import {yellow} from "../../colors";
import {BusNumberWrapper} from "../../assets/styles/trackingWrapper/trackingWrapper";
import {Typography} from "@mui/material";
import {nanoid} from "nanoid";


export class ComponentToPrint extends React.Component {
    constructor(props) {
        super(props);
        // this.state= {
        //     data: this.props.children
        // }
    }

    state = {
        date: "",
    };

    componentDidMount() {
        this.getDate();
    }

    getDate = () => {
        const today = new Date(), date = today.getDate() + '.' + (today.getMonth() + 1) + '.' + today.getFullYear();
        this.setState({date});
    };


    render() {
        return (
            <div style={{padding: "30px", display: "flex", flexDirection: "column"}}>
                <div style={{padding: "15px", display: "flex", justifyContent: "space-between"}}>
                    <div style={{fontSize: "20px"}}><span>{this.state.date}</span></div>
                    <div><img style={{width: "200px", height: "auto"}}
                              src={logo} alt="aptosh-logo"/></div>
                </div>

                <div>
                    <div style={{borderBottom: "1px solid lightgrey", marginBottom: "20px",}}>
                        <div
                            style={{
                                padding: '10px',
                                display: "flex",
                                alignItems: "center",
                                width: "88%"
                            }}>
                            <DirectionsBusIcon
                                sx={{
                                    color: yellow,
                                    fontSize: "30px",
                                    width: '60px'
                                }}/>
                            <BusNumberWrapper>
                                <p>102</p>
                            </BusNumberWrapper>
                            <Typography variant={'h5'} sx={{paddingBottom: "5px"}}>
                                ул. Манаса — ул.Абдрахманова
                            </Typography>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{
                        borderBottom: "1px solid lightgray",
                        display: 'flex',
                        justifyContent: "space-between",
                        padding: "15px 10px 5px",
                        textAlign: "center",
                    }}>
                        <p style={{width: "50%"}}><b>Расписание</b></p>
                        <p style={{width: "50%", borderLeft: "1px solid lightgray"}}><b>Объект</b></p>
                    </div>
                    {this.props.children.map((a, i) => (
                        <div style={{
                            borderBottom: "1px solid lightgray",
                            display: 'flex',
                            justifyContent: "space-between",
                            padding: "15px 10px 5px",
                            textAlign: "center",
                        }} key={nanoid()}>
                            <p  style={{width: "50%"}}>{a.time}</p>
                            <p  style={{width: "50%", borderLeft: "1px solid lightgray"}}>{a.numberObj}</p>
                        </div>
                    ))}
                </div>


            </div>
        );
    }
}