import React from "react";
import "./catalog.css";
import {Link} from"react-router-dom";
const Catalog = () => {
   
   
   
   return (
      
      <div className="container">
         <Link to="/DusMakanan">
            <div className="Dusmakanan">Dus Makanan
            </div>
         </Link>  
         <Link to="/DusMakanan">
            <div className="Dusmakanan">Dus Kosmetic
            </div>
         </Link>  
         <Link to="/DusMakanan">
            <div className="Dusmakanan">Dus Peralatan
            </div>
         </Link>  
         <Link to="/DusMakanan">
            <div className="Dusmakanan">Hantag
            </div>
         </Link>  
         <Link to="/DusMakanan">
            <div className="Dusmakanan">PaperBag
            </div>
         </Link>  
         <Link to="/DusMakanan">
            <div className="Dusmakanan">Amplop
            </div>
         </Link>  
         <Link to="/DusMakanan">
            <div className="Dusmakanan">brosur
            </div>
         </Link>  
      </div>
      
      );
      
};

export default Catalog;