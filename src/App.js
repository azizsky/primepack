import React, {useState} from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { CiBoxes } from "react-icons/ci";
import { GiPapers, GiMagnifyingGlass} from "react-icons/gi";
import { TbZoomMoney } from "react-icons/tb";
import Menu from"./components/menu/menu.js";
import Home from"./components/page/home/Home";
import DusMakanan from"./components/page/dusmakanan/dusmakanan";

function App() {
   const [isOpen, setIsOpen] = useState(false);
   const tombolMenu = ()=> {
      setIsOpen(!isOpen);
   };
   
  return (
   
    <div className="App">
      <header className=" fixed flex bg-black text-white justify-between items-center p-1 flex">
       <img src="/image/logo/logo.jpg" className="logo"  />
       <button onClick={tombolMenu} className="btnside">
      {isOpen ? <IoCloseOutline /> : <IoMenuOutline />}</button>
      </header>
      <Menu isOpen={isOpen} />
      <Router>
         <Routes>
            <Route path="/" element={<div className="home"><Home /></div>} />
            <Route path="/DusMakanan" element={<DusMakanan />}/>
         </Routes>
      
      <footer>
         <div className="foter">
            <a href="#produk"><CiBoxes /><h5>Produk</h5></a>
            <a href="#bahan"><GiPapers /><h5>Bahan</h5></a>
            <a href="#laminasi"><GiMagnifyingGlass /><h5>info produk</h5></a>
            <a href="#calk"><TbZoomMoney /><h5>Harga</h5></a>
            <Link to="/orders">
            <MdOutlineShoppingCartCheckout /><h5>order</h5>
            </Link>
         </div>
      </footer>
      </Router>
      
    </div>
  );
}

export default App;
