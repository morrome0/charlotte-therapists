import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles({
  modal: {
    position: "absolute",
    height: '100%',
    width: '100%',
    background: "white",
    zIndex:'2000',

  },
  close: {
    position:"absolute",
    top:20,
    right:20,
  }

})

const Modal = props => {
  const classes = useStyles()

  return (
    <Box className={classes.modal}>
      <IconButton aria-label="close" className={classes.close} onClick={props.toggleModal}>
        <CloseIcon />
      </IconButton>
      {props.children}
    </Box>
  )
}

export default Modal
