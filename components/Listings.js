import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import Listing from "./Listing"

const useStyles = makeStyles({
  root: {
    width: "600px",
    background: 'white',
    overflow: 'auto',
    display: 'inline-block',
    maxHeight:'90vh', // TO-DO: Make this height dynamic based on header after component mounts
    padding:0,
  },
});


const ListingsContainer = props => {
  const classes = useStyles()

  return (
    <List className={classes.root}>
      {props.therapists.map(therapist => (
          <Listing key={therapist.id} id={therapist.id} name={therapist.name} surname={therapist.surname} image={therapist.image} selected= {props.selected} setSelected={props.setSelected}/>
      ))}
    </List>
  )
}



export default ListingsContainer
