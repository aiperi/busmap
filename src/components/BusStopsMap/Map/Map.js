import React, {useRef,useCallback, useMemo} from 'react';
import {GoogleMap, Marker, MarkerClusterer, useLoadScript} from "@react-google-maps/api";
import {container, styles} from "../style"
import {nanoid} from "nanoid";
import {useDispatch} from "react-redux";
import {setIsAddStop} from "../../../store/actions/stopsActions";

const Map = ({busStops}) => {
    const dispatch = useDispatch();
    const mapRef = useRef(undefined);
    const center = useMemo(() => ({
        lat: 40.514294706806,
        lng: 72.81657725917724,
    }), [])


    const onLoad = useCallback((map) => {
        mapRef.current = map;
    }, [])

    const onUnmount = useCallback((map)=>(mapRef.current = undefined));




    return (
        <GoogleMap
            mapContainerStyle={container}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={{
                // mapTypeId: 'satelite',

            }}

            onRightClick={(ev) => {
                const position = {
                    lat: ev.latLng.lat(),
                    lng: ev.latLng.lng(),
                }
            //     setNewMarker(position)
            //     setZoom(16)
            dispatch(setIsAddStop())
            //
            }}
        >
            {/*Child components, such as markers, info windows, etc. */}

            <MarkerClusterer styles={styles}>
              {(clusterer) =>
                  busStops.map(stop => (
                      <Marker
                          position={{lat: stop.p[0].y, lng: stop.p[0].x}}
                          // options={{icon: busMarker}}
                          key={nanoid()}
                          clusterer={clusterer}
                          tracksViewChanges={false}
                          // onMouseOver={() => {
                          //     setSelectedMarker(stop)
                          // }}
                          // onMouseOut={() =>
                          //     setSelectedMarker("")
                          // }

                      >

                              {/*<InfoWindow*/}
                              {/*    position={{lat: stop.p[0].y, lng: stop.p[0].x}}*/}
                              {/*    visible={true}*/}
                              {/*>*/}
                              {/*/!*<InfoWindow position={{lat: selectedMarker.p[0].y, lng: selectedMarker.p[0].x}}>*!/*/}
                              {/*    <h4>{stop.n}</h4>*/}
                              {/*</InfoWindow>*/}

                      </Marker>
                  ))}


            </MarkerClusterer>

            {/*<Marker*/}
            {/*    position={center}*/}
            {/*    options={{icon: busMarker}}*/}
            {/*    // key={nanoid()}*/}
            {/*    // clusterer={clusterer}*/}
            {/*    // tracksViewChanges={false}*/}
            {/*    // onMouseDown={() => {*/}
            {/*    //     setSelectedMarker(stop)*/}
            {/*    // }}*/}
            {/*    // onMouseOver={() =>*/}
            {/*    //     setSelectedMarker("")*/}
            {/*    // }*/}
            {/*/>*/}


            {/*{newMarker && (*/}
            {/*    <Circle*/}
            {/*        center={newMarker}*/}
            {/*        radius={radius}*/}
            {/*        options={options}*/}
            {/*        onRadiusChanged={handleCircleRadius}*/}
            {/*        onLoad={(circle) => setCircle(circle)}*/}
            {/*        onUnmount={() => {*/}
            {/*            setCircle(null);*/}
            {/*            setRadius(50)*/}
            {/*        }}*/}
            {/*    />*/}
            {/*)}*/}

        </GoogleMap>
    );
};

export default React.memo(Map);