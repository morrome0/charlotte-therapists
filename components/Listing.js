import React, { useState } from "react"
import { makeStyles } from '@material-ui/core/styles'
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import Icon from '@material-ui/core/Icon'
import Grid from '@material-ui/core/Grid'
import { CapitalizeAndJoinArray } from '../lib/utils'


const Listing = props => {
  const classes = useStyles()

  function handleClick() {
    props.setSelected(props.id)
    if (!props.showMidbar)props.setShowMidbar(true)
  }

  return (
    <Box my={1.5}>
      <ListItem className={classes.root} button selected={props.therapist.id == props.selected ? true : false } onClick={handleClick}>
        <div className={classes.imageContainer}>
          <CardMedia image={'/therapist-images/' + props.therapist.image} className={classes.listingImage} />
        </div>
        <ListItemText className={classes.contentContainer}>
          <Box py={1} >
            <Typography style={{fontSize:18}}>
              {props.therapist.first_name} {props.therapist.last_name}
            </Typography>
            <Typography variant="h4" className={classes.subtitle} color="textSecondary">
              {props.therapist.title}
            </Typography>
          </Box>

          <Box pl={1}>
            <Grid container>
              <Grid item xs={5}>
                <Typography variant="body2" style={{display:"inline-block"}} color="textSecondary">
                  <Icon style={{fontSize: 14, verticalAlign:"middle"}}>school</Icon> {props.therapist.licenses.join(', ')}
                </Typography>
              </Grid>
              <Grid item xs={7}>
                <Typography variant="body2" style={{display:"inline-block"}} color="textSecondary">
                  <Icon style={{fontSize: 14, verticalAlign:"middle"}}>group</Icon> {props.therapist.clientTypes.join(', ')}
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography variant="body2" style={{display:"inline-block"}} color="textSecondary">
                  <span style={{fontSize: 14, fontWeight: 800}}>$</span> {props.therapist.price} per Session
                </Typography>
              </Grid>
              <Grid item xs={7}>
                <Typography variant="body2" style={{display:"inline-block"}} color="textSecondary">
                  <Icon style={{fontSize: 14, verticalAlign:"middle"}}>work</Icon> {props.therapist.experience} years experience
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </ListItemText>
      </ListItem>
    </Box>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    overflow: 'hidden',
    background: "white",
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    borderRadius: 12,
  },
  selected: {
    background:'red',
  },
  subtitle: {
    margin: 0,
  },
  imageContainer: {
    [theme.breakpoints.only('xs')]: {
      width: 110,
      height:110,
      padding: 10,
    },
    width: 115,
    height: 115,
    padding:18,
    display:'inline-box',
    verticalAlign: 'top',
  },
  contentContainer: {
    width: 375,
    height: 110,
    display:'inline-box',
    verticalAlign: 'top',
    overflow:'hidden'
  },
  listingImage: {
    width: '100%',
    borderRadius:'50%',
  },
  chip: {
    position:'absolute',
    top:15,
    right:15,
  },

}));

export default Listing
