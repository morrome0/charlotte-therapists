import Head from 'next/head'
import getTherapists from "../data"
import NavBar from '../components/NavBar'
import FilterBar from '../components/FilterBar'
import ListingsContainer from '../components/ListingsContainer'
import Listing from '../components/Listing'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'

const Home = props => (
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
    <FilterBar />
    <Container>
      <ListingsContainer>
        {props.therapists.map(therapist => (
            <div>
              <Listing name={therapist.name} surname={therapist.surname} image={therapist.image} />
              <Divider />
            </div>
        ))}
      </ListingsContainer>
    </Container>
    <footer>
    </footer>
  </div>
)

Home.getInitialProps = async function() {
  let therapists = getTherapists()

  return {
    therapists: therapists
  }
}

export default Home
