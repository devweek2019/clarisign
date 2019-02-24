import React from 'react'
import NewLayout from '../components/NewLayout'
import newLayoutCss from '../components/newLayout.module.css'
import themeCss from '../assets/sharedCss/theme.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'

// library.add(fas);
const PreSignupPage = () => {
  return (
    <NewLayout>
      <div>
        <img alt="illustration" className={newLayoutCss.image} src={require('../assets/illustration.png')}>
        </img>
        <div style={{ color: 'white' }}>Let's get you signed up!</div>
        <h7 style={{ color: 'white' }}> Fill up your basic information</h7>
        <span>

          <FontAwesomeIcon style={{ color: '5cb85c' }} icon={faCheckSquare} size='2x' />
        </span>
        <br></br>
        <Link to='/main' >
          <button style={{ maxWidth: 'calc(.80 * window.width)', width: 'calc(.533*100vw)' }} className={themeCss.btnSuccess} disabled>
            Next
        </button>
        </Link>
      </div>
    </NewLayout >
  )
}

export default PreSignupPage