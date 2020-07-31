import { makeStyles } from '@material-ui/core/styles'
import Head from 'next/head'
import dummydata from '../database.json'
import App from '../components/App'
import fetch from 'isomorphic-unfetch'

const Home = props => {
  return (
    <div>
      <Head>
        <title>Charlotte Therapists</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>

      <App therapists={props.therapists} catalogue={props.catalogue}/>
    </div>
  )
}

if (process.env.NODE_ENV === "development") {
  Home.getInitialProps = async (ctx) => {
    const json = dummydata
    return {
      therapists: json.therapists,
      catalogue: json.catalogue,
    }
  }
} else {
  Home.getInitialProps = async (ctx) => {
    const res = await fetch(process.env.API_BASE_URL + '/therapists', { headers: { 'Token': process.env.API_TOKEN}})
    const json = await res.json()
    return {
      therapists: json.therapists,
      catalogue: json.catalogue,
    }
  }
}

export default Home
