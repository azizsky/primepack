import React, {useState} from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { IoMenuOutline, IoCloseOutline, IoLogoWhatsapp} from "react-icons/io5";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { IoBagHandleOutline } from "react-icons/io5";
import { CiBoxes, CiCalculator2 } from "react-icons/ci";
import { TbBrandShopee } from "react-icons/tb";
import Menu from"./components/menu/menu.js";
import Home from"./components/page/home/Home";

import Tentang from"./components/texs/tentangkami";
import Dusmakanan from"./components/Produk/dusmakanan";
import Duscosmetic from"./components/Produk/duskosmetic";
import Dusperalatan from"./components/Produk/dusperalatan";
import Hantag from"./components/Produk/hantag";
import Paperbag from"./components/Produk/paperbag";





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
            <Route path="/DusKosmetic" element={<Duscosmetic />}/>
            <Route path="/DusPeralatan" element={<Dusperalatan />}/>
            <Route path="/HantagLabel" element={<Hantag />}/>
            <Route path="/PaperBag" element={<Paperbag />}/>
            <Route path="/TentangKami" element={<Tentang />}/>
         </Routes>
   
      
      
      
      <footer>
         <div className="foter">
            <Link to="/"><CiBoxes /><h5>Produk</h5></Link>
            <a href="https://wa.me/6281217780249"target="_blank"rel="noopener noreferrer"><IoLogoWhatsapp /><h5>whatsapp</h5></a>
               <a href="#"><CiCalculator2 /><h5>Harga</h5></a>
              <a href="#informasiorder"> <IoBagHandleOutline /><h5>TokoPedia</h5></a>
         </div>
      </footer>
      </Router>
      
    </div>
  );
}

export default App;
