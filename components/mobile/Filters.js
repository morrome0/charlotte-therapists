import { makeStyles } from '@material-ui/core/styles'
import Filter from './Filter'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

const useStyles = makeStyles(theme => ({
  root: {
  },
  header: {
    fontSize: 30,
    paddingTop:20,
  },
  row: {
    height: 80,
    borderBottom: "1px solid #ddd",
    fontSize: 20,
    lineHeight:"80px"
  },
  label: {
    verticalAlign: 'middle',
  },
  chevronRightIcon : {
    float:'right',
    verticalAlign: 'middle',
    marginTop:24,
    fontSize:40,

  }
}))

const Filters = props => {
const classes = useStyles()


  return (
    <div className={classes.root}>
      <h2 className={classes.header}>Filters</h2>
      <div className={classes.row} onClick={() => props.show('clientTypeFilter')}>
        <div>
          <span className={classes.label}>
            { props.filters.clientTypes ?
              `Client Type: ${props.filters.clientTypes}` :
              `Client Type`
            }
          </span>
          <ChevronRightIcon  className={classes.chevronRightIcon } />
        </div>
      </div>
      <div className={classes.row} onClick={() => props.show('specialtyFilter')}>
        <div>
          <span className={classes.label}>
            { props.filters.specialties ?
              `Specialties: ${props.filters.specialties}` :
              `Specialties`
            }
          </span>
          <ChevronRightIcon  className={classes.chevronRightIcon } />
        </div>
      </div>
      <div className={classes.row} onClick={() => props.show('insuranceFilter')}>
        <span className={classes.label}>
          { props.filters.insurance ?
            `Insurance: ${props.filters.insurance}` :
            `Insurance`
          }
        </span>
        <ChevronRightIcon  className={classes.chevronRightIcon } />
      </div>
    </div>
  )
}

export default Filters
