import React, { useState } from "react"
import { makeStyles } from '@material-ui/core/styles'
import Card from "@material-ui/core/Card"
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'

const useStyles = makeStyles({
  root: {

  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginTop: 12,
  },
  imageContainer: {
    width: 120,
    height: 120,
    display:'inline-box',
    verticalAlign: 'top',
  },
  contentContainer: {
    width: 568,
    height: 120,
    display:'inline-box',
    verticalAlign: 'top',
  },
  image: {
    width: '100%',
  }

});


const Listing = (props) => {
  const classes = useStyles()
  console.log(props.image)

  return (
    <Card className={classes.pos}>
      <div className={classes.imageContainer}>
        <CardMedia image={'/therapist-images/' + props.image} className={classes.image} />
      </div>
      <div className={classes.contentContainer}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Dilworth
          </Typography>
          <Typography variant="h5" component="h2">
            {props.name} {props.surname}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Marriage Counselor
          </Typography>
          <Typography variant="body2" component="p">
            Do you want help with your life, your work or your relationships? Let’s collaborate to lighten the obstacles to your best life! I offer individual therapy, couples therapy, crisis intervention, pre-marital coaching, family therapy, trauma-informed therapy, personal coaching, and work-life balance coaching. I use best practices that evolve clinically following advances in the research.
          </Typography>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </CardContent>
      </div>
    </Card>
  )
}

export default Listing
