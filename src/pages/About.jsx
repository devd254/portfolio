import React from 'react';
import SmallBubble from '../models/SmallBubble';
import Bubble from '../models/Bubble';

const About = ({ isOpen }) => {
  const small_bubbles = [];
  for (let i = 0; i < 100; i += 40) {
      small_bubbles.push(<SmallBubble x_position={i} />);
  }
  return (
    <section className="prevent-scroll h-screen flex bg-gradient-to-b to-yellow-100 from-cyan-300">
      <Bubble />
      <tbody>{small_bubbles}</tbody>

    </section>
  )
}

export default About