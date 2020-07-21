import React from "react"
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon'


const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.only('xs')]: {

    },
    textAlign: "center",
    background: "white",
  },
  logo: {
    fontFamily: theme.fontFamily.primary,
    color: theme.palette.primary.main,
    display: "inline-block",
    verticalAlign: "middle",
    fontSize: 24,
    fontWeight:"600"
  },
  logoIcon: {
    fontSize: 36,
    display:"inline-block",
    color: theme.palette.primary.main,
    verticalAlign: "middle",
    marginRight:8,
  }
}));


const NavBar = props => {
  const classes = useStyles()

  return (
    <Box className={classes.root} px={4} pt={1} style={{height:"80px", position:"relative", zIndex:1000}}>
        <Icon className={classes.logoIcon}>weekend</Icon><h1 className={classes.logo}>Charlotte Therapists</h1>
        <Box display={{xs: 'none', sm: 'block'}} style={{position:"absolute",top:23,right:20}}><Button onClick={props.toggleModal} color="secondary">I'm a Charlotte Therapist</Button></Box>
    </Box>
  )
}

export default NavBar
