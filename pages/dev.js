import { spacing, palette } from '@material-ui/system'
import Box from '@material-ui/core/Box'

const Dev = props => (
  <Box>
    <Box height={"50px"} bgcolor="grey.100"/>
    <Box height={"calc(100vh-50px)"} bgcolor="grey.300"/>
  </Box>
)

export default Dev
