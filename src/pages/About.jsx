import React from 'react';

import Bubble from '../models/Bubble';

const About = ({ isOpen }) => {
  return (
    <section>
      <Bubble size={[10, 10]} position={[10, 10]}/>
    </section>
  )
}

export default About