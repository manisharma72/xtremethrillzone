import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Activities from "./components/Activities";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CallNowButton from "./components/CallNowButton";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Activities />
      <Contact />
       <Footer />
        <CallNowButton />
    </>
  );
}

export default App;
