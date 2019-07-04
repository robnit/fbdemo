import React from 'react'

export default function Box({ on }) {
    return (
      <div className={ `border box ${on ? 'on' : 'off'}`}></div>
    )
}

