// next/image
import Image from 'next/image';

// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// composants
import Circles from '../../components/Circles';
import Link from 'next/link';
import { useRouter } from 'next/router';

const AcefProject = () => {
  const router = useRouter();
  const { locale } = router;

  const content = {
    en: {
      description: "The ACEF de Québec is a non-profit that provides budget management, financial education, and consumer rights advocacy. The project uses ASP.NET and Entity Framework to create a web application that centralizes client, intervention, and workshop data, stored securely in a SQL database.\n\nThis solution offers a user-friendly interface for managing client records, generating reports, and improving operational efficiency, helping ACEF better support individuals and families with financial challenges.",
      moreInfo: "More Info",
      back: "Back"
    },
    fr: {
      description: "L'ACEF de Québec est un organisme à but non lucratif qui offre des services de gestion budgétaire, d'éducation financière et de défense des droits des consommateurs. Le projet utilise ASP.NET et Entity Framework pour créer une application web qui centralise les données des clients, des interventions et des ateliers, stockées de manière sécurisée dans une base de données SQL.\n\nCette solution offre une interface conviviale pour la gestion des dossiers clients, la génération de rapports et l'amélioration de l'efficacité opérationnelle, aidant l'ACEF à mieux soutenir les individus et les familles face aux défis financiers.",
      moreInfo: "Plus d'infos",
      back: "Retour"
    }
  }[locale];

  return (
    <div className="h-auto md:h-full bg-gradient-to-b from-[#0B1221] to-[#142237] py-32 overflow-y-auto overflow-x-hidden">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* Section texte */}
          <div className="text-center xl:text-left flex xl:w-[30vw] flex-col mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              ACEF<span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto xl:mx-0 px-4 xl:px-0 whitespace-pre-line"
            >
              {content.description}
            </motion.p>
            <div className="mt-4">
              <a 
                href={locale === 'fr' ? "/DAS-4ProjectAcefFrancais.docx" : "/DAS-4ProjectAcefEnglish.docx"}
                download 
                className="btn btn-primary text-2xl"
              >
                <span className="text-accent">&rarr;</span> 
                {content.moreInfo} 
                <span className="text-accent"> &larr; </span>
              </a>
            </div>
          </div>

          {/* Section vidéo */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[55%] mt-8 xl:mt-0"
          >
            <div className="w-full h-[250px] xl:h-[350px]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/E5vh8U33VEk"
                title="ACEF Project Video"
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
          {/* <a
            href="https://github.com/PatrickDumoulin/ACEF"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 text-lg font-medium text-white bg-accent rounded-full hover:bg-accent-dark transition-colors duration-300"
          >
            View GitHub Repository
          </a> */}
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

export default AcefProject;
