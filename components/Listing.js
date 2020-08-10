import React, { useState } from "react"
import { makeStyles } from '@material-ui/core/styles'
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import Group from '@material-ui/icons/Group'
import Grid from '@material-ui/core/Grid'
import InsuranceIcon from '@material-ui/icons/Payment'
import PinIcon from '@material-ui/icons/Room'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faNotesMedical } from '@fortawesome/free-solid-svg-icons'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'



const Listing = props => {
  const classes = useStyles()
  const therapist = props.therapist

  function handleClick() {
    props.setSelected(props.id)
    if (!props.showMidbar)props.setShowMidbar(true)
  }

  return (
      <ListItem className={classes.root} button selected={therapist.id === props.selected} onClick={handleClick}>
        <div className={classes.imageCropper}>
          <img src={'/therapist-images/' + therapist.image} className={classes.image} />
        </div>

        <div className={classes.content}>
          <h2 className={classes.name}>
            {therapist.first_name} {therapist.last_name}
          </h2>
          <h3 className={classes.title}>
            {therapist.title}
          </h3>
          <h4 className={classes.specialties}>
            {therapist.specialties.join(', ') + '...'}
          </h4>
          <div className={classes.bottomRow}>
            <span>
              <FontAwesomeIcon icon={faGraduationCap} className={classes.icon}/>
              {therapist.licenses.join(', ')}
            </span>
            <span>
              <FontAwesomeIcon icon={faNotesMedical} className={classes.icon}/>
              {therapist.insurance.length ? "Accepts some insurance" : "Does not accept insurance"}
            </span>
            {!props.mobile &&
            <span>
              <FontAwesomeIcon icon={faVideo} className={classes.icon}/>
              Video Sessions
            </span>
            }
          </div>
        </div>

        <span className={classes.neighborhood}>
          <FontAwesomeIcon icon={faMapPin} className={classes.icon}/>
          {therapist.neighborhood}
        </span>

      </ListItem>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    overflow: 'hidden',
    background: "white",
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    borderRadius: 6,
    margin: '10px 0px',
  },
  imageCropper: {
    display:'inline-block',
    width: 90,
    height: 90,
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '50%',
    marginRight:20,
    marginLeft:20,
  },
  image: {
    display: 'inline',
    margin: '0 auto',
    marginRight: '-25%',
    height: 'auto',
    width: '100%',
  },
  content: {
    display:'inline-block',
    overflow:'hidden'
  },
  name: {
    fontSize: 18,
    fontWeight:400,
    margin: 0,
    paddingTop:18,
    lineHeight:'16px',
  },
  title: {
    paddingTop:4,
    fontSize: 14,
    fontWeight:400,
    margin: 0,
    lineHeight:'16px',
    color:'#565656',
  },
  specialties: {
    paddingTop:10,
    fontSize: 13,
    fontWeight:600,
    margin: 0,
    lineHeight:'16px',
  },
  bottomRow: {
    paddingTop:12,
    paddingBottom:12,
    display:'block',
    lineHeight:'13px',
    fontSize:13,
    color:theme.palette.primary.main,
    '& span': {
      marginLeft:20,
    },
    '& span:first-child': {
      marginLeft:0,
    },
  },
  neighborhood: {
    position:'absolute',
    top:15,
    right:30,
    color:theme.palette.primary.main,
    fontSize:13,
  },
  icon: {
    position:'relative',
    marginRight:10,
    fontSize:13,
  },

  // Mobile Styles
  [theme.breakpoints.down('sm')]: {
    root: {
      padding:8,
      margin: '10px 0px',
    },
    imageCropper: {
      marginRight: 20,
      marginLeft:0,
    },
    name: {
      fontSize: 17,
    },
    title: {
      fontSize: 13,
    },
    specialties: {
      fontSize: 12,
    },
    bottomRow: {
      fontSize: 12,
    },
    neighborhood: {
      fontSize: 12,
    },
  },

}));

export default Listing
