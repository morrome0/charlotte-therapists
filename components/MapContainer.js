import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Map from '../components/Map'

const useStyles = makeStyles({
  root: {
    display: 'inline-block',
    height: '90vh',
    width: 'calc(100vw - 600px)'
  }
})

const MapContainer = props => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Map />
    </div>
  )
}

export default MapContainer
