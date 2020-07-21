export const Capitalize = string => {
  return string[0].toUpperCase() + string.slice(1)
}

export const CapitalizeAndJoinArray = array => {
  let newArray = array.map(string => {
    return Capitalize(string)
  })
  return newArray.join(", ")
}
