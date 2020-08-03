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
  form: {
    marginTop:0,
  },
  field: {
    display: "block",
    padding: "10px 0",
    fontSize: "18px",
    fontWeight: "600"

  },
  input: {
    minWidth:400,
    borderRadius:4,
    background:"#f4f6f8",
    border:"none",
    padding:'12px 24px',
    fontSize:'20px',
    boxShadow:'inset 0px 0px 2px rgba(0,0,0,.2)',
    fontFamily:'Source Sans Pro'
  },
  label: {
    display: "block",
    paddingBottom:8,
  },
  header: {
    display: 'block',
    width: '100%',
    textAlign: 'center',
    fontSize: '18px'
  },
  close: {
    position:"absolute",
    top:20,
    right:20,
  },
  submit: {
    width:"100%",
    paddingY:"",
    marginTop:20,
    fontSize:"16px"
  }

})



const RequestListing = props => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <h2>It's Free to Join Charlotte Therapists Before 2021</h2>
        <h3 style={{fontWeight:"500"}}>Are you a therapist in the Charlotte area? Submit this form to request to add your listing to this site.</h3>
      </div>

      <form className={classes.form}  onSubmit={e => props.handleSubmit(e)}>

        <label className={classes.field}>
          <span className={classes.label}>Your Name</span>
          <input className={classes.input} name="name" type="text" value={props.formFields.name} onChange={e => props.handleChange(e)}/>
        </label>

        <label className={classes.field}>
          <span className={classes.label}>Your Email Address</span>
          <input className={classes.input} name="email" type="text" value={props.formFields.email} onChange={e => props.handleChange(e)}/>
        </label>

        <Button size="large" className={classes.submit} color="primary" type="submit" variant="contained">Submit</Button>
      </form>
    </div>
  )
}

export default RequestListing
