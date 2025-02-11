// next/image
import Image from "next/image";
import { useRouter } from "next/router";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// composants
import Circles from "../../components/Circles";
import Link from "next/link";

const MyDeveloperPortfolio = () => {
  const router = useRouter();
  const { locale } = router;

  const content = {
    en: {
      title: "My Developer Portfolio",
      description:
        "This project is my personal developer portfolio, designed to showcase my skills, projects, and professional background. Built with React and Next.js, it incorporates animations with Framer Motion, UI components, and responsive design principles to create a smooth, visually engaging experience.\n\nThe portfolio features multilingual support, dynamic content loading, and interactive elements.",
      viewGithub: "View GitHub Repository",
      back: "Back",
    },
    fr: {
      title: "Mon Portfolio",
      description:
        "Ce projet est mon portfolio personnel de développeur, conçu pour présenter mes compétences, projets et parcours professionnel. Construit avec React et Next.js, il intègre des animations avec Framer Motion, des composants UI et des principes de design responsive pour créer une expérience fluide et visuellement engageante.\n\nLe portfolio dispose d'un support multilingue, d'un chargement dynamique du contenu et d'éléments interactifs.",
      viewGithub: "Voir le dépôt GitHub",
      back: "Retour",
    },
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
              {content.title}
              <span className="text-accent">.</span>
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

          {/* image section */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[55%] mt-12"
          >
            <div className="w-full h-[250px] xl:h-[350px] relative">
              <Image
                src="/Thumbnail mydeveloperportfolio.png"
                alt="My Developer Portfolio Project"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
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
            href="https://github.com/PatrickDumoulin/portfolio"
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

export default MyDeveloperPortfolio;
