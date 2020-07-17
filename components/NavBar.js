import React from "react"
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.only('xs')]: {

    },
    textAlign: "center",
    background: "white",
  },
}));


const NavBar = props => {
  const classes = useStyles()

  return (
    <Box  className={classes.root} px={4} pt={2.5} style={{height:"80px", position:"relative", zIndex:1000}}>
        <img height={30} src="/charlotte-therapists-green.png" />
        <Box display={{xs: 'none', sm: 'block'}} style={{position:"absolute",top:20,right:20}}><Button href="mailto:miller.morrow@gmail.com?subject=I%20am%20a%20Charlotte%20Therapist" color="secondary">I'm a Charlotte Therapist</Button></Box>
    </Box>
  )
}

export default NavBar

// , boxShadow: '0 0 14px rgba(0,0,0,0.25), 0 0 6px rgba(0,0,0,0.22)'
