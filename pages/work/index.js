import WorkSlider from '../../components/WorkSlider';
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

const Work = () => {
  return <div className="h-full py-36 flex items-center">
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-x-8">
        <div className="text-center flex xl:w-[30vw] flex-col xl:text-left mb-4 xl:mb-0">
          <motion.h2 variants={fadeIn('up', 0.2)} initial='hidden' animate='show' exit='hidden' className="h2 xl:mt-12">
            Proyectos<span className="text-accent animate-pulse">.</span>
          </motion.h2>
          <motion.p variants={fadeIn('up', 0.4)} initial='hidden' animate='show' exit='hidden' className="mb-4 max-w-[400px] mx-auto texto">
          Aunque me considero en etapa trainee/junior, he canalizado mi creatividad y habilidades técnicas en proyectos personales, explorando 
          diferentes tecnologías y herramientas. Mi enfoque práctico me ha brindado una comprensión sólida de las bases del desarrollo y diseño web.
          </motion.p>
        </div>
        <motion.div variants={fadeIn('down', 0.3)} initial='hidden' animate='show' exit='hidden' className="w-full xl:max-w-[65%]">
          <WorkSlider/>
        </motion.div>
      </div>
      <div className="w-[250px] h-full max-w-[550px] max-h-[600px] absolute xs:-top-[170px] xs:-left-[260px] lg:-bottom-[330px] lg:-right-[5px] xl:top-auto xl:left-auto xl:-bottom-[330px] xl:-right-[5px] divAvatar rotate-45">
      <div className='xl:flex xl:max-w-none sign translate-z-0 animate-pulse'></div>
      </div>
    </div>
  </div>;
};

export default Work;