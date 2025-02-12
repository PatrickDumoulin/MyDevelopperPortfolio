//next image
import Image from 'next/image';
import { useRouter } from 'next/router';
import { translations } from '../translations';

//components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

// framer motion
import {motion} from 'framer-motion'

//variants
import {fadeIn} from '../variants';

const Home = () => {
  const router = useRouter();
  const { locale } = router;
  const t = translations[locale];

  return (
  <div className='bg-gradient-to-b from-[#0B1221] to-[#142237] h-full'>
    <div className='w-full h-full'>
      {/* text */}
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt40 xl:text-left 
          h-full container mx-auto'>
          {/* title */}
          {/* <h1 className='h1'>
            Where code <br /> Meets {' '}
            <span className='text-accent'>Creativity</span> 
          </h1> */}
          <motion.h1 
          variants={fadeIn('down', 0.2)} 
          initial="hidden" 
          animate="show" 
          exit="hidden" 
          className='h1'>
            {t.home.title} <br /> {' '}
            <span className='text-accent'>{t.home.subtitle}</span> 
          </motion.h1>
          {/* subtitle */}
          <motion.p variants={fadeIn('down', 0.3)} 
          initial="hidden" 
          animate="show" 
          exit="hidden" 
          className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 '>
            {t.home.description}
          </motion.p>
          {/* btn */}
          <div className='flex justify-center xl:hidden relative'>
            <ProjectsBtn/>
          </div>
          <motion.div 
          variants={fadeIn('down', 0.4)} 
          initial="hidden" 
          animate="show" 
          exit="hidden"
          className='hidden xl:flex '
          >
            <ProjectsBtn/>
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className='w-[1200px] h-full absolute right-0 bottom-0'>
        {/* bg img */}
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right 
         xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'> 
        </div>
        {/* particles */}
        {<ParticlesContainer />}
        {/* avatar img */}
        <motion.div 
          variants={fadeIn('up', 0.5)} 
          initial="hidden" 
          animate="show" 
          exit="hidden" 
          transition={{duration: 1, ease: 'easeInOut'}}
          className='w-full h-full max-w-[537px] max-h-[878px] absolute -bottom-32
          lg:botton-0 lg:right-[12%] '>
          <Avatar/>
        </motion.div>
      </div>
    </div>
  </div>
);
};

export default Home;
