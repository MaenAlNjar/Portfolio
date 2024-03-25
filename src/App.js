import "./App.css";
import React from "react";
import Main from "./components/main";
import StarsCanvas from "./components/StarBackground.tsx";
import Navbar from "./components/navbar";
import Skills from "./components/Skills";
import Contact  from "./components/contact";
import Projects from "./components/Projects";
import Footer from "./components/footer";

function App() {
  return (
    <main className=" h-full w-full ">
      <div className="felx flex-col gap-20">
        <Navbar />
        <StarsCanvas />
        <Main  /> 
        <Skills />
        <Projects />
        <Contact />
        <Footer  />
      </div>
    </main>
  );
}

export default App;
