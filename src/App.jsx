import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Contact from "./Components/Pages/Contact";
import Detail from "./Components/Pages/Detail";
import Favs from "./Components/Pages/Favs";
import NavBar from "./Components/Utils/NavBar";
import Footer from "./Components/Utils/Footer";
import { GlobalContext } from "./Context/Context";
import { useContext, useEffect } from "react";


function App() {

  const {state} = useContext(GlobalContext)

  return (
    <div id={!state.darkMode ? "light" : "dark"}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dentist/:id" element={<Detail />} />
        <Route path="/favs" element={<Favs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
