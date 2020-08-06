import { makeStyles } from '@material-ui/core/styles'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Option from './Option'

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

const FilterMobile = props => {
const classes = useStyles()

  return (
    <div className={classes.root}>
      <h2 className={classes.header}>Filter by {props.label}</h2>
      <form onChange={(e) => props.onChange(props.filter, e.target.value)} className={classes.selectOptions}>
        {props.options.map((option, i) => (
          <div className={classes.row}>
            <Option className={classes.label} key={i} id={i} checked={props.selected === option} value={option} name={props.filter} type={props.type}>{option}</Option>
          </div>
        ))}
      </form>
    </div>
  )
}

export default FilterMobile

// <form onChange={(e) => handleChange(e)} className={classes.selectOptions}>
//   {props.options.map((option, i) => (
//     <div className={classes.row}>
//       <Option key={i} id={i} checked={props.selected === option} value={option} name={props.filter} type={props.type}>{option}</Option>
//     </div>
//   ))}
// </form>
