import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import Card from "@material-ui/core/Card"
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


const Listing = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.pos}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Dilworth
        </Typography>
        <Typography variant="h5" component="h2">
          Henry Jones
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Marriage Counselor
        </Typography>
        <Typography variant="body2" component="p">
          Do you want help with your life, your work or your relationships? Let’s collaborate to lighten the obstacles to your best life! I offer individual therapy, couples therapy, crisis intervention, pre-marital coaching, family therapy, trauma-informed therapy, personal coaching, and work-life balance coaching. I use best practices that evolve clinically following advances in the research.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}

export default Listing
