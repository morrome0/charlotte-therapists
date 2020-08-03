import { useState } from 'react'
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import SelectOptions from './SelectOptions'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import ExpandMore from '@material-ui/icons/ExpandMore'


const useStyles = makeStyles(theme => ({
  container: {
    display:"inline-block",
    position:"relative",
  },
  button: {
    marginRight:15,
    minWidth: 200,
    textAlign:"left",
    borderRadius:20,
    fontSize:13,
    padding:"2px 25px 2px",
    justifyContent:"normal",
  },
  expandIcon: {
    position: "absolute",
    right: 8,
  },
}));

const Filter = props => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box className={classes.container}>
      <Button
        className={classes.button}
        onClick={() => setOpen(!open)}
        size="small"
        color={props.activeFilter ? "primary" : "inherit"}
        variant={props.activeFilter ? "contained" : "text"}
      >
        { props.activeFilter ?
          `${props.label}: ${props.activeFilter}` :
          `Choose ${props.label}`
        }
        <ExpandMore className={classes.expandIcon} />
      </Button>

      {open &&
      <SelectOptions handleClose={handleClose} selected={props.activeFilter} options={props.options} filter={props.filter} onChange={props.onChange} type="radio"/>}
    </Box>
    )
}

export default Filter
