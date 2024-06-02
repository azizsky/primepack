import React, {useState} from "react";
import './App.css';
import { IoMenuOutline, IoCloseOutline, IoLogoWhatsapp } from "react-icons/io5";
import Menu from"./components/menu/menu.js";
import Home from"./components/page/home/Home";
function App() {
   const [isOpen, setIsOpen] = useState(false);
   const tombolMenu = ()=> {
      setIsOpen(!isOpen);
   };
   
  return (
    <div className="App">
      <header className=" w-full fixed flex bg-black text-white justify-between items-center p-1 flex">
       <img src="/image/logo/logo.jpg" className="h-12 w-12"  />
       <button onClick={tombolMenu} className="text-4xl cursor-pointer relative right-1">
      {isOpen ? <IoCloseOutline /> : <IoMenuOutline />}</button>
      </header>
      <Menu isOpen={isOpen} />
      <div className="homepage">
         <Home />
         
      </div>
      
      
    </div>
  );
}

export default App;
