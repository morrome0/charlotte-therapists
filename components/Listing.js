import React, { useState } from "react"
import { makeStyles } from '@material-ui/core/styles'
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'
import Chip from '@material-ui/core/Chip'
import Divider from '@material-ui/core/Divider'




const Listing = props => {
  const classes = useStyles()

  return (
    <div>
      <ListItem className={classes.root} button selected={props.id == props.selected ? true : false} onClick={() => props.setSelected(props.id)}>
        <div className={classes.imageContainer}>
          <CardMedia image={'/therapist-images/' + props.image} className={classes.listingImage} />
        </div>
        <ListItemText className={classes.contentContainer}>
          <Typography  className={classes.subtitle} color="textSecondary">
            Individual Therapy, Couples Therapy
          </Typography>
          <Typography  className={classes.title} variant="h5" component="h2">
            {props.name} {props.surname}
          </Typography>
          <Typography  className={classes.subtitle} color="textSecondary">
            MSW, LCSW
          </Typography>
          <Typography variant="body2" component="p">
            Do you want help with your life, your work or your relationships? Let’s collaborate to lighten the obstacles to your best life! I offer individual therapy, couples therapy, crisis intervention, pre-marital coaching, family therapy, trauma-informed therapy, personal coaching, and work-life balance coaching. I use best practices that evolve clinically following advances in the research.
          </Typography>
        </ListItemText>
        <Chip label="Verified" className={classes.chip} color="secondary"/>
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
    color:"#0000008a",
    fontSize:"14px",
    paddingBottom:8
  },
  title: {
    fontSize:"16px"
  },
  imageContainer: {
    width: 120,
    height: 120,
    padding:18,
    display:'inline-box',
    verticalAlign: 'top',
  },
  contentContainer: {
    width: 480,
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
  }

});

export default Listing
