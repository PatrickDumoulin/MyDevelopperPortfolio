// next/image
import Image from 'next/image';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// composants
import Circles from '../../components/Circles';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SpaceGameProject = () => {
  const router = useRouter();
  const { locale } = router;

  const content = {
    en: {
      description: "Space Game is a 3D game developed with Unity where players control a rocket in an immersive space environment. The game features three levels with increasing difficulty, including unique challenges such as avoiding obstacles and landing on platforms.\n\nThe sound design and music, created by myself, add a captivating dimension to the gameplay experience, enhancing the space atmosphere.",
      moreInfo: "More Info",
      back: "Back"
    },
    fr: {
      description: "Space Game est un jeu 3D développé avec Unity où les joueurs contrôlent une fusée dans un environnement spatial immersif. Le jeu propose trois niveaux de difficulté croissante, incluant des défis uniques comme l'évitement d'obstacles et l'atterrissage sur des plateformes.\n\nLe design sonore et la musique, créés par mes soins, ajoutent une dimension captivante à l'expérience de jeu, renforçant l'atmosphère spatiale.",
      moreInfo: "Plus d'infos",
      back: "Retour"
    }
  }[locale];

  return (
    <div className="h-full bg-gradient-to-b from-[#0B1221] to-[#142237] py-36 flex items-center">
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
              Space Game<span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0 whitespace-pre-line"
            >
              {content.description}
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
                src="https://www.youtube.com/embed/qlJrzye2OLU"
                title="Space Game Project Video"
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
        className="mt-14 text-center flex justify-center gap-4">
          <a
            href="https://github.com/PatrickDumoulin/Space-Game"
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
            {content.back}
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default SpaceGameProject;
