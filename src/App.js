import React, {useState} from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { IoMenuOutline, IoCloseOutline, IoLogoWhatsapp} from "react-icons/io5";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { IoBagHandleOutline } from "react-icons/io5";
import { CiBoxes } from "react-icons/ci";
import { TbZoomMoney, TbBrandShopee } from "react-icons/tb";
import Menu from"./components/menu/menu.js";
import Home from"./components/page/home/Home";

import Tentang from"./components/texs/tentangkami";
import Dusmakanan from"./components/Produk/dusmakanan"





function App() {
   const [isOpen, setIsOpen] = useState(false);
   const tombolMenu = ()=> {
      setIsOpen(!isOpen);
   };
   
  return (
   
    <div className="App">
      <header className=" fixed flex text-white justify-between items-center p-1 flex">
       <img src="/image/logo/logo.jpg" className="logo" alt="whatsaap" />
       <button onClick={tombolMenu} className="btnside">
      {isOpen ? <IoCloseOutline /> : <IoMenuOutline />}</button>
      </header>
      <Router>
      <Menu isOpen={isOpen} />
         <Routes>
            <Route path="/" element={<div className="home"><Home /></div>} />
            <Route path="/DusMakanan" element={<Dusmakanan />}/>
            <Route path="/TentangKami" element={<Tentang />}/>
         </Routes>
   
      
      
      
      <footer>
         <div className="foter">
            <Link to="/"><CiBoxes /><h5>Produk</h5></Link>
            <a href="#calk"><TbZoomMoney /><h5>Harga</h5></a>
            <a href="https://wa.me/6281217780249"target="_blank"rel="noopener noreferrer"><IoLogoWhatsapp /><h5>whatsapp</h5></a>
               <a href="https://id.shp.ee/6qB9Gqh" target="_blank"rel="noopener noreferrer"><TbBrandShopee /><h5>Shopee</h5></a>
              <a href="https://tokopedia.link/Y6qFbQj7mKb" target="_blank"rel="noopener noreferrer"><IoBagHandleOutline /><h5>TokoPedia</h5></a>
         </div>
      </footer>
      </Router>
      
    </div>
  );
}

export default App;
