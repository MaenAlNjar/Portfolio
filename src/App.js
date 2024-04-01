import "./App.css";
import React from "react";
import Main from "./components/main";
import StarsCanvas from "./components/StarBackground.tsx";
import NavBar from "./components/navbar";
import Skills from "./components/Skills";
import Contact  from "./components/contact";
import Projects from "./components/Projects.jsx";
import Footer from "./components/footer";
//rafce
function App() {
  return (
    <main className=" h-full w-full ">
      <div className="felx flex-col gap-20">
        <NavBar />
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
