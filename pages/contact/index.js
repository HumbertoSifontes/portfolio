import {BsArrowRight} from 'react-icons/bs'
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

const Contact = () => {
  return (
    <div className='h-full'>
      <div className='container mx-auto text-center xl:text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px] bg-card rounded-lg p-8'>
          <motion.h2 variants={fadeIn('down', 0.5)} initial='hidden' animate='show' exit='hidden' className='h2 text-center mb-12'>
            Conectemos<span className='text-accent animate-pulse'>.</span>
          </motion.h2>
          <form className='flex-1 flex flex-col gap-6 w-full mx-auto' action='humberto.efuntade@gmail.com' method='POST'>
            <motion.div variants={fadeIn('right', 0.7)} initial='hidden' animate='show' exit='hidden' className='flex flex-col xs:flex-col sm:flex-row gap-x-6 w-full'>
              <input className='input xs:mb-6 sm:mb-0 texto' type='text' placeholder='nombre' required/>
              <input className='input texto' type='text' placeholder='email' required/>
            </motion.div>
            <motion.input variants={fadeIn('right', 0.5)} initial='hidden' animate='show' exit='hidden' className='input texto' type='text' placeholder='Asunto'/>
            <motion.textarea variants={fadeIn('right', 0.3)} initial='hidden' animate='show' exit='hidden' className='textarea texto' placeholder='mensaje' required></motion.textarea>
            <motion.button variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden' type='submit' className='btn rounded-full border border-btn max-w-[170px] px-8 flex items-center justify-center overflow-hidden hoverBg group  animate-pulse'>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 text-accent botonName'>ENVIAR</span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'/>
            </motion.button>
          </form>
        </div>
      </div>
      <div className="w-full h-full max-w-[750px] max-h-[600px] absolute -bottom-[200px] -left-[350px] divAvatar">
        <div className='hidden xl:flex xl:max-w-none triangle translate-z-0 animate-pulse'></div>
      </div>
    </div>
  );
};

export default Contact;
