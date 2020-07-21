import { useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Listings from './Listings'
import Listing from './Listing'
import NavBar from './NavBar'
import Box from '@material-ui/core/Box'
import Map from './Map'
import Midbar from './Midbar'
import Filters from './Filters'
import Modal from './Modal'
import RequestListing from './RequestListing'


const useStyles = makeStyles({
  root: {
    height:'100vh',
    display:'flex',
    flexDirection: 'column'
  },
  main: {
    display:"flex",
    height:'100%',
    overflow:"hidden"
  },
  mapbox: {
    flexgrow:1
  }
});

const App = props => {
  const classes = useStyles()

  // LISTING STATE LOGIC
  const [selected, setSelected] = useState(null)
  const [selectedTherapist, setSelectedTherapist] = useState(props.therapists[0])
  const [showMidbar, setShowMidbar] = useState(true)

  const getSelectedTherapist = () => {
    return props.therapists.find((therapist) => therapist.id == selected)
  }

  useEffect(() => {
    if (selected) setSelectedTherapist(getSelectedTherapist())
  }, [selected])

  // FILTER STATE LOGIC
  const defaultFilters = {
    clientTypes: "",
    specialties: "",
  }
  const [filters, setFilters] = useState(defaultFilters)
  const changeFilters = (filter, value) => {
    setFilters({
      ...filters,
      [filter]: value
    })
  }

  const clearFilters = () => {
    setFilters(defaultFilters)
  }

  const therapists = props.therapists.filter(function (therapist) {
    return (
      (filters.clientTypes ? therapist.clientTypes.includes(filters.clientTypes) : therapist) &&
      (filters.specialties ? therapist.specialties.includes(filters.specialties) : therapist)
    )
  })

  // REQUEST A LISTING STATE LOGIC
  const [showModal, setShowModal] = useState(false)
  const toggleModal = () => {
    setShowModal(!showModal)
  }


  return (
    <div className={classes.root}>
      <NavBar toggleModal={toggleModal} />
      <Filters clearFilters={clearFilters} onChange={changeFilters} activeFilters={filters} catalogue={props.catalogue}/>
      <Box className={classes.main}>
        <Listings therapists={therapists} selected= {selected} setSelected={setSelected}  showMidbar={showMidbar} setShowMidbar={setShowMidbar}/>
        <Midbar therapist={selectedTherapist} showMidbar={showMidbar} setShowMidbar={setShowMidbar}/>
        <Box display={{xs: 'none', sm:'block'}} style={{flexGrow: '1'}}><Map therapists={props.therapists} selected= {selected}/></Box>
      </Box>
      {showModal &&
      <Modal toggleModal={toggleModal}>
        <RequestListing />
      </Modal>
      }
    </div>
  )
}

export default App
