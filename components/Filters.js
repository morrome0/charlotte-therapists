import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import SelectMultiple from './SelectMultiple'
import Button from '@material-ui/core/Button'
import SelectOptions from './SelectOptions'
import Filter from './Filter'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles(theme => ({
  root: {
    background:'#fff',
    padding:"0 15px 15px 180px",
    borderBottom: "1px solid #ddd",
    position:'relative',
  },
  filterIndicator: {
    position:"absolute",
    left:40,
  },
  filterIcon: {
    verticalAlign:"middle",
    color:"#777",
    fontSize:26,
    marginRight:10,
  },
  active: {
    color: theme.palette.primary.main,
  },
  clear: {
    color: theme.palette.error.main,
    borderRadius:20,
    padding:"2px 15px"
  }
}));

const anyActiveFilters = activeFilters => {
  for (let key in activeFilters) {
    if (activeFilters[key] != "") {
      return true
    }
  }
  return false
}


const Filters = props => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <span className={`${classes.filterIndicator} ${anyActiveFilters(props.activeFilters) && classes.active} `} style={{fontFamily:"Raleway", fontWeight:"bold",marginRight:20}}>
        <Icon className={`${classes.filterIcon} ${anyActiveFilters(props.activeFilters) && classes.active} `}>filter_list</Icon>
        {anyActiveFilters(props.activeFilters) ? "FILTERS ON" : "FILTERS OFF"}
      </span>
      <Filter activeFilter={props.activeFilters.clientTypes} options={props.catalogue.clientTypes} showOptions={props.showOptions} visible={(props.visibleOptions === "clientTypes")} filter="clientTypes" onChange={props.onChange} label="Client Type" type="radio"/>
      <Filter activeFilter={props.activeFilters.specialties} options={props.catalogue.specialties} showOptions={props.showOptions} visible={(props.visibleOptions === "specialties")} filter="specialties" onChange={props.onChange} label="Specialty" type="radio"/>
      { anyActiveFilters(props.activeFilters) && <Button size="small" onClick={props.clearFilters} className={classes.clear}>Clear All Filters <Icon style={{fontSize: 14, marginLeft: 8}}>close</Icon></Button>}

    </Box>
  )
}

export default Filters
