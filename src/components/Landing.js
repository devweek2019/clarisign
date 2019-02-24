import React from 'react'
import landingCss from './landing.module.css'
import NewLayout from './NewLayout'

const Landing = () => {
  return (
    <NewLayout>
      <img alt="illustration" className={landingCss.image} src={require("../assets/clariSignLogo.png")} />
    </NewLayout>
  )
}

export default Landing