import './App.css'
import { Navbar, Footer } from './page/Layout'
import { Home } from './page/Home'
import { Products } from './page/Products'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return(
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )  
}

export default App


