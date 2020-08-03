import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles({
  shade: {
    position: "absolute",
    height: '100%',
    width: '100%',
    zIndex:'1999',
    background:"rgba(0,0,0,.6)"
  },
  modal: {
    position: "absolute",
    height: '85%',
    width: '85%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: "white",
    zIndex:'2000',
    borderRadius:12,
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
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
    <Box className={classes.shade}>
      <Box className={classes.modal}>
        <IconButton aria-label="close" className={classes.close} onClick={props.closeModal}>
          <CloseIcon />
        </IconButton>
        {props.children}
      </Box>
    </Box>
  )
}

export default Modal
