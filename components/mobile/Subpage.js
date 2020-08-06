import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import SubpageContent from './SubpageContent'

const useStyles = makeStyles(theme => ({
  root: {
    background: 'white',
    zIndex:1002,
    position:'fixed',
    height:'100%',
    width:'100%',
    bottom:0,
    border: "1px solid #ddd",
    padding: 50,
  },
  back: {
    fontSize: 18,
  },
  arrowBackIcon: {
    verticalAlign:'middle',
    marginRight:12,
  },
}))


const Subpage = props => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.back} onClick={props.back}>
        <ArrowBackIcon className={classes.arrowBackIcon} />
        <span>Back</span>
      </div>
      <SubpageContent content={props.content} show={props.show} onChange={props.onChange} activeFilters={props.activeFilters} catalogue={props.catalogue}/>
    </div>
  )
}

export default Subpage
