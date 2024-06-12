import React from 'react';
import {Link} from"react-router-dom"
import './Menu.css'; // Buat file CSS untuk styling
import { IoLogoWhatsapp, IoLogoInstagram, IoBagHandleOutline, IoInformationCircleOutline, IoHomeOutline } from "react-icons/io5";
import { MdOutlineMailOutline, MdOutlineLabel } from "react-icons/md";
import { BsInboxes, BsEnvelopePaper } from "react-icons/bs";
import { AiOutlineFacebook, AiOutlineAlibaba } from "react-icons/ai";
import { TbBrandShopee } from "react-icons/tb";


const Menu = ({ isOpen }) => {
   
   
   
    return (
        <div className={`menu-content ${isOpen ? 'open' : 'close'}`}>
            <div className="Product">
            <Link to="/"><button>
               <IoHomeOutline /><h4>Beranda</h4></button>
            </Link>
            <h1>Toko ecommerce Kami</h1>
               <a href="https://id.shp.ee/6qB9Gqh" target="_blank"rel="noopener noreferrer"><button><TbBrandShopee /><h4>Shopee</h4></button></a>
              <a href="https://tokopedia.link/Y6qFbQj7mKb" target="_blank"rel="noopener noreferrer"> <button><IoBagHandleOutline /><h4>TokoPedia</h4></button></a>
               <button><MdOutlineLabel /><h4>Lazada</h4></button>
               <button><AiOutlineAlibaba /><h4>alibaba</h4></button>
            </div>
            <div className="Media"><h1>Kontak/Media Kami</h1>
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
            <Link to="/TentangKami"><button>
               <IoInformationCircleOutline /><h4>Informasi Kami</h4></button>
            </Link>
         </div>
      </div>
    );
};

export default Menu;
