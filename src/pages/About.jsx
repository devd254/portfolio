import React from 'react';

import Bubble from '../models/Bubble';

const About = ({ isOpen }) => {
  return (
    <section className="prevent-scroll h-screen flex bg-gradient-to-b to-yellow-100 from-cyan-300">
      <Bubble size={[80, 80]} position={[10, 10]}/>
    </section>
  )
}

export default About