import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home/Home'
import Todos from './pages/Todos/Todos'

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/todos">Todos</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

function About () {
  return <h2>About</h2>
}

export default App
