import React, { useEffect, useState } from "react";
import "./style.css"
import axios from 'axios'

import { Home, Explore, Login, Register, Create } from "./pages/exporter"
import { Navbar } from "./components/exporter"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { fontLoader } from "./utils/fontloader";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    fontLoader()    
  }, [])

  return (
    <div className="app-main">
      <Router basename={process.env.PUBLIC_URL}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="create" element={<Create />} />
          </Routes>
      </Router>
    </div>
  )
}

export default App