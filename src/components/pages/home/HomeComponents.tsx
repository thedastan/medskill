import React from "react";
import Hero from "./hero/Hero";
import Services from "./services/Services";
import Contact from "./contact/Contact";
import ServicesNew from "../services-new/ServicesNew";

const HomeComponents = () => {
  return (
    <section>
      <Hero />
      <Services />
      <ServicesNew/>
      <Contact />
    </section>
  );
};

export default HomeComponents;
