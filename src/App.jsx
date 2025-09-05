import './App.css'
import { Navbar } from './components/Navbar'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from './components/Home'

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
              </>
            }>
            </Route>

            {/* login */}
            <Route>
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
            </Route>

          </Routes>
        </div>
      </BrowserRouter>

    </>
  )
}

export default App
