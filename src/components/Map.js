import React  from 'react';

import {useLoadScript , GoogleMap} from '@react-google-maps/api';

const libraries =["places"]
const mapContainerStyle= {
    width : "100%",
    height : "100%",
    position : "relative",
}

const center ={
    lat :-23.598801 ,
    lng: -46.636769
}

export function MapContainer(){
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey : process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries
    })

    if(loadError) return  "Error Loading Maps.";
    if(!isLoaded) return  "Loading Maps.";

    return(
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={8}
            center={center}
        ></GoogleMap>
    )

}