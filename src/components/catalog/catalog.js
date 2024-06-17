import React, { useEffect } from 'react';
import './catalog.css';
import { Link } from 'react-router-dom';

const Categori = () => {

  return (
    <div className="container w-full select-none">
      <h1 className="p-2 m-2 font-bold items-center w-full select-none bg-cyan-950">
        Pilih Categori Produk
      </h1>
      <Link to="/DusMakanan">
        <div className="Dusmakanan image-container" >
          <img src="/image/content/amplop.jpg" alt="Dus Makanan" />
         <p>Dus Makanan</p>
        </div>
      </Link>
      <Link to="/DusKosmetic">
        <div className="Dusmakanan image-container" >
          <img src="/image/content/amplop.jpg" alt="Dus Kosmetic" />
          <p>Dus Kosmetic</p>
        </div>
      </Link>
      <Link to="/DusPeralatan">
        <div className="Dusmakanan image-container" >
          <img src="/image/content/amplop.jpg" alt="Dus Peralatan" />
          <p>Dus Peralatan</p>
        </div>
      </Link>
      <Link to="/HantagLabel">
        <div className="Dusmakanan image-container" >
          <img src="/image/content/amplop.jpg" alt="Hantag/Label" />
          <p>Hantag/Label</p>
        </div>
      </Link>
      <Link to="/PaperBag">
        <div className="Dusmakanan image-container" >
          <img src="/image/content/amplop.jpg" alt="PaperBag" />
          <p>PaperBag</p>
        </div>
      </Link>
      <Link to="#">
        <div className="Dusmakanan image-container">
          <img src="/image/content/coming.jpeg" alt="Coming Soon" />
          <p>Kami akan menambah produk</p>
        </div>
      </Link>
    </div>
  );
};

export default Categori;
