import React from "react"
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const NavBar = () => {
  return (
    <Box color="primary" px={4} py={1.5} style={{height:"60px", position:"relative", zIndex:1000, boxShadow: '0 0 14px rgba(0,0,0,0.25), 0 0 6px rgba(0,0,0,0.22)'}}>
        <img height={40} src="/charlotte-therapists-green.png" />
        <Button href="mailto:miller.morrow@gmail.com?subject=I%20am%20a%20Charlotte%20Therapist" variant="outlined" color="secondary" style={{display:"inline-block", float:"right"}}>I'm a Charlotte Therapist</Button>
    </Box>
  )
}

export default NavBar
