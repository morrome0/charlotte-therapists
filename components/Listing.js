import React, { useState } from "react"
import { makeStyles } from '@material-ui/core/styles'
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'

const useStyles = makeStyles({
  root: {
    overflow: 'hidden',
  },
  subtitle: {
    margin: 0,
    color:"#0000008a",
    fontSize:"14px",
    paddingBottom:14
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
    width: 380,
    height: 120,
    display:'inline-box',
    verticalAlign: 'top',
    overflow:'hidden'
  },
  image: {
    width: '100%',
    borderRadius:'50%',
  }

});


const Listing = (props) => {
  const classes = useStyles()

  return (
    <ListItem className={classes.root}>
      <div className={classes.imageContainer}>
        <CardMedia image={'/therapist-images/' + props.image} className={classes.image} />
      </div>
      <ListItemText className={classes.contentContainer}>
        <Typography  className={classes.title} variant="h5" component="h2">
          {props.name} {props.surname}
        </Typography>
        <Typography  className={classes.subtitle} color="textSecondary">
          Marriage Counselor
        </Typography>
        <Typography variant="body2" component="p">
          Do you want help with your life, your work or your relationships? Let’s collaborate to lighten the obstacles to your best life! I offer individual therapy, couples therapy, crisis intervention, pre-marital coaching, family therapy, trauma-informed therapy, personal coaching, and work-life balance coaching. I use best practices that evolve clinically following advances in the research.
        </Typography>
      </ListItemText>
    </ListItem>
  )
}

export default Listing
