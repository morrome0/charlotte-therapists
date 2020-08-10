import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import FilterIcon from '@material-ui/icons/FilterList'

const useStyles = makeStyles(theme => ({
  root: {
    display:'block',
    position:'fixed',
    bottom:0,
    background:'white',
    zIndex:101,
    textAlign:'center',
    width:'100%',
    left: "50%",
    transform:"translate(-50%,0)",
    padding:'10px 0',
    border: "1px solid #ddd",
  },
  filterIndicator: {
    fontFamily:"Raleway",
    fontWeight:"bold",
    marginRight:20,
    color:"#777"
  },
  filterIcon: {
    color:"#777",
    fontSize:24,
    marginRight:10,
    verticalAlign:"top"
  },
  active: {
    color: theme.palette.primary.main,
  },
}));


const FiltersBar = props => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.root}>
        <Button onClick={() => props.show("filters")} size="large" >
          <span className={`${classes.filterIndicator} ${props.filtersActive() && classes.active} `}>
            <FilterIcon className={`${classes.filterIcon} ${props.filtersActive() && classes.active} `} />
            {props.filtersActive() ? "FILTERS ON" : "FILTERS OFF"}
          </span>
        </Button>
      </div>
    </div>
  )
}

export default FiltersBar
