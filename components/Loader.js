import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline'
import HighlightOff from '@material-ui/icons/HighlightOff'

const useStyles = makeStyles(theme => ({
  root: {
    position:"absolute",
    top: "50%",
    left: "50%",
    transform:"translate(-50%,-50%)",
    textAlign: "center",
  },
  message: {
    paddingTop:20,
    fontWeight:"600",
    fontSize:"22px",
  },
  success: {
    color: theme.palette.success.main,
  },
  failed: {
    color: theme.palette.error.main,
  }
}))

const Loader = props => {
  const classes = useStyles()

  let icon
  let message
  if (props.status == 'loading') {
    icon = <CircularProgress size={props.size} />
    message = 'Request submitting...'
  } else if (props.status == 'success') {
    icon = <CheckCircleOutline className={classes.success} style={{fontSize: props.size}}/>
    message = 'Your request was submitted!'
  } else if (props.status == 'failed') {
      icon = <HighlightOff className={classes.failed} style={{fontSize: props.size}}/>
      message = 'Your request failed to submit.'
  } else {
    icon = '?'
    message = 'No loading status given to Loader component'
  }


  return (
    <div className={classes.root}>
      {icon}
      <p className={classes.message}>{message}</p>
    </div>
  )
}

export default Loader
