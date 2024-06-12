import React from "react";
import "./catalog.css";
import {Link} from"react-router-dom";


const Categori = () => {
   
   
   
   return (
      
      <div className="container w-full select-none">
      <h1 className=" p-2 m-2 font-bold items-center w-full select-none bg-cyan-950">Pilih Categori Produk</h1>
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
            Hantag/Label
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
             Paket Clothing
            </div>
         </Link>  
         <Link to="/DusMakanan">
            <div className="Dusmakanan">
            <img src="/image/content/amplop.jpg"/>
             Paket Fried Chiken
            </div>
         </Link>  
         <Link to="#">
            <div className="Dusmakanan">
            <img src="/image/content/coming.jpeg"/>
             kami akan segera menambah produk
            </div>
         </Link>  
      </div>
      
      );
      
};

export default Categori;