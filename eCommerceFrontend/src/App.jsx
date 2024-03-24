import Home from './sites/Home'
import Products from './sites/Products'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
      </Routes>
    </Router>
  )
}

export default App
