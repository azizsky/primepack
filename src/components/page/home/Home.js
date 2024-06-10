import React from 'react';
import "./home.css";
import Categori from "../../catalog/catalog";
import Text1 from"../../texs/texthome1";
const Home = () => {
  return (
    <div className="homepage ">
      <Text1 className="text1" />
      <Categori className="categori" />
    </div>
  );
};

export default Home;
