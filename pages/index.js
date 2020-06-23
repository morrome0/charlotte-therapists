import { useState, useEffect } from "react"
import { makeStyles } from '@material-ui/core/styles'
import Head from 'next/head'
import getTherapists from "../data"
import Listings from '../components/Listings'
import Listing from '../components/Listing'
import NavBar from '../components/NavBar'
import Box from '@material-ui/core/Box'
import Map from '../components/Map'
import Midbar from '../components/Midbar'
import fetch from 'isomorphic-unfetch'


const useStyles = makeStyles({
  main: {
    display:"flex",
    height:"calc(100vh - 60px)",
    overflowY:"hidden"
  },
  mapbox: {
    flexgrow:1
  }
});

const Home = props => {
  const classes = useStyles()
  const [selected, setSelected] = useState(null)
  const [selectedTherapist, setSelectedTherapist] = useState(props.therapists[0])
  const [showMidbar, setShowMidbar] = useState(true)

  const getSelectedTherapist = () => {
    return props.therapists.find((therapist) => therapist.id == selected)
  }


  useEffect(() => {
    if (selected) setSelectedTherapist(getSelectedTherapist())

    return () => {

    }
  }, [selected])

  return (
    <div className={classes.root}>
      <Head>
        <title>Charlotte Therapists</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        // TO-DO move font loading to server side using custom _document.js
      </Head>

      <NavBar />

      <Box className={classes.main}>
        <Listings therapists={props.therapists} selected= {selected} setSelected={setSelected}  showMidbar={showMidbar} setShowMidbar={setShowMidbar}/>
        <Midbar therapist={selectedTherapist} showMidbar={showMidbar} setShowMidbar={setShowMidbar}/>
        <Box display={{xs: 'none', sm:'block'}} style={{flexGrow: '1'}}><Map therapists={props.therapists} selected= {selected}/></Box>
      </Box>


    </div>
  )
}

Home.getInitialProps = async function() {
  const res = await fetch('http://charlotte-therapists-api.herokuapp.com/api/v1/therapists')
  const therapists = await res.json()
  console.log(therapists)
  return {
    therapists: therapists
  }
}

export default Home
