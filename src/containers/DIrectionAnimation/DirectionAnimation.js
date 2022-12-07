/*global google*/
import React, {useState} from 'react';
import {DirectionsRenderer, GoogleMap, LoadScript, Marker} from "@react-google-maps/api";
import {blue} from "../../colors";


const container = {
    width: "100%",
    height: "80vh",
}

const center = {
    lat: 42.880961762656284,
    lng: 74.58320606499385
}

const finalDestination = {
    lat:  42.87068360633118,
    lng:  74.59861736349127
}


const destination3 = {
    lat:  42.87878425886898,
    lng:  74.58840296427789
}

const DirectionAnimation = () => {
    const [markers, setMarkers] = useState({
        lat: 42.880961762656284,
        lng: 74.58320606499385
    });

    const [directions, setDirections] = useState()


    const [waypoints, setWaypoints] = useState([destination3])



    const changeLocation = () => {

        //
        // setMarkers({
        //     lat: 42.88498708920502,
        //     lng: 74.59977132207237
        // })
    }
    //


    // const fetchDirections =  (async() => {
    //     if (!markers) return;
    //     const service = new google.maps.DirectionsService();
    //    await service.route({
    //             origin: markers,
    //             destination:finalDestination ,
    //             travelMode: google.maps.TravelMode.DRIVING,
    //         },
    //         (result, status) => {
    //             if (status === "OK" && result) {
    //                 setDirections(result)
    //             }
    //         }
    //     )
    // })


    // const fetchDirections2 =  (async() => {
    //     if (!markers) return;
    //     const service = new google.maps.DirectionsService();
    //     await service.route({
    //             origin: markers,
    //             destination:destination3 ,
    //             travelMode: google.maps.TravelMode.DRIVING,
    //         },
    //         (result, status) => {
    //             if (status === "OK" && result) {
    //                 setDirections(result)
    //             }
    //         }
    //     )
    // })





    const fetchDirections3 = (async () => {
        if (!markers) return;
        const service = new google.maps.DirectionsService();
        await service.route({
                origin: markers,
                destination: waypoints[0],
                travelMode: google.maps.TravelMode.DRIVING,
                waypoints: [
                    {
                        location: new google.maps.LatLng(42.87878425886898, 74.58840296427789)
                    },
                    {
                        location: new google.maps.LatLng(42.87635564999695, 74.59340796644798)
                    }
                ]
            },
            (result, status) => {
                if (status === "OK" && result) {
                    setDirections(result)
                }
            }
        )
    })



    //
    // setTimeout(fetchDirections, 3000);
    setTimeout(fetchDirections3, 5000);


    return (
        <div>
            <LoadScript
                googleMapsApiKey="AIzaSyD8VJHZ2vIQNxAZZ1hf0vKnEa3KjmXM1Pg"
            >
                <GoogleMap
                    mapContainerStyle={container}
                    center={center}
                    zoom={14}
                >

                    {directions &&
                        <DirectionsRenderer
                            directions={directions}
                            options={{
                                polylineOptions: {
                                    zIndex: 50,
                                    strokeColor: blue,
                                    strokeWeight: 5,

                                }
                            }}
                        />
                    }

                    { /* Child components, such as markers, info windows, etc. */}
                    <Marker
                        position={markers}
                        animation={1}
                    />}
                    <></>
                </GoogleMap>
            </LoadScript>

        </div>
    );
};

export default DirectionAnimation;