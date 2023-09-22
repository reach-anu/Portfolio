import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About"
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Project from "./Components/Project";
import { Routes, Route } from 'react-router-dom';
import {useState} from 'react'
function App() {
  const[loading,setloading]=useState(true);
  const preloader=document.getElementById('preloader');
  if(preloader){
    setTimeout(()=>{
      preloader.style.display="none";
      setloading(false);
    },2000)
  }
  return (
    !loading && (
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={
      <>
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
      </>
      } />
      <Route path="/Resume" element={<Resume />} />
      </Routes>
      <Footer />
    </div>
    )
  );
}

export default App;
