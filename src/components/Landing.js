import React from 'react'
import landingCss from './landing.module.css'

const Landing = () => {
  return (
    <div>

      <div className={landingCss.backdrop}>
        <img className={landingCss.image} src={require("../assets/clariSignLogo.png")} />
      </div>
    </div>
  )
}

export default Landing