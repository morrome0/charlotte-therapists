import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import SelectOptions from './SelectOptions'
import Filter from './Filter'
import FilterList from '@material-ui/icons/FilterList'
import IconButton from '@material-ui/core/IconButton'
import Close from '@material-ui/icons/Close'

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
  },
  close: {
    position:"absolute",
    top:20,
    right:20,
  }
}));

const FiltersBar = props => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.root}>
        <span className={`${classes.filterIndicator} ${props.filtersActive(props.filters) && classes.active} `} style={{fontFamily:"Raleway", fontWeight:"bold",marginRight:20}}>
          <FilterList className={`${classes.filterIcon} ${props.filtersActive(props.filters) && classes.active} `} />
          {props.filtersActive(props.filters) ? "FILTERS ON" : "FILTERS OFF"}
        </span>
        <Filter selected={props.filters.clientTypes} options={props.catalogue.clientTypes} filter="clientTypes" onChange={props.onChange} label="Client Type" type="radio"/>
        <Filter selected={props.filters.specialties} options={props.catalogue.specialties} filter="specialties" onChange={props.onChange} label="Specialty" type="radio"/>
        <Filter selected={props.filters.insurance} options={props.catalogue.insurance} filter="insurance" onChange={props.onChange} label="Insurance" type="radio"/>
        { props.filtersActive(props.filters) && <Button size="small" onClick={props.clearFilters} className={classes.clear}>Clear All Filters <Close style={{fontSize: 14, marginLeft: 8}} /></Button>}
      </div>
    </div>
  )
}

export default FiltersBar
