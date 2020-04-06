import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'

const useStyles = makeStyles({
  root: {
    width: "500px",
    background: 'white',
    overflow: 'auto',
    maxHeight:'84vh', // TO-DO: Make this height dynamic based on header after component mounts
  },
});


const ListingsContainer = props => {
  const classes = useStyles()

  return (
    <List className={classes.root}>
      {props.children}
    </List>
  )
}



export default ListingsContainer
