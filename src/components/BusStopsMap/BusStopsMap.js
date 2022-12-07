import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { useLoadScript } from '@react-google-maps/api';
import { makeStyles } from '@mui/styles';
import AutocompleteSearch from '../AutocompleteSearch/AutocompleteSearch';
import Preloader from '../UI/Preloader/Preloader';
import AddBusStop from '../AddBusStop/AddBusStop';
import { useDispatch, useSelector } from 'react-redux';
import Map from './Map/Map';
import { setIsAddStop } from '../../store/actions/stopsActions';

const useStyles = makeStyles(() => ({
  container: {
    width: '100%',
    height: '80vh',
  },

  streetsBox: {
    padding: '15px',
  },
}));

const BusStopsMap = ({ stops }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const busStops = useSelector((state) => state.stops.stops);
  const [selectedMarker, setSelectedMarker] = useState('');
  const isAddStop = useSelector((state) => state.stops.isAddStop);
  const [newMarker, setNewMarker] = useState(null);
  const [radius, setRadius] = useState(50);
  const [circle, setCircle] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyD8VJHZ2vIQNxAZZ1hf0vKnEa3KjmXM1Pg',
  });

  const handleCircleRadius = () => {
    circle && setRadius(parseInt(circle['radius']));
  };

  const onCancel = () => {
    dispatch(setIsAddStop());
    setNewMarker(null);
  };

  const radiusChangeHandler = (e) => {
    setRadius(parseInt(e.target.value));
  };

  return (
    <Grid container>
      <Grid item width={'25%'} className={classes.streetsBox}>
        <AutocompleteSearch busStops={busStops} />
      </Grid>
      <Grid item width={'75%'}>
        <div className={classes.container}>
          {!isLoaded ? (
            <Preloader />
          ) : (
            <div style={{ position: 'relative' }}>
              <Map busStops={busStops} />
              {isAddStop && (
                <div
                  style={{
                    position: 'absolute',
                    zIndex: 555,
                    bottom: 0,
                    width: '100%',
                  }}
                >
                  <AddBusStop
                    onCancel={onCancel}
                    changeRadius={radiusChangeHandler}
                    radius={radius}
                    position={newMarker}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </Grid>
    </Grid>
  );
};

export default BusStopsMap;
