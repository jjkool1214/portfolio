import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import NavBar from "./pages/NavBar.jsx";
import Intro from "./pages/Intro.jsx";
import Projects from "./pages/Projects.jsx";

function App() {

  return (
    <>

        <BrowserRouter>
            <NavBar></NavBar>
            <Routes>
                <Route path="/" element={<Intro/>} />
                <Route path="/Projects" element={<Projects/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
