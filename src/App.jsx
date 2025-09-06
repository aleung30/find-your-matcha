import './App.css'
import { Navbar } from './components/Navbar'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from './components/Home'

import { Temporary } from './components/Temporary'

function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
            {/* home page */}
            <Route path="/" element={
              <>
                <Navbar/>
                <Home/>
                <Temporary/>
              </>
            }>
            </Route>

            {/* login */}
            
            <Route path="/login" element={
                <>
                  <Login/>
                </>
              }>

            </Route>

            {/* register */}
            <Route path="/register" element={
                <>
                  <Register/>
                </>
            }>

            </Route>
              
         
            

          </Routes>
        </div>
      </BrowserRouter>

    </>
  )
}

export default App
