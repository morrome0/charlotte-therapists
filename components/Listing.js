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


const Listing = props => {
  const classes = useStyles()

  function handleClick() {
    props.setSelected(props.id)
    if (!props.showMidbar)props.setShowMidbar(true)
  }

  return (
    <div>
      <ListItem className={classes.root} button selected={props.therapist.id == props.selected ? true : false } onClick={handleClick}>
        <div className={classes.imageContainer}>
          <CardMedia image={'/therapist-images/' + props.therapist.image} className={classes.listingImage} />
        </div>
        <ListItemText className={classes.contentContainer}>
          <Box py={1} >
            <Typography style={{fontSize:18}}>
              {props.therapist.name} {props.therapist.surname}
            </Typography>
            <Typography variant="h4" className={classes.subtitle} color="textSecondary">
              {props.therapist.title}
            </Typography>
          </Box>

          <Box pl={1}>
            <Grid container>
              <Grid item xs={5}>
                <Typography variant="body2" style={{display:"inline-block"}} color="textSecondary">
                  <Icon style={{fontSize: 14, verticalAlign:"middle"}}>school</Icon> {props.therapist.credentials}
                </Typography>
              </Grid>
              <Grid item xs={7}>
                <Typography variant="body2" style={{display:"inline-block"}} color="textSecondary">
                  <Icon style={{fontSize: 14, verticalAlign:"middle"}}>group</Icon> {props.therapist.clients}
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography variant="body2" style={{display:"inline-block"}} color="textSecondary">
                  <span style={{fontSize: 14, fontWeight: 800}}>$</span> {props.therapist.payment}
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
      <Divider />
    </div>
  )
}

const useStyles = makeStyles({
  root: {
    overflow: 'hidden',
  },
  selected: {
    background:'red',
  },
  subtitle: {
    margin: 0,
  },
  imageContainer: {
    width: 125,
    height: 125,
    padding:18,
    display:'inline-box',
    verticalAlign: 'top',
  },
  contentContainer: {
    width: 375,
    height: 120,
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

});

export default Listing
