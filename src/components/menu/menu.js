import React from 'react';
import './Menu.css'; // Buat file CSS untuk styling
import { IoLogoWhatsapp, IoLogoInstagram, IoBagHandleOutline, IoMapOutline, IoInformationCircleOutline, IoHomeOutline } from "react-icons/io5";
import { MdOutlineMailOutline, MdOutlineLabel } from "react-icons/md";
import { BsInboxes, BsEnvelopePaper } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
const Menu = ({ isOpen }) => {
   
   
   
    return (
        <div className={`menu-content ${isOpen ? 'open' : 'close'}`}>
            <div className="Product"><h1>Produk Kami</h1>
               <button><BsInboxes /><h4>Packaging</h4></button>
               <button><IoBagHandleOutline /><h4>Paperbag</h4></button>
               <button><MdOutlineLabel /><h4>Hantag, Label</h4></button>
               <button><IoMapOutline /><h4>Undangan</h4></button>
               <button><BsEnvelopePaper /><h4>Amplop</h4></button>
            </div>
            <div className="Media"><h1>Media Kami</h1>
               <a href="https://wa.me/6281217780249"target="_blank"rel="noopener noreferrer"><button><IoLogoWhatsapp />
               <h4>WhatsApp/Tlpn</h4></button></a>
               <a href="https://www.instagram.com/aszprinting?igsh
               =MXFiODZ6NG01N290aw==" 
               target="_blank"rel="noopener noreferrer"><button><IoLogoInstagram /><h4>Instagram</h4></button></a>
               <a href="https://www.facebook.com/profile.php?id=61560546776523" target="_blank" rel="noopener noreferrer"><button><AiOutlineFacebook /><h4>Facebook</h4></button></a>
               <a href="mailto:aszprinting21@gmail.com"><button>
               <MdOutlineMailOutline /><h4>Email</h4></button></a>
            </div>
         <div className="Info"><h1>Tentang kami</h1>
               <button><IoInformationCircleOutline /><h4>Informasi</h4></button>
               
            </div>
        </div>
    );
};

export default Menu;
