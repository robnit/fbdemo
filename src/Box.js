import React from 'react'

export default function Box({ on }) {
    return (
      <div className={ `box ${on ? 'on' : 'off'}`}></div>
    )
}

