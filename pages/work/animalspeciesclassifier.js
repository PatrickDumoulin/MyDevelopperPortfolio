// next/image
import Image from 'next/image';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// composants
import Circles from '../../components/Circles';

const VeilleTechno = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8 items-start">
          {/* text section */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
            Animal Species Classifier<span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              This project utilizes ML.NET and ASP.NET for the backend and React for the 
              frontend to create an image recognition app that classifies animal species. 
              Users can upload images, and the machine learning model, built with ML.NET, predicts 
              the species of the animal with speed and accuracy. 
              <br /><br />
              
            </motion.p>
          </div>

          {/* video section */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[55%] mt-12"
          >
            <div className="w-full h-[250px] xl:h-[350px]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/J0W-rCyOOgY"
                title="Veille Techno TP2 Project Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>

        {/* Boutons GitHub et Retour */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mt-14 text-center flex justify-center gap-4"
        >
          <a
            href="https://github.com/PatrickDumoulin/VeilleTechnoTP2V2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 text-lg font-medium text-white bg-accent rounded-full hover:bg-accent-dark transition-colors duration-300"
          >
            View GitHub Repository
          </a>
          <a
            href="/work"
            className="inline-block px-6 py-3 text-lg font-medium text-white bg-gray-600 rounded-full hover:bg-gray-700 transition-colors duration-300"
          >
            Retour
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default VeilleTechno;
