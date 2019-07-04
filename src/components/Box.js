import React from 'react'

export default function Box({ on, onClick }) {
  return (
    <div className={ `border box ${on ? 'on' : 'off'}`} onClick={ onClick }></div>
  )
}

