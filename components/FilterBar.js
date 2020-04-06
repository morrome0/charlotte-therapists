import React from "react"
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/ToolBar'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    display:"flex"

  },
  item: {
    margin: "0 10px"
  }
});

const FilterBar = props => {
  const classes = useStyles()

  return (
    <AppBar position="static">
      <Toolbar className={classes.root}>
        <h3 className={classes.item}>Filters</h3>
        <Button className={classes.item} variant="contained" color="secondary">
          Specialty
        </Button>
        <Button className={classes.item} variant="contained" color="secondary">
          Distance
        </Button>
        <Button className={classes.item} variant="contained" color="secondary">
          Price
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default FilterBar
