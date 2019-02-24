import React from 'react'
import ReactDOM from 'react-dom'
import Landing from '../components/Landing'
import { Link } from 'gatsby'

const App = () => {
  return (
    <div>

      <Link to="/main/">
        {/* <div> */}
        <Landing />
        {/* </div> */}
      </Link>
    </div>
  )
}

export default App
