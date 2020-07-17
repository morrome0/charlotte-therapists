

const SelectMultiple = props => {
  return (
    <select
      multiple
      onChange={(e) => props.onChange(
        props.filter,
        [...event.target.options].filter(o => o.selected).map(o => o.value)
    )}>
      {props.options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  )
}

export default SelectMultiple
