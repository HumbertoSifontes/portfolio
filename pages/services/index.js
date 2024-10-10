import ServiceSlider from "../../components/ServiceSlider";
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

const Services = () => {
  return (
    <div className="h-full py-36 flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col xl:text-left mb-4 xl:mb-0">
            <motion.h2 variants={fadeIn('up', 0.2)} initial='hidden' animate='show' exit='hidden' className="h2 xl:mt-8">
              Servicios<span className="text-accent animate-pulse">.</span>
            </motion.h2>
            <motion.p variants={fadeIn('up', 0.4)} initial='hidden' animate='show' exit='hidden' className="mb-4 max-w-[400px] mx-auto texto">
              Como desarrollador web fullstack, ofrezco soluciones digitales personalizadas y funcionales para satisfacer las necesidades específicas 
              de mis clientes. Mi enfoque se centra en la creación de experiencias digitales impactantes y efectivas, desde aplicaciones web atractivas 
              y de alto rendimiento hasta interfaces intuitivas diseñadas para mejorar la productividad y la interacción. Con una sólida base en el 
              desarrollo backend, frontend y diseño de bases de datos, garantizo soluciones tecnológicas adaptadas que combinan eficiencia, diseño 
              estético y funcionalidad para impulsar el éxito de los proyectos
            </motion.p>
          </div>
          <motion.div variants={fadeIn('down', 0.3)} initial='hidden' animate='show' exit='hidden' className="flex items-center w-full xl:max-w-[65%]">
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <div className="w-full h-full max-w-[750px] max-h-[600px] absolute xs:-top-[310px] xs:-left-[260px] xs:rotate-90 xl:top-auto xl:-bottom-[220px] xl:-left-[350px] divAvatar xl:rotate-0">
        <div className='xl:flex xl:max-w-none triangle translate-z-0 animate-pulse'></div>
      </div>
    </div>
  );
};

export default Services;
