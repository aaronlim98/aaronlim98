import React from "react";
import { Helmet } from "react-helmet";
import favicon from '../images/favicon.ico';

import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Experiences from "../components/Experiences";
import Education from "../components/Education";
import Contact from "../components/Contact";

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Aaron Lim</title>
        <link rel="icon" href={favicon}/>
      </Helmet>

      <Hero/>
      <Skills/>
      <Experiences/>
      <Education/>
      <Contact/>
    </>
  )
}

export default IndexPage;
