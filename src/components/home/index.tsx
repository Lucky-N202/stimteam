import useMediaQuery from "@/hooks/useMediaQueries";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import HomePageText from '@/assets/HomePageText.png';
import HomePageGraphic from '@/assets/Logo.jpg';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";



type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage}: Props) => {

    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
        id="home"
        className="gap-16 mt-2 py-10 bg-cover bg-center bg-no-repeat h-screen md:h-full bg-transparent md:pd-0 bg-[url('@/assets/real-estate-374190_1280.jpg')] w-11/12 mx-auto"
    >
        {/* Image and main header */}
        <motion.div 
            className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
            onViewportEnter={ () => setSelectedPage(SelectedPage.Home)}
        >

            {/* Main Header */}

            <div className="  md:basis-3/5">

                {/* Headings */}
                <motion.div 
                className="md:mt-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50},
                    visible: { opacity: 1, x: 0}

                }}
                >
                  
                </motion.div>

                      
            </div>

           

                

        </motion.div>

        
         {/* Actions */}
         <motion.div 
                className="mt-8 justify-center flex items-center gap-8 "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                transition={{ delay:0.2, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50},
                    visible: { opacity: 1, x: 0}

                }}
                >
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Join Now
                    </ActionButton>
                   

                    
                </motion.div> 
        
                
    </section>

    
  )
};

export default Home;