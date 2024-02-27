import React from 'react';

import Bubble from '../models/Bubble';

const About = ({ isOpen }) => {
  return (
    <section className="prevent-scroll h-screen flex bg-gradient-to-b to-yellow-100 from-cyan-300">
      <Bubble />
    </section>
  )
}

export default About