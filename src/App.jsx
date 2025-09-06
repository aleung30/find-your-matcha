import './App.css'
import { Navbar } from './components/Navbar'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from './components/Home'
import { Temporary } from './components/Temporary'
import { Locations } from './components/Locations'
import Wrapper from './components/Wrapper'
import { Review } from './components/Review'

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

            {/* temporary review page */}
            <Route path="/review" element={
              <Wrapper>
                <Navbar/>
                <Review/>
              </Wrapper>
            }>

            </Route>
            

            {/* matcha locations */}
            <Route path="/add" element={
              <Wrapper>
                <Navbar/>
                <Locations/>
              </Wrapper>
            }>

            </Route>

          </Routes>
        </div>
      </BrowserRouter>

    </>
  )
}

export default App
