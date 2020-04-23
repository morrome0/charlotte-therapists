import React, { useEffect, useRef, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    flexGrow:1,
  },
});

const Map = props => {
  const classes = useStyles()
  const [ map, setMap ] = useState({})
  const [ markers, setMarkers ] = useState([])
  const mapRef = useRef(null)

  const initMap = () => {
    const map = new google.maps.Map(mapRef.current, {
      center: { lat: 35.2271, lng: -80.8431 },
      zoom: 12
    });
    setMap(map)

    const markers = []
    props.therapists.forEach((therapist) => {
      if (therapist.location) {
        let marker = new google.maps.Marker({position: therapist.location , map: map})
        markers.push({"id": therapist.id, "object": marker})
      }
    })
    setMarkers(markers)
  }

  useEffect(() => {
    initMap()
    return () => {
    }
  }, [])


  const changeSelectedMarker = () => {
    markers.forEach((marker) => marker.object.setAnimation(null))
    if (props.therapists.find((therapist) => therapist.id == props.selected).location) {
      markers.find((marker) => marker.id == props.selected).object.setAnimation(google.maps.Animation.BOUNCE)
    }
  }

  useEffect(() => {
    if (props.selected) changeSelectedMarker()
    return () => {
    }
  }, [props.selected])

  return (
    <div ref={mapRef} className={classes.root}></div>
  )
}

export default Map
