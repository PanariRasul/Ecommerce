import React from "react";
import HeroSection from "./components/HeroSection";
import Trusted from "./components/Truested";
import Services from "./components/Services";
import FeatureProduct from "./components/FeatureProduct";


const Home = () => {
  const data = {
    name: "Shopping Store",
  };

return (

    <>
        <HeroSection myData={data} />
        <FeatureProduct/>
        <Services/>
        <Trusted/>
        
        
    </>
    );
};

export default Home;