/*global google*/
import React, { useEffect, useState, useMemo, useRef } from 'react';
import { Grid } from '@mui/material';
import { ColorButton, MODAL_STYLES, OVERLAY_STYLE, useStyles } from './style';
import { blue } from '../../../colors';
import {useDispatch, useSelector} from 'react-redux';
import {
  DirectionsRenderer,
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
  Polyline, useLoadScript
} from '@react-google-maps/api';
import ActionModal from './ActionModal';
import { useLocation } from 'react-router-dom';
import {fetchRoutesStopsRequest} from "../../../store/actions/routesActions";
import {fetchStopsRequest} from "../../../store/actions/stopsActions";
import decodePolyline from "decode-google-map-polyline";
import Map from "./Map";
import Preloader from "../../UI/Preloader/Preloader";


const StopsTab = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

   const stops = useSelector((state) => state.routes.stops)

  useEffect(() => {
    dispatch(fetchRoutesStopsRequest())
  }, []);

  const destination3 = {
    lat: 42.87878425886898,
    lng: 74.58840296427789,
  };

  const [selectedMarker, setSelectedMarker] = useState('');
  const [isOpenTooltip, setOpenTooltip] = useState('');
  const [isOpenModal, setOpenModal] = useState(false);
  const [newDirection, setNewDirection] = useState(false);

  const container = {
    width: '100%',
    height: '80vh',
  };

  const center = useMemo(
    () => ({
      lat: 40.517110973437354,
      lng: 72.813289660529,
    }),
    []
  );

  const [position , setPosition] = useState([
    {lat: 37.772, lng: -122.214},
    {lat: 21.291, lng: -157.821},
    {lat: -18.142, lng: 178.431},
    {lat: -27.467, lng: 153.027}
  ]);


  const openModal = () => {
    setOpenModal(true);
    setOpenTooltip(false);
  };

  // const options = {
  //   strokeColor: '#FF0000',
  //   strokeOpacity: 0.8,
  //   strokeWeight: 2,
  //   fillColor: '#FF0000',
  //   fillOpacity: 0.35,
  //   clickable: true,
  //   draggable: false,
  //   editable: true,
  //   visible: true,
  //   radius: 30000,
  //   zIndex: 1
  // };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyD8VJHZ2vIQNxAZZ1hf0vKnEa3KjmXM1Pg',
  });


  return (
    <Grid container>
      <Grid
        item
        width={'30%'}
        sx={{ overflow: 'auto', height: '80vh', backgroundColor: 'whitesmoke' }}
      >
        {!isLoaded ? (
            <Preloader />
        ) : (
        <div>
        {stops && stops.map((stops, index) => (
          <div className={classes.prettyStopRow} key={index}>
            <div className={classes.left}>
              <div className={classes.index}>{index + 1}</div>
              <div
                className={`${classes.prettyBorder} ${
                  index === 0 && classes.first
                }`}
              >
                <div
                  className={`${classes.circle} ${
                    index === 0 && classes.first
                  }`}
                ></div>
              </div>
            </div>
            <div className={classes.right}>
              {stops.n}
              <p>
                {/*<i style={{ fontSize: '12px' }}>{stops.p[0].x} {stops.p[0].y}</i>*/}
              </p>
            </div>
          </div>
        ))}
        </div>
            )}
      </Grid>
      <Grid item flexGrow={1}>
        <div className={classes.container} style={{ position: 'relative' }}>
          <Map />
        </div>
      </Grid>
    </Grid>
  );
};

export default StopsTab;
