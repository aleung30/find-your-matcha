import './App.css'
import { Navbar } from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom"

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
            </Route>

          </Routes>
        </div>
      </BrowserRouter>

    </>
  )
}

export default App
