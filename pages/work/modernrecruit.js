// next/image
import Image from 'next/image';
import { useRouter } from 'next/router';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// composants
import Circles from '../../components/Circles';
import Link from 'next/link';

const ModernRecruitProject = () => {
  const router = useRouter();
  const { locale } = router;

  const content = {
    en: {
      description: "Modern Recruit is a recruitment platform built with ASP.NET Core, designed to streamline the hiring process. The application features job posting management, candidate tracking, and automated application processing.\n\nThe platform includes an intuitive interface for both recruiters and job seekers, with features such as resume parsing, skill matching, and interview scheduling.",
      viewGithub: "View GitHub Repository",
      back: "Back"
    },
    fr: {
      description: "Modern Recruit est une plateforme de recrutement construite avec ASP.NET Core, conçue pour simplifier le processus d'embauche. L'application comprend la gestion des offres d'emploi, le suivi des candidats et le traitement automatisé des candidatures.\n\nLa plateforme inclut une interface intuitive pour les recruteurs et les chercheurs d'emploi, avec des fonctionnalités telles que l'analyse de CV, la correspondance des compétences et la planification des entretiens.",
      viewGithub: "Voir le dépôt GitHub",
      back: "Retour"
    }
  }[locale];

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
              Modern Recruit<span className="text-accent">.</span>
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

          {/* Image section */}
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
                src="https://www.youtube.com/embed/4RZuedj6grU"
                title="Modern Recruit Project Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
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
            href="https://github.com/PatrickDumoulin/ModernRecruit"
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

export default ModernRecruitProject;
