import React from 'react';
import "./home.css";
import Catalog from "../../catalog/catalog";
import SlideImg from "../../slide/slide";
const Home = () => {
  return (
    <div className="homepage">
      <SlideImg />
      <Catalog />
    </div>
  );
};

export default Home;
