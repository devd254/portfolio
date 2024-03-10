import React from "react"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div>
     <main className="bg-slate-300/20">
        <Router>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home isOpen={true} />}/>
              <Route path="/about" element={<About isOpen={true}/>} />
              <Route path="/projects" element={<Projects isOpen={true}/>} />
              <Route path="/contact" element={<Contact isOpen={true}/>} />
            </Routes>          
        </Router>
     </main>
    </div>
  )
}

export default App