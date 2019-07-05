import React from 'react';

export default function Box({ on, onClick }) {
  return (
    <div className={ `box ${on ? 'on' : 'off'}`} onClick={ onClick }></div>
  );
}

