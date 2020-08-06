import { useState, useEffect } from 'react'
import { spacing, palette } from '@material-ui/system'
import Box from '@material-ui/core/Box'


let eventCount = 0

const Dev = props => {
  const [mobile, setMobile] = useState(false)

  const onWindowResize = throttle(() => setMobile( window.innerWidth < 480 ), 200, { 'leading': true});

  useEffect(() => {
    setMobile(window.innerWidth < 480)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', onWindowResize)
    return () => window.removeEventListener('resize', onWindowResize)
  })

  return mobile ? <p>I'm Mobile</p> : <p>{ "I'm not mobile" }</p>
}

export default Dev
