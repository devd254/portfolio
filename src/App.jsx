import React from "react"
import { Route, HashRouter as Router, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div>
     <main className="bg-slate-300/20">
        <Router forceRefresh>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>          
        </Router>
     </main>
    </div>
  )
}

export default App