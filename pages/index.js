import ProjectsBtn from '../components/ProjectsBtn';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import ParticlesContainer from '../components/ParticlesContainer';
import TalkingBtn from '@/components/TalkingBtn';

const Home = () => {
  return (
    <div className='h-full py-8'>
      <div className='w-full h-full'>
        <div className='text-center flex flex-col justify-center xl:pt-34 xl:text-left h-full container mx-auto'>
          <motion.h3 variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit='hidden' className='h3'>
            Desarrollador Web <span className='text-accent text-4xl leading-6 mb-8 font-bold fullstack animate-pulse'>Full Stack</span> | Diseñador
          </motion.h3>
          <motion.p variants={fadeIn('down', 0.3)} initial='hidden' animate='show' exit='hidden' className='ancho-parrafo-about max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-8 texto'>
            <br />
            <b>¡Hola! Soy Humberto, también conocido como 'EfuntaDev'.</b><br />
            Soy un desarrollador web full stack y diseñador apasionado por crear soluciones digitales innovadoras y funcionales. Con experiencia en diversas tecnologías, disfruto trabajando en proyectos que combinan desarrollo y diseño para ofrecer experiencias de usuario sobresalientes.<br />
            Estoy en búsqueda de nuevas oportunidades para contribuir en equipos dinámicos y enfrentar desafíos técnicos que me permitan seguir aprendiendo y creciendo profesionalmente. Si estás buscando a alguien comprometido, con enfoque en resultados y capacidad para adaptarse rápidamente a nuevas tecnologías, ¡estoy listo para colaborar!<br />
            No dudes en contactarme para discutir proyectos, colaboraciones o futuras oportunidades.
          </motion.p>
          <motion.div variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden' className='flex items-center botones-centrados gap-x-6'>
            <ProjectsBtn />
            <TalkingBtn/>
          </motion.div>
        </div>
      </div>
      <div className='w-[650px] h-full absolute espaciado-particles bottom-0'>
        <ParticlesContainer />
        <div className='w-[750px] h-full absolute right-0 bottom-0'>
          <div className='hidden xl:flex xl:max-w-none w-full h-full translate-z-0 explosion animate-pulse mix-blend-color'></div>
        </div>
        <motion.div variants={fadeIn('up', 0.5)} initial='hidden' animate='show' transition={{ duration: 1, ease: 'easeInOut' }} exit='hidden' className='w-full h-full max-w-[750px] max-h-[600px] absolute -bottom-32 lg:bottom-0 lg:right-[10%] divAvatar'>
          <div className='hidden xl:flex xl:max-w-none avatar translate-z-0'></div>
        </motion.div>
      </div>
      <div className='w-full h-[300px] max-w-[530px] max-h-[300px] absolute xs:-top-[150px] xs:-left-[270px] sm:-top-[150px] sm:-left-[270px] md:-top-[150px] md:-left-[270px] lg:-top-[150px] lg:-left-[270px] xl:top-auto xl:-bottom-[150px] xl:-left-[270px] animate-spin-slow'>
        <div className='xl:flex xl:max-w-none destello translate-z-0'></div>
      </div>

    </div>
  );
};

export default Home;
