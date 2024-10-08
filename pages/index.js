import ProjectsBtn from '../components/ProjectsBtn';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants'
import ParticlesContainer from '../components/ParticlesContainer';
import {BsArrowRight} from 'react-icons/bs'
import Link from 'next/link'

const Home = () => {
  return (
  <div className='h-full'>
    <div className='w-full h-full'>
      <div className='text-center flex flex-col justify-center xl:pt-34 xl:text-left h-full container mx-auto'>
        <motion.h1 variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit='hidden' className='h1'>Digitalizando <br/> Soluciones<span className='text-accent animate-pulse'>.</span></motion.h1>
        <motion.h3 variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit='hidden' className='h3'>Desarrollador Web <span className='text-accent botonName animate-pulse'>Full Stack</span> | Diseñador</motion.h3>
        <motion.p variants={fadeIn('down', 0.3)} initial='hidden' animate='show' exit='hidden' className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-8 texto'>
           <br/>
          ¡Hola! Soy Humberto "EfuntaDev" Sifontes, un apasionado desarrollador web full stack y diseñador con enfoque en la creación de experiencias digitales impactantes.
          Busco sumergirme en entornos laborales desafiantes que me permitan aplicar mis habilidades y aprender de manera continua. Estoy ansioso por contribuir y crecer en el emocionante mundo de la tecnología.
          ¡Estoy listo para sumergirme en nuevos desafíos! Siempre abierto a nuevas oportunidades, colaboraciones y proyectos.
        </motion.p>
        <motion.div variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden' className='flex items-center gap-x-6'>
          <ProjectsBtn />
          <Link href={'/contact'}>
            <button variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden' type='submit' className='btn rounded-full border border-btn max-w-[170px] px-8 flex items-center justify-center overflow-hidden hoverBg group animate-pulse'>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 text-accent botonName'>Hablemos</span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'/>
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
    <div className='w-[650px] h-full absolute right-20 bottom-0'>
      <ParticlesContainer/>
      <div className='w-[750px] h-full absolute right-0 bottom-0'>
        <div className='w-full h-full translate-z-0 explosion animate-pulse mix-blend-color'></div>
      </div>
      <motion.div variants={fadeIn('up', 0.5)} initial='hidden' animate='show' transition={{duration: 1, ease:'easeInOut'}} exit='hidden' className='w-full h-full max-w-[750px] max-h-[600px] absolute -bottom-32 lg:bottom-0 lg:right-[10%] divAvatar'>
        <div className='hidden xl:flex xl:max-w-none avatar translate-z-0'></div>
      </motion.div>
    </div>
    <div className="w-full h-[300px] max-w-[530px] max-h-[300px] absolute -bottom-[150px] -left-[270px] divAvatar animate-spin-slow">
      <div className='hidden xl:flex xl:max-w-none destello translate-z-0'></div>
    </div>
  </div>
  );
};

export default Home;
