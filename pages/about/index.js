import React, { useState } from "react";
import Image from 'next/image'; // Import Image from Next.js
import {
  FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaFigma, FaAngular, FaGithub,
  FaBootstrap, FaVuejs, FaMusic, FaUnity, FaSass
} from "react-icons/fa";
import {
  SiNextdotjs, SiFramer, SiAdobexd, SiAdobephotoshop, SiCsharp, SiAdobepremierepro,
  SiMicrosoftword, SiMicrosoftazure, SiReact, SiJavascript, SiTypescript, SiJira,
  SiAdobeaftereffects, SiBlender, SiXamarin, SiAzuredevops, SiYaml, SiHtml5, SiCss3
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { MdHtml } from "react-icons/md";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from 'react-countup';
import Link from "next/link";

const aboutData = [
  {
    title: "skills",
    info: [
      { title: "C#", icons: [<SiCsharp key="csharp" />] },
      { title: "ASP.NET Core | Xamarin | Unity", icons: [<SiCsharp key="aspnet" />, <SiXamarin key="xamarin" />, <FaUnity key="unity" />] },
      { title: "Angular | React | Next.js | Vue.Js", icons: [<FaAngular key="angular" />, <SiReact key="react" />, <FaVuejs key="vuejs" />] },
      { title: "SQL Server | PostGres SQL", icons: [<TbSql key="sql" />] },
      { title: "Azure | DevOps | YAML", icons: [<SiMicrosoftazure key="azure" />, <SiAzuredevops key="devops" />, <SiYaml key="yaml" />] },
      { title: "JavaScript | TypeScript", icons: [<SiJavascript key="javascript" />, <SiTypescript key="typescript" />] },
      { title: "HTML | CSS | SASS", icons: [<SiHtml5 key="html5" />, <SiCss3 key="css3" />, <FaSass key="sass" />] },
      { title: "Git | Github", icons: [<FaGithub key="github" />] },
      { title: "Agile | Jira", icons: [<SiJira key="jira" />] },
      { title: "BootStrap", icons: [<FaBootstrap key="bootstrap" />] },
      { title: "PremierePro | PhotoShop | AfterEffects", icons: [<SiAdobepremierepro key="premiere" />, <SiAdobephotoshop key="photoshop" />, <SiAdobeaftereffects key="aftereffects" />] },
    ],
  },
  {
    title: "experience",
    info: [
      { title: "ACEF", stage: "4 months Temporary Contract (June 2024 - October 2024) Developed a full ASP.NET application from the ground up, under the mentorship of a senior architect. The finished project is showcased in the 'My Work' section." },
    ],
  },
  {
    title: "Formations",
    info: [
      { title: "AEC Secure Application Development", stage: "Cégep Limoilou 2022-2024. An intense and fast-paced 2-year full-time program designed to perfect our programming skills. Not suitable for beginners." },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute -left-[350px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">


          {/* Ajoute l'image ici */}
          <div className="mb-4 mt-12">
            <Image
              src="/Maphoto.jpg" // Remplace ce chemin par celui de ta photo
              alt="Photo de Patrick Dumoulin"
              width={170} // Ajuste la taille en pixels
              height={100} // Ajuste la taille en pixels
              className="rounded-full " // Classe pour arrondir et centrer l'image
            />
          </div>
          <motion.h2
            className="h2"
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden">Who am<span className="text-accent"> I </span>?
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
          >
          I&apos;m Patrick, a passionate developer based in Québec City with a deep love for creating 
          innovative applications and games. I have an AEC in application development and have 
          developed a complete .NET app for a client, ACEF de Québec, which has further fueled my 
          interest in the latest frameworks and technologies, especially .NET.

          In addition, I&apos;m a musician and enjoy exploring creative avenues like producing music 
          professionally.
          </motion.p>
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max--w-none mx-auto xl:mx-0 mb-8"
          >
            {/*Counters*/}
        <motion.div 
        variants={fadeIn("right", 0.6)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden md:flex md:max-w-xl xl:max--w-none mx-auto xl:mx-0 mb-8"
        >
          <div className="flex flex-1 xl:gap-x-6">
            {/*Experience*/}
            <div className="relative flex-1 after:w-[1px] after:h-full
            after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={10} duration={5}/> 
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-
              [100px]">Languages & Frameworks</div>
            </div>
            {/* clients */}
            
            <div className="relative flex-1 after:w-[1px] after:h-full
            after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={524} duration={5}/> 
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-
              [100px] ms-1">Github Commits</div>
            </div>
            
            {/* Finished Projects */}
            <div className="relative flex-1 after:w-[1px] after:h-full
            after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={16} duration={5}/> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-
              [100px]">Finished Projects</div>
            </div>

            {/* Statisfied Clients */}
            <div className="relative flex-1 after:w-[1px] after:h-full
            after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={1} duration={5}/>
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-
              [100px]">Statisfied Client</div>
            </div>

            
          </div>
        </motion.div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-7"
          >
            <a href="/CVPatrickDumoulin2024_English.pdf" download className="btn btn-primary text-2xl">
              <span className="text-accent">&rarr;</span> Download My CV Here <span className="text-accent"> &larr; </span>
            </a>
          </motion.div>
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${index === itemIndex && "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, infoIndex) => (
              <div key={infoIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                  {item.icons?.map((icon, iconIndex) => (
                    <div key={iconIndex} className="text-2xl">{icon}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
