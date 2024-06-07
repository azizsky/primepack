import React, {useState} from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { IoMenuOutline, IoCloseOutline,
IoLogoWhatsapp } from "react-icons/io5";
import { MdOutlineLocalPolice } from "react-icons/md";
import { GiPapers } from "react-icons/gi";
import Menu from"./components/menu/menu.js";
import Home from"./components/page/home/Home";
import DusMakanan from"./components/page/dusmakanan/dusmakanan.js";

function App() {
   const [isOpen, setIsOpen] = useState(false);
   const tombolMenu = ()=> {
      setIsOpen(!isOpen);
   };
   
  return (
   
    <div className="App">
      <header className=" fixed flex bg-black text-white justify-between items-center p-1 flex">
       <img src="/image/logo/logo.jpg" className="h-12 w-12"  />
       <button onClick={tombolMenu} className="text-4xl cursor-pointer relative right-1">
      {isOpen ? <IoCloseOutline /> : <IoMenuOutline />}</button>
      </header>
      <Menu isOpen={isOpen} />
      <Router>
         <Routes>
            <Route path="/" element={<div className="homepage"><Home /></div>} />
            <Route path="/DusMakanan" element={<DusMakanan />}/>
         </Routes>
      </Router>
      
      <footer>
         <div className="foter">
            <a href="#bahan"><GiPapers /><h5>Bahan</h5></a>
            <a href="#laminet"><GiPapers /><h5>Laminasi</h5></a>
            <a href="#foil"><GiPapers /><h5>Foil</h5></a>
            <a href="#cut"><GiPapers /><h5>Cutting</h5></a>
            <a href="#emboss"><MdOutlineLocalPolice /><h5>Emboss</h5></a>
            <a href="#deboss"><MdOutlineLocalPolice /><h5>Deboss</h5></a>
            <a href="#calk"><MdOutlineLocalPolice /><h5>Harga</h5></a>
         </div>
      </footer>
      
    </div>
  );
}

export default App;
