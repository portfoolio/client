import React from 'react';

import Header from 'modules/Home/Component/Header';
import About from 'modules/Home/Component/About';
import Service from 'modules/Home/Component/Service';
import Journey from 'modules/Home/Component/Journey';
import Project from 'modules/Home/Component/Project';
import Testimonial from 'modules/Home/Component/Testimonial';
import Blog from 'modules/Home/Component/Blog';

export default () => {
  return (
    <>
      <Header />

      <About />

      <Service />

      <Journey />

      <Project />

      <Testimonial />

      <Blog />
    </>
  );
};
