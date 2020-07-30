import React from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'
import './card.css'

const calc = (x, y) => [-(y - window.innerHeight/2 ) / 20, (x - window.innerWidth / 2) / 20, 1.04]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


const Card = (props) => {

  console.log("Check Props");
  console.log(props);
  const [opt, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

  const custom = {
      image: `${props.image.url}`
  }
  
  return (
      <div>
        <animated.div
        className="card"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: opt.xys.interpolate(trans), backgroundImage: `url(${props.image})` }} >
        </animated.div>
     </div>
  )
}

export default Card;