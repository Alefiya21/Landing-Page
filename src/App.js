import "./App.css";
import { Route,Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage"
import Navbar from "./components/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact"

function App() {
  return (
    <div> 
      <Navbar/>
       <Routes>
       
       <Route path="/" element={<LandingPage/>} />
       <Route path="/About" element={<About/>} />
       <Route path="/contact" element={<Contact/>} />

       </Routes>

       
    </div>
  );
}

export default App;
