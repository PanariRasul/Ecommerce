import React from "react";
import HeroSection from "./components/HeroSection";
import Trusted from "./components/Truested";
import Services from "./components/Services";

const Home = () => {
  const data = {
    name: "Shopping Store",
  };

return (

    <>
        <HeroSection myData={data} />
        <Services/>
        <Trusted/>
        
    </>
    );
};

export default Home;