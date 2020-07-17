import { useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Listings from '../components/Listings'
import Listing from '../components/Listing'
import NavBar from '../components/NavBar'
import Box from '@material-ui/core/Box'
import Map from '../components/Map'
import Midbar from '../components/Midbar'
import Filters from './Filters'


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

  const [selected, setSelected] = useState(null)
  const [selectedTherapist, setSelectedTherapist] = useState(props.therapists[0])
  const [showMidbar, setShowMidbar] = useState(true)

  const getSelectedTherapist = () => {
    return props.therapists.find((therapist) => therapist.id == selected)
  }

  useEffect(() => {
    if (selected) setSelectedTherapist(getSelectedTherapist())
  }, [selected])

  const defaultFilters = {
    clientTypes: "",
    specialties: "",
  }
  const [filters, setFilters] = useState(defaultFilters)
  const [visibleOptions, setVisibleOptions] = useState("")

  const changeFilters = (filter, value) => {
    setFilters({
      ...filters,
      [filter]: value
    })
  }

  const therapists = props.therapists.filter(function (therapist) {
    return (
      (filters.clientTypes ? therapist.clientTypes.includes(filters.clientTypes) : therapist) &&
      (filters.specialties ? therapist.specialties.includes(filters.specialties) : therapist)
    )
  })

  const showOptions = filter => {
    setVisibleOptions(filter)
  }

  const hideOptions = filter => {
    setVisibleOptions("")
  }

  const clearFilters = () => {
    setFilters(defaultFilters)
  }

  return (
    <div className={classes.root}>
      <NavBar />
      <Filters clearFilters={clearFilters} onChange={changeFilters} activeFilters={filters} catalogue={props.catalogue} visibleOptions={visibleOptions} showOptions={showOptions}/>
      <Box className={classes.main}>
        <Listings therapists={therapists} selected= {selected} setSelected={setSelected}  showMidbar={showMidbar} setShowMidbar={setShowMidbar}/>
        <Midbar therapist={selectedTherapist} showMidbar={showMidbar} setShowMidbar={setShowMidbar}/>
        <Box display={{xs: 'none', sm:'block'}} style={{flexGrow: '1'}}><Map therapists={props.therapists} selected= {selected}/></Box>
      </Box>
    </div>
  )
}

export default App
