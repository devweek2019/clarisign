import React from 'react'
import Landing from '../components/Landing'
import { Link } from 'gatsby'


// import Helmet from 'react-helmet'
const App = () => {
  return (
    <div>

      <Link to="/PreSignupPage/">
        <Landing />

      </Link>
    </div>
  )
}

export default App
