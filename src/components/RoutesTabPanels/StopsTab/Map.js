/* global google */
import React, {useRef, useCallback, useMemo, useEffect} from 'react';
import {GoogleMap, LoadScript, Marker, MarkerClusterer, useLoadScript} from "@react-google-maps/api";
import {useDispatch, useSelector} from "react-redux";
import {Polyline} from "@mui/icons-material";
import decodePolyline from "decode-google-map-polyline";
import {container} from "../../BusStopsMap/style";
import options from "./options";
import {fetchRoutesStopsRequest} from "../../../store/actions/routesActions";
import yellowMarker from "../../../assets/images/place-marker.png"

const Map = () => {
    const dispatch = useDispatch();
    const mapRef = useRef(undefined);
    const stops = useSelector((state) => state.routes.stops)


    const center = useMemo(() => ({
        lat: 40.514294706806,
        lng: 72.81657725917724,
    }), [])

    const options = {
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        clickable: false,
        draggable: false,
        editable: true,
        visible: true,
        radius: 30000,
        zIndex: 1,
    };

    useEffect(() => {
        dispatch(fetchRoutesStopsRequest())
    },[])

// console.log(stops[8].st[0].map(i => i.p))
    return (
        <LoadScript googleMapsApiKey={'AIzaSyD8VJHZ2vIQNxAZZ1hf0vKnEa3KjmXM1Pg'}>
            <GoogleMap mapContainerStyle={container} center={center} zoom={14}>
                {stops &&
                    stops.map((stop, i) => (
                        <div >
                            <Polyline

                                path={{lat: stop.st[0].id.p[0].y , lng: stop.st[0].id.p[0].x}}
                                //     setZoom(16)
                                // dispatch(setIsAddStop())
                                options={options}
                                //     setZoom(16)
                                // dispatch(setIsAddStop())
                            />
                            <Marker
                             position={{lat: stop.st[0].id.p[0].y , lng: stop.st[0].id.p[0].x}}
                             options={{ icon: yellowMarker }}
                             label={i.toString()}
                               style={{ width: '50px', height: '50px' }}
                            />


                        </div>
                    ))}
                {/*{isOpenTooltip && (*/}
                {/*    <InfoWindow*/}
                {/*        options={{pixelOffset: new window.google.maps.Size(0, -50)}}*/}
                {/*        position={{lat: isOpenTooltip.p[0].y, lng: isOpenTooltip.p[0].x}}*/}
                {/*        onCloseClick={() => setOpenTooltip(false)}*/}
                {/*    >*/}
                {/*      <h4>{isOpenTooltip.n}</h4>*/}
                {/*    </InfoWindow>*/}
                {/*)}*/}
                {/*{selectedMarker && (*/}
                {/*    <InfoWindow*/}
                {/*        options={{pixelOffset: new window.google.maps.Size(-60, 50)}}*/}
                {/*        onCloseClick={() => setOpenModal('')}*/}
                {/*        position={{lat: selectedMarker.p[0].y, lng: selectedMarker.p[0].x}}*/}
                {/*        className="mb-[45px]"*/}
                {/*    >*/}
                {/*      <div>*/}
                {/*        <ColorButton onClick={openModal}>Заменить</ColorButton>*/}
                {/*        <ColorButton>Добавить</ColorButton>*/}
                {/*        <ColorButton>Изьять</ColorButton>*/}
                {/*      </div>*/}
                {/*    </InfoWindow>*/}
                {/*)}*/}
                {/*{isOpenModal && (*/}
                {/*  <div style={OVERLAY_STYLE}>*/}
                {/*    <div style={MODAL_STYLES}>*/}
                {/*      <ActionModal*/}
                {/*        openModal={openModal}*/}
                {/*        setOpenModal={() => setOpenModal(false)}*/}
                {/*      />*/}
                {/*    </div>*/}
                {/*  </div>*/}
                {/*)}*/}
            </GoogleMap>
        </LoadScript>
    );
};

export default React.memo(Map);