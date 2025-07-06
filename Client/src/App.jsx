import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/Landing-page.jsx";
import Dashboard from "./Pages/Dashboard-page.jsx";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </>
  )
}

export default App
