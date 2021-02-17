import React from "react"

// Import Google Map component
import GoogleMapComponentWithMarker from "./GoogleMapWithMarker"

// Some default styles
const styles = {
  width: "100%",
  height: "100%",
}

const MapWrapper = () => {
  return (
    <div style={styles}>
      <GoogleMapComponentWithMarker
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_DIABLE_AU_CADRAN_GOOGLE_MAPS_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  )
}

export default MapWrapper
