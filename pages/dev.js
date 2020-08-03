import { spacing, palette } from '@material-ui/system'
import Box from '@material-ui/core/Box'

const Dev = props => {

  async function hello() {
    console.log("hello")
  }

  function sayHelloThenBye() {
    hello().then(console.log("bye"))
  }

  return (
    <Box>
      <button onClick={sayHelloThenBye}>Say Hello</button>
    </Box>
  )
}

export default Dev
