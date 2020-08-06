import React from "react"
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Weekend from '@material-ui/icons/Weekend'


const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      borderBottom: "1px solid #ddd",

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
        <Weekend className={classes.logoIcon} /><h1 className={classes.logo}>Charlotte Therapists</h1>
        <Box display={{xs: 'none', md: 'block'}} style={{position:"absolute",top:23,right:20}}><Button onClick={() => props.showModal("listingRequest")} color="secondary">I'm a Charlotte Therapist</Button></Box>
    </Box>
  )
}

export default NavBar
