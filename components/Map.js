import React from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'


const mapStyles = {
  width: 'calc(100vw - 600px)',
  height: '90vh',
};

const containerStyle = {
  width: '100%',
  height: '100%',
  position: 'relative',
}

const MapInstance = props => {
  return (
    <Map
      google={props.google}
      zoom={12}
      style={mapStyles}
      containerStyle={containerStyle}
      initialCenter={{ lat: 35.2271, lng: -80.8431}}
    />
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDIMJcfY-RZqWOinuyarRlKXw1R_PPUg34'
})(MapInstance);

//To-Do Secure API Key
