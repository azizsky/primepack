import React from 'react';
import "./home.css";
import Categori from "../../catalog/catalog";
import Text1 from"../../texs/texthome1";
import Text2 from"../../texs/texthome2";



const Home = () => {
  return (
    <div className="homepage ">
      <Text1 />
      <Categori />
      <Text2 />
    </div>
  );
};

export default Home;
