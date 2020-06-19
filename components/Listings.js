import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Listing from "./Listing"

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      width: "500px",
    },
    width: "100vh",
    background: "#fff",
    overflow: 'auto',
    display: 'inline-block',
    padding:0,
    borderRight: "1px solid #ccc",
    zIndex:100
  },
}));


const ListingsContainer = props => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      {props.therapists.map(therapist => (
          <Listing key={therapist.id} id={therapist.id} therapist={therapist} selected= {props.selected} setSelected={props.setSelected} showMidbar={props.showMidbar} setShowMidbar={props.setShowMidbar}/>
      ))}
    </Box>
  )
}



export default ListingsContainer
