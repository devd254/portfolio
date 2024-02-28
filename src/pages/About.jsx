import React from 'react';
import SmallBubble from '../models/SmallBubble';
import Bubble from '../models/Bubble';

const About = ({ isOpen }) => {
  const small_bubbles1 = [];
  const small_bubbles2 = [];
  const small_bubbles3 = [];
  const small_bubbles4 = [];
  const small_bubbles5 = [];
  let delay = 0.2;
  for (let i = 0; i <= 1000; i += 200) {
      small_bubbles1.push(<SmallBubble x_position={i} delay={delay} />);
  }
  delay += 0.1;
  for (let i = 100; i <= 1100; i += 200) {
      small_bubbles2.push(<SmallBubble x_position={i} delay={delay} />);
  }
  delay += 0.1;
  for (let i = 0; i <= 1000; i += 200) {
      small_bubbles3.push(<SmallBubble x_position={i} delay={delay} />);
  }
  delay += 0.1;
  for (let i = 100; i <= 1100; i += 200) {
      small_bubbles4.push(<SmallBubble x_position={i} delay={delay} />);
  }
  delay += 0.1;
  for (let i = 0; i <= 1000; i += 200) {
      small_bubbles5.push(<SmallBubble x_position={i} delay={delay} />);
  }
  // Random variables: amplitude(side to side), speed rise, size bubble
  return (
    <section className="prevent-scroll h-screen flex bg-gradient-to-b to-yellow-100 from-cyan-300">
      <Bubble />
      {small_bubbles1}
      {small_bubbles2}
      {small_bubbles3}
      {small_bubbles4}
      {small_bubbles5}
    </section>
  )
}

export default About