import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography'
import Filters from '../components/Filters'
import Listing from "./Listing"


const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      width: "600px",
    },
    width: "100%",
    background: "#F6F9FC",
    display: 'inline-block',
    zIndex:100,
    boxShadow: '1px 4px 6px -1px rgba(0, 0, 0, 0.1), 1px 2px 4px -1px rgba(0, 0, 0, 0.06)',
    overflow: 'scroll',
    position: 'relative',
  },
  listingsContainer: {

  }
}));

const Listings = props => {
  const classes = useStyles()



  return (
      <Box className={classes.root}>
        <Container className={classes.listingsContainer}>
          {props.therapists.map(therapist => (
              <Listing key={therapist.id} id={therapist.id} therapist={therapist} selected= {props.selected} setSelected={props.setSelected} showMidbar={props.showMidbar} setShowMidbar={props.setShowMidbar}/>
          ))}
        </Container>
      </Box>
  )
}


export default Listings
