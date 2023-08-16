import useMediaQuery from "@/hooks/useMediaQueries";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import HomePageText from '@/assets/HomePageText.png';
import HomePageGraphic from '@/assets/Logo.jpg';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
    'src/assets/real-estate-374190_1280.jpg',
    'src/assets/Image1.jpg',
    'src/assets/Image2.jpg',
    'src/assets/Image3.jpg',
    'src/assets/Image4.jpg',
    'src/assets/exit-419280_1280.jpg',
    
  ];


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage}: Props) => {

    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextImage, 5000); // Change image every 5 seconds
        return () => clearInterval(interval);
      }, []);

  return (
    <section
        id="home"
        className="h-screen relative overflow-hidden w-11/12 mx-auto"
    >
      
      <motion.img
        src={images[currentImage]}
        alt="Slideshow"
        className="object-cover h-full w-full absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        key={currentImage}
      />
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold mb-4">Welcome to Our Website</h1>
          <p className="text-gray-600">
            Discover the best door repair and installation services in town.
          </p>
        </div>
      </div>
      
                
    </section>

    
  )
};

export default Home;