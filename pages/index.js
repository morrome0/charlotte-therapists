import React, { useState } from "react"
import Head from 'next/head'
import getTherapists from "../data"
import NavBar from '../components/NavBar'
import Listings from '../components/Listings'
import Listing from '../components/Listing'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Map from '../components/Map'



const Home = props => {
  const [selected, setSelected] = useState(null)

  return (
    <div>
      <CssBaseline />
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        // TO-DO move font loading to server side using custom _document.js
      </Head>
      <NavBar />
      <Listings therapists={props.therapists} selected= {selected} setSelected={setSelected}/>
      <Map therapists={props.therapists} selected= {selected}/>
      <footer>
      </footer>
    </div>
  )
}

Home.getInitialProps = async function() {
  let therapists = getTherapists()

  return {
    therapists: therapists
  }
}

export default Home
