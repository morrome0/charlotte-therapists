import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography'
import Listing from "./Listing"


const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('md')]: {
      width: "600px",
    },
    width: "100%",
    background: "#F6F9FC",
    display: 'inline-block',
    zIndex:100,
    borderRight:"1px solid #ddd",
    overflow: 'scroll',
    position: 'relative',
  },
  listingsContainer: {
    [theme.breakpoints.down('sm')]: {
      padding: 5,
    },
    padding:'0 15px',
  }
}));

const Listings = props => {
  const classes = useStyles()



  return (
      <Box className={classes.root}>
        <Container className={classes.listingsContainer}>
          {props.therapists.map(therapist => (
              <Listing key={therapist.id} id={therapist.id} therapist={therapist} selected= {props.selected} mobile={props.mobile} setSelected={props.setSelected} showMidbar={props.showMidbar} setShowMidbar={props.setShowMidbar}/>
          ))}
        </Container>
      </Box>
  )
}


export default Listings
