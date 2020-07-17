import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles(theme => ({
  option: {
    width: "100%",
    padding:15,
    cursor: "pointer",
    display:"block",
    "&:hover":{
      background: theme.palette.primary.light,
    },
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
    <label className={`${classes.option} ${props.checked && classes.selected}`} name={props.name}>
      <input checked={props.checked} type={props.type} value={props.value} name={props.name} />
      <span className={classes.label}>{props.children}</span>
    </label>
  )
}

export default Option
