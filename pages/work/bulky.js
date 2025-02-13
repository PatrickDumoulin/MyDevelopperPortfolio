// next/image
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import Circles from '../../components/Circles';
import Link from 'next/link';

const BulkyBookProject = () => {
  const router = useRouter();
  const { locale } = router;

  const content = {
    en: {
      title: "Bulky Book",
      description: "Bulky Book is a comprehensive e-commerce platform built with ASP.NET Core. This project showcases advanced features including user authentication, shopping cart functionality, order management, and an admin panel for product management.\n\nThe application implements the repository pattern and uses Entity Framework Core for database operations, demonstrating best practices in web development.",
      viewGithub: "View GitHub Repository",
      back: "Back",
      moreInfo: "More Info"
    },
    fr: {
      title: "Bulky Book",
      description: "Bulky Book est une plateforme e-commerce complète construite avec ASP.NET Core. Ce projet présente des fonctionnalités avancées incluant l'authentification des utilisateurs, la gestion du panier d'achat, la gestion des commandes et un panneau d'administration pour la gestion des produits.\n\nL'application implémente le pattern repository et utilise Entity Framework Core pour les opérations de base de données, démontrant les meilleures pratiques en développement web.",
      viewGithub: "Voir le dépôt GitHub",
      back: "Retour",
      moreInfo: "Plus d'infos"
    }
  }[locale];

  return (
    <div className="h-auto md:h-full bg-gradient-to-b from-[#0B1221] to-[#142237] py-32 overflow-y-auto overflow-x-hidden">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8 items-start">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              {content.title}<span className="text-accent">.</span>
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
            <div className='mt-4'>
              <a 
                href={locale === 'fr' ? "/DAS-4ProjectBulkyBookFrancais.docx" : "/DAS-4ProjectBulkyBookEnglish.docx"} 
                download 
                className="btn btn-primary text-2xl"
              >
                <span className="text-accent">&rarr;</span> 
                {content.moreInfo} 
                <span className="text-accent"> &larr; </span>
              </a>
            </div>
          </div>

          {/* Video section */}
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
                title="Bulky Book Project Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>

        {/* Boutons */}
        <motion.div 
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="mt-14 text-center flex justify-center gap-4"
        >
          <a
            href="https://github.com/PatrickDumoulin/BulkyBook"
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

export default BulkyBookProject;
