import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    padding: 80,
    flexWrap: "wrap"

  },
  input: {
    display: "block",
    padding: "10px 0"

  },
  label: {
    display: "block",
  },
  header: {
    display: 'block',
    width: '100%',
    textAlign: 'center'
  },
  close: {
    position:"absolute",
    top:20,
    right:20,
  }

})

const RequestListing = props => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <h2>Join Charlotte Therapists</h2>
        <h3>Are you a therapist in the Charlotte area? Submit this form to add your listing to this site. Listings are completely free for a limited time.</h3>

      </div>
      <form>

        <label className={classes.input}>
          <span className={classes.label}>First Name</span>
          <input type="text" />
        </label>

        <label className={classes.input}>
          <span className={classes.label}>Last Name</span>
          <input type="text" />
        </label>

        <label className={classes.input}>
          <span className={classes.label}>Email Address</span>
          <input type="text" />
        </label>

        <Button color="primary" type="submit" variant="contained">Submit</Button>
      </form>
    </div>
  )
}

export default RequestListing
