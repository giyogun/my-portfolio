import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { About, Footer, Header, Projects, Skills, Testimonial} from "./container"

import "./App.scss";

const App = () => {
  return <div className="app">
    <Navbar />
    <Header />
    <About />
    <Projects />
    <Skills />
    <Testimonial />
    <Footer />
  </div>;
};

export default App;
