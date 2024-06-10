import React from "react";
import "./catalog.css";
import {Link} from"react-router-dom";


const Categori = () => {
   
   
   
   return (
      
      <div className="container w-full select-none">
      <h1 className=" p-2 m-2 font-bold items-center w-full select-none bg-cyan-950 sm:h-7 md:h-10 xl:h-16">Pilih Categori Produk</h1>
         <Link to="/DusMakanan">
            <div className="Dusmakanan">
            <img src="/image/content/amplop.jpg"/>
            Dus Makanan
            </div>
         </Link>  
         <Link to="/DusMakanan">
            <div className="Dusmakanan">
            <img src="/image/content/amplop.jpg"/>
            Dus Kosmetic
            </div>
         </Link>  
         <Link to="/DusMakanan">
            <div className="Dusmakanan">
            <img src="/image/content/amplop.jpg"/>
            Dus Peralatan
            </div>
         </Link>  
         <Link to="/DusMakanan">
            <div className="Dusmakanan">
            <img src="/image/content/amplop.jpg"/>
            Hantag
            </div>
         </Link>  
         <Link to="/DusMakanan">
            <div className="Dusmakanan">
            <img src="/image/content/amplop.jpg"/>
            PaperBag
            </div>
         </Link>  
         <Link to="/DusMakanan">
            <div className="Dusmakanan">
            <img src="/image/content/amplop.jpg"/>
            Amplop
            </div>
         </Link>  
         <Link to="/DusMakanan">
            <div className="Dusmakanan">
            <img src="/image/content/amplop.jpg"/>
            brosur & Map
            </div>
         </Link>  
         <Link to="/DusMakanan">
            <div className="Dusmakanan">
            <img src="/image/content/amplop.jpg"/>
             Undangan
            </div>
         </Link>  
         <Link to="/DusMakanan">
            <div className="Dusmakanan">
            <img src="/image/content/amplop.jpg"/>
             Nota & Quetansi
            </div>
         </Link>
         <Link to="/DusMakanan">
            <div className="Dusmakanan">
            <img src="/image/content/amplop.jpg"/>
             Paket Clothing
            </div>
         </Link>  
         <Link to="/DusMakanan">
            <div className="Dusmakanan">
            <img src="/image/content/amplop.jpg"/>
             Paket Fried Chiken
            </div>
         </Link>  
      </div>
      
      );
      
};

export default Categori;