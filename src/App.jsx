import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home.jsx";
import { NavBar } from "./components/NavBar.jsx";
import About from "./Pages/About.jsx";
import "flowbite";
import Category from "./Pages/Category.jsx";
import { Polices } from "./Pages/page/Polices.jsx";
import Pompier from "./Pages/page/Pompier.jsx";
import Medical from "./Pages/page/Medical.jsx";
import Avocat from "./Pages/page/Avocat.jsx";
import Ambulance from "./Pages/page/Ambulance.jsx";
import Hospital from "./Pages/page/Hospital.jsx";
import Gendarmerie from "./Pages/page/Gendarmerie.jsx";
import Brigade from "./Pages/page/Brigade.jsx";
import Nurse from "./Pages/page/Nurse.jsx";
import Veto from "./Pages/page/Veto.jsx";
import Footer from "./components/Footer.jsx";


function App() {

  return <>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/Category/*" element={<Category />} />
        <Route path="/category/police" element={<Polices />} />
        <Route path="/category/pompier" element={<Pompier />} />
        <Route path="/category/medical" element={<Medical />} />
        <Route path="/category/avocat" element={<Avocat />} />
        <Route path="/category/ambulance" element={<Ambulance />} />
        <Route path="/category/hospital" element={<Hospital />} />
        <Route path="/category/gendarmerie" element={<Gendarmerie />} />
        <Route path="/category/brigade" element={<Brigade />} />
        <Route path="/category/nurse" element={<Nurse />} />
        <Route path="/category/veterinaire" element={<Veto />} />
      </Routes>
      <Footer />
    </Router>

  </>;
}

export default App;
