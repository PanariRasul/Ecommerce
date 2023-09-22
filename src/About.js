import HeroSection from "./components/HeroSection";
import { useProductContext } from "./Context/ProductContext";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "Shopping store",
  };

  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  );
};

export default About;