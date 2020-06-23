import React, { useEffect } from "react"
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'
import Slide from '@material-ui/core/Slide'

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.only('xs')]: {
      position: 'absolute',
      width:'100%',
      boxShadow: 'none',
      zIndex:100,
    },
    height: '100%',
    position: 'relative',
    display: 'inline-block',
    width: '500px',
    background: '#fff',
    boxShadow: '0 0 14px rgba(0,0,0,0.25), 0 0 6px rgba(0,0,0,0.22)',
    zIndex:10,
    overflow: 'auto',
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
 image: {
   width: "100px",
   height: "100px"
 },
 topImage: {
   width: "100%",
   height: "200px",
   objectFit: "cover"
 },
}));

const Midbar = props => {
  const classes = useStyles()

  return (
      <Box px={4} className={props.showMidbar ? classes.root : classes.hide}>

        <Box display="flex" flexDirection="column" alignItems="center" pb={2}>
          <Box mt={4}>
            <Avatar src={'/therapist-images/' + props.therapist.image} className={classes.image}/>
          </Box>

          <Box fontSize="24px" mt={2}>
            <Typography variant="h2">{props.therapist.first_name} {props.therapist.last_name}</Typography>
          </Box>

          <Box color="textSecondary" pt={1}>
            <Typography variant="h4">{props.therapist.title}</Typography>
          </Box>

          <Box pt={2} >
            <Box display="inline-block" pr={1}>
              <Button href={"mailto:" + props.therapist.email} variant="contained" color="secondary">Email</Button>
            </Box>
            <Box display="inline-block">
              <Button href={props.therapist.website} target="_blank " variant="contained" color="secondary">Website</Button>
            </Box>
          </Box>
        </Box>

        <Box py={1.5}>
          <Box pb={1}>
            <Typography color="textSecondary" variant="h5">About</Typography>
          </Box>
          <Typography variant="body1">
            {props.therapist.about}
          </Typography>
        </Box>

        <Box py={1.5}>
          <Box pb={1}>
            <Typography color="textSecondary" variant="h5">Specialty Areas</Typography>
          </Box>
          <Typography variant="body1">
            {props.therapist.specialties.join(', ')}
          </Typography>
        </Box>

        <Box py={1.5}>
          <Box pb={1}>
            <Typography color="textSecondary" variant="h5">Treatment Approaches</Typography>
          </Box>
          <Typography variant="body1">
            {props.therapist.treatments.join(', ')}
          </Typography>
        </Box>

        <Box py={1.5}>
          <Box pb={1}>
            <Typography color="textSecondary" variant="h5">Payment</Typography>
          </Box>
          <Typography variant="body1">
            ${props.therapist.price} per Session
          </Typography>
        </Box>

        <Box py={1.5}>
          <Box pb={1}>
            <Typography color="textSecondary" variant="h5">Clients</Typography>
          </Box>
          <Typography variant="body1">
            {props.therapist.client_types.join(', ')}
          </Typography>
        </Box>
        <IconButton aria-label="close" className={classes.closeButton} onClick={() => props.setShowMidbar(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
  )
}

export default Midbar
