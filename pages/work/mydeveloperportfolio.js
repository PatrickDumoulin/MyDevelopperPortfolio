// next/image
import Image from 'next/image';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// composants
import Circles from '../../components/Circles';
import Link from 'next/link';

const MyDeveloperPortfolio = () => {
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
              My Developer Portfolio<span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              This project is my personal developer portfolio, designed to showcase my skills, 
              projects, and professional background. Built with React and Next.js, 
              it incorporates animations with Framer Motion, UI components, and responsive 
              design principles to create a smooth, visually engaging experience. Additionally, 
              it leverages CSS for styling and Swiper.js for project slides, providing a 
              dynamic way to display my work. 
            </motion.p>
          </div>

          {/* image section */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[55%] mt-12"
          >
            <div className="w-full h-auto">
              <Image
                src="/Thumbnail mydeveloperportfolio.png" 
                width={500}
                height={300}
                alt="Thumbnail for My Developer Portfolio"
                className="rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        </div>

        {/* Buttons for GitHub and Return */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mt-14 text-center flex justify-center gap-4"
        >
          <a
            href="https://github.com/PatrickDumoulin/MyDevelopperPortfolio/commits/main/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 text-lg font-medium text-white bg-accent rounded-full hover:bg-accent-dark transition-colors duration-300"
          >
            View GitHub Repository
          </a>
          <Link
            href="/work"
            className="inline-block px-6 py-3 text-lg font-medium text-white bg-gray-600 rounded-full hover:bg-gray-700 transition-colors duration-300"
          >
            Back
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default MyDeveloperPortfolio;
