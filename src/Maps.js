import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import mapStyles from "./mapStyles";

function Map() {
  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 28.6448, lng: 77.216721 }}
      defaultOptions={{ styles: mapStyles }}
    />
  );
}
const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function Maps() {
  return (
    <div style={{ width: "100%", height: "75vh" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
