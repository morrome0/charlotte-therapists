import { useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Listings from './Listings'
import Listing from './Listing'
import NavBar from './NavBar'
import Box from '@material-ui/core/Box'
import Map from './Map'
import Midbar from './Midbar'
import FiltersBar from './FiltersBar'
import Modal from './Modal'
import ModalContent from './ModalContent'
import { throttle } from 'lodash'
import BottomBar from './mobile/BottomBar'
import Subpage from './mobile/Subpage'


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

  // MOBILE
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    setMobile(window.innerWidth < 960)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', onWindowResize)
    return () => window.removeEventListener('resize', onWindowResize)
  })

  const onWindowResize = throttle(() => setMobile( window.innerWidth < 960 ), 200, { 'leading': true});

  // LISTINGS
  const [selected, setSelected] = useState(null)
  const [selectedTherapist, setSelectedTherapist] = useState(props.therapists[0])
  const [showMidbar, setShowMidbar] = useState(false)

  const getSelectedTherapist = () => {
    return props.therapists.find((therapist) => therapist.id == selected)
  }

  useEffect(() => {
    if (selected) setSelectedTherapist(getSelectedTherapist())
  }, [selected])

  // FILTERS
  const defaultFilters = {
    clientTypes: "",
    specialties: "",
    insurance: "",
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
      (filters.specialties ? therapist.specialties.includes(filters.specialties) : therapist) &&
      (filters.insurance ? therapist.insurance.includes(filters.insurance) : therapist)
    )
  })

  // MOBILE SUBPAGE
  const [subpage, setSubpage] = useState("")
  const [previousSubpage, setPreviousSubpage] = useState("")

  const showSubpage = (content) => {
    setPreviousSubpage(subpage)
    setSubpage(content)
  }

  const showPreviousSubpage = () => {
    setPreviousSubpage("")
    setSubpage(previousSubpage)
  }

  const closeSubpage = () => {
    setSubpage("")
  }

  // MODAL
  const [modal, setModal] = useState("")

  const showModal = (content) => {
    setModal(content)
  }

  const closeModal = () => {
    setModal("")
  }


  // REQUEST A LISTING STATE LOGIC
  const [formFields, setFormFields] = useState({
    name: "",
    email: ""
  })

  const changeFormFields = e => {
    setFormFields({...formFields,
    [e.target.name]: e.target.value
    })
  }

  const submitForm = async (e) => {
    e.preventDefault()
    setModal("loader")
    const url = process.env.API_BASE_URL + '/request-listing'
    const response = await fetch(url, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      'Token': process.env.API_TOKEN
      },
      body: JSON.stringify(formFields),
    })
    response.ok ? setModal("success") : setModal("fail")
  }

  if (mobile) {
    return (
      <div className={classes.root}>
        <NavBar showModal={showModal} />
        <Box className={classes.main}>
          <Listings therapists={therapists} selected= {selected} setSelected={setSelected}  showMidbar={showMidbar} setShowMidbar={setShowMidbar}/>
          <Midbar therapist={selectedTherapist} showMidbar={showMidbar} setShowMidbar={setShowMidbar}/>
        </Box>
        <BottomBar subpage={subpage} show={showSubpage}/>
        {subpage &&
        <Subpage back={showPreviousSubpage} show={showSubpage} content={subpage} onChange={changeFilters} activeFilters={filters} catalogue={props.catalogue} />
        }
      </div>
    )
  } else {
    return (
      <div className={classes.root}>
        <NavBar showModal={showModal} />
        <FiltersBar clearFilters={clearFilters} onChange={changeFilters} activeFilters={filters} catalogue={props.catalogue} />
        <Box className={classes.main}>
          <Listings therapists={therapists} selected= {selected} setSelected={setSelected}  showMidbar={showMidbar} setShowMidbar={setShowMidbar}/>
          <Midbar therapist={selectedTherapist} showMidbar={showMidbar} setShowMidbar={setShowMidbar}/>
          <Box style={{flexGrow: '1'}}><Map therapists={props.therapists} selected= {selected}/></Box>
        </Box>
        {modal &&
        <Modal closeModal={closeModal}>
          <ModalContent content={modal} formFields={formFields} handleChange={changeFormFields} handleSubmit={submitForm} />
        </Modal>
        }
      </div>
    )
  }


}

export default App
