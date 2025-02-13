// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaAngular,
  FaGithub,
  FaBootstrap,
  FaVuejs,
  FaMusic,
  FaUnity,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiCsharp,
  SiAdobepremierepro,
  SiMicrosoftword,
  SiMicrosoftazure,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiJira,
  SiAdobeaftereffects,
  SiBlender,
  SiXamarin,
  SiAzuredevops,
  SiYaml,
} from "react-icons/si";

import { TbSql } from "react-icons/tb";

import { AnimatePresence } from "framer-motion";

export const serviceData = [];

//components
import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import { useRouter } from 'next/router';
import { translations } from '../../translations';
import Link from 'next/link';

const Work = () => {
  const router = useRouter();
  const { locale } = router;
  const t = translations[locale];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B1221] to-[#142237] py-32 text-center xl:text-left">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2 xl:mt-12'
            >
              {t.work.title}<span className='text-accent'>.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='mb-4 max-w-[400px] mx-auto lg:mx-0'
            >
              {t.work.description}
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='w-full xl:max-w-[65%]'
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;

