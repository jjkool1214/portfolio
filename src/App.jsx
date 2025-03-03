import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import NavBar from "./pages/NavBar.jsx";
import Intro from "./pages/Intro.jsx";
import Projects from "./pages/Projects.jsx";
import Resume from "./pages/Resume.jsx";

function App() {

  return (
    <div className={"bg-background fill-background h-[100%] "}>

        <BrowserRouter>
            <NavBar></NavBar>
            <Routes>
                <Route path="/" element={<Intro/>} />
                <Route path="/Projects" element={<Projects/>} />
                <Route path="/Resume" element={<Resume/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
