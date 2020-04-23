import React, { useEffect } from "react"
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles({
  root: {
    position: 'relative',
    display: 'inline-block',
    height: '100vh',
    width: '500px',
    background: "white"
  },
  hide: {
    display: "none",
  },
  closeButton: {
   position: 'absolute',
   right: 5,
   top: 5,
   color: "grey",
 },
 imageContainer: {
   display: "inline-block",
   verticalAlign: "bottom"
 },
 image: {
   width: "100px",
   height: "100px"
 },
});

const Midbar = props => {
  const classes = useStyles()

  return (
    <Box className={props.showMidbar ? classes.root : classes.hide}>
      <Box mt={3} mx={3} display="flex" flexDirection="column" alignItems="center">

            <Box className={classes.imageContainer} m={3}>
              <Avatar src={'/therapist-images/' + props.therapist.image} className={classes.image}/>
            </Box>

            <Box>

              <Box textAlign="center" fontSize="24px">
                {props.therapist.name} {props.therapist.surname}
              </Box>

              <Box color="textSecondary" textAlign="center">
                Couples therapist
              </Box>
            </Box>


            <Box textAlign="center" mt={3}>
              Do you want help with your life, your work or your relationships? Let’s collaborate to lighten the obstacles to your best life!
            </Box>

            <Box mt={3}>
              <Button variant="contained" color="secondary">
                Schedule a Conversation
              </Button>
            </Box>

            <Box textAlign="center" mt={3} color="primary">
                Experience: 30 Years
            </Box>

            <Box textAlign="center" mt={3} color="primary">
                Price: $180 per 1 hour session
            </Box>

            <Box textAlign="center" mt={3} color="primary">
                Education: MSW, LCSW
            </Box>

            <Box textAlign="center" mt={3} color="primary">
                Methodology: Emotionally Focused Therapy
            </Box>

            <Box textAlign="center" mt={3} color="primary">
                Specialization: Depression, Anxiety, Marriage
            </Box>

            <IconButton aria-label="close" className={classes.closeButton} onClick={() => props.setShowMidbar(false)}>
              <CloseIcon />
            </IconButton>

      </Box>
    </Box>
  )

}

export default Midbar
