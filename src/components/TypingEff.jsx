import React from 'react'
import '../styles/TypeEff.css'
import { TypeAnimation } from 'react-type-animation';
function TypingEff() {
  return (
    <div className='effBox'>
      <TypeAnimation
    sequence={[
        'CEC-UiPath Student Community',
        1000
    ]}
    wrapper="span"
    typeSpeed={30}
    backSpeed={50}
    repeat={Infinity}
/>
    </div>
  )
}

export default TypingEff
