import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    padding: 80,
    flexWrap: "wrap"

  },
  input: {
    display: "block",
    padding: "10px 0"

  },
  label: {
    display: "block",
  },
  header: {
    display: 'block',
    width: '100%',
    textAlign: 'center'
  },
  close: {
    position:"absolute",
    top:20,
    right:20,
  }

})



const RequestListing = props => {
  const classes = useStyles()
  const [state, setState] = useState({
    name: "",
    email: ""
  })

  const handleChange = e => {
    setState({...state,
    [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let url = process.env.API_BASE_URL + '/request-listing'
    let response =  fetch(url, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      'Token': process.env.API_TOKEN
      },
      body: JSON.stringify(state),
    })
  }

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <h2>Join Charlotte Therapists</h2>
        <h3>Are you a therapist in the Charlotte area? Submit this form to add your listing to this site. Listings are completely free for a limited time.</h3>

      </div>
      <form  onSubmit={e => handleSubmit(e)}>

        <label className={classes.input}>
          <span className={classes.label}>Your Name</span>
          <input name="name" type="text" value={state.name} onChange={e => handleChange(e)}/>
        </label>

        <label className={classes.input}>
          <span className={classes.label}>Your Email Address</span>
          <input name="email" type="text" value={state.email} onChange={e => handleChange(e)}/>
        </label>

        <Button color="primary" type="submit" variant="contained">Submit</Button>
      </form>
    </div>
  )
}

export default RequestListing
