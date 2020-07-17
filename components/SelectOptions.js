import { useState, useEffect, useRef } from 'react'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Option from './Option'

const useStyles = makeStyles(theme => ({
  selectOptions: {
    minWidth: 200,
    background:'#fff',
    borderRadius:4,
    border: "1px solid #ddd",
    boxShadow: '0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.15)',
    position:'absolute',
    top:32,
    zIndex:1000,
    fontFamily:'raleway',
    fontSize:13,
    fontWeight:'500'
  },
}));


const Select = props => {
  const classes = useStyles()
  const node = useRef()

  useEffect(() => {
    document.addEventListener("mousedown", handleClick)

    return () => {
      document.removeEventListener("mousedown", handleClick)
    }
  }, [])

  const handleClick = e => {
    if (node.current.contains(e.target)) {
    return;
    }
    props.handleClose()
  }

  const handleChange = e => {
    props.onChange(props.filter, e.target.value)
    props.handleClose()
  }

  return (
    <form onChange={(e) => handleChange(e)} ref={node} className={classes.selectOptions}>
      {props.options.map((option, i) => (
        <Option key={i} id={i} checked={props.selected === option} value={option} name={props.filter} type={props.type}>{option}</Option>
      ))}
    </form>
  )
}

export default Select
