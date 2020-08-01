import { render } from 'react-dom'
import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import './flipcard.css'

let degrees = 180;

function FlipCard() {
  const [flipped, set] = useState(false);
  const [degrees, setDegrees] = useState(180);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${degrees}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })
  console.log("Degrees : " + degrees);

  return (
    <div onClick={() => setDegrees(degrees => degrees+180)}>
      <a.div className="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
      <a.div className="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
    </div>
  )
}

export default FlipCard;
