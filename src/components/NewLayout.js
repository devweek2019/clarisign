import React from 'react';
import newLayoutCss from './newLayout.module.css'

const NewLayout = ({ children }) => {
  return (
    <div className={newLayoutCss.backdrop}>
      {children}
    </div>
  )
}

export default NewLayout