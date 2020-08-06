import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles(theme => ({
  root: {
  },
  selected: {
    color: "#4d8ac7",
  },
  label: {
    paddingLeft:20,
  }
}));

const Option = props => {
  const classes = useStyles()

  return (
    <label className={`${classes.root} ${props.checked && classes.selected}`} name={props.name}>
      <input checked={props.checked} type={props.type} value={props.value} name={props.name} />
      <span className={classes.label}>{props.children}</span>
    </label>
  )
}

export default Option
