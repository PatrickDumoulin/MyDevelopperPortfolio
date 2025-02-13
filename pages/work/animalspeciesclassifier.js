// next/image
import Image from 'next/image';
import { useRouter } from 'next/router';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// composants
import Circles from '../../components/Circles';
import Link from 'next/link';

const ASCProject = () => {
  const router = useRouter();
  const { locale } = router;

  const content = {
    en: {
      description: "The Animal Species Classifier (ASC) is an innovative project combining ML.NET for machine learning and React for the frontend interface. This application can identify different animal species from uploaded images with high accuracy.\n\nThe project demonstrates the integration of machine learning models with web applications, featuring real-time image processing and classification using a custom-trained ML.NET model.",
      viewGithub: "View GitHub Repository",
      back: "Back"
    },
    fr: {
      description: "Le Classificateur d'Espèces Animales (ASC) est un projet innovant combinant ML.NET pour l'apprentissage automatique et React pour l'interface frontend. Cette application peut identifier différentes espèces animales à partir d'images téléchargées avec une grande précision.\n\nLe projet démontre l'intégration de modèles d'apprentissage automatique avec des applications web, offrant un traitement et une classification d'images en temps réel utilisant un modèle ML.NET personnalisé.",
      viewGithub: "Voir le dépôt GitHub",
      back: "Retour"
    }
  }[locale];

  return (
    <div className="h-auto md:h-full bg-gradient-to-b from-[#0B1221] to-[#142237] py-32 overflow-y-auto overflow-x-hidden">
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
              ASC<span className="text-accent">.</span>
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
                src="https://www.youtube.com/embed/J0W-rCyOOgY"
                title="Animal Species Classifier Project Video"
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
            href="https://github.com/PatrickDumoulin/AnimalSpeciesClassifier"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 text-lg font-medium text-white bg-accent rounded-full hover:bg-accent-dark transition-colors duration-300"
          >
            {content.viewGithub}
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

export default ASCProject;
