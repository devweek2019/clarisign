import React from 'react'
import Landing from '../components/Landing'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
const App = () => {
  return (
    <div>

      <Link to="/main/">
        <Landing />
        {/* <Helmet >
          <script src="https://cdn.jsdelivr.net/npm/signature_pad@2.3.2/dist/signature_pad.min.js"></script>
          <div id="canvas"></div>
        </Helmet> */}
      </Link>
    </div>
  )
}

export default App
