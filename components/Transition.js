import {motion} from 'framer-motion'

const transitionVariantLeft = {
  initial: {
    x: '50%',
    width: '100%'
  },
  animate: {
    x: '0%',
    width: '0%'
  },
  exit: {
    x: ['0%', '50%'],
    width: ['0%', '100%']
  }
};

const transitionVariantRight = {
  initial: {
    x: '-50%',
    width: '100%'
  },
  animate: {
    x: '0%',
    width: '0%'
  },
  exit: {
    x: ['0%', '-50%'],
    width: ['0%', '100%']
  }
};

const Transition = () => {
  return (
    <>
      <motion.div 
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-[--door1]' 
        variants={transitionVariantLeft}
        initial='initial' 
        animate='animate'
        exit='exit'
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut'}}>
      </motion.div>
      <motion.div 
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-[--door2]' 
        variants={transitionVariantLeft}
        initial='initial' 
        animate='animate'
        exit='exit'
        transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut'}}>
      </motion.div>
      <motion.div 
        className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[--door3]' 
        variants={transitionVariantLeft}
        initial='initial' 
        animate='animate'
        exit='exit'
        transition={{ delay: 0.6, duration: 0.6, ease: 'easeInOut'}}>
      </motion.div>
      <motion.div 
        className='fixed top-0 bottom-0 left-full w-screen h-screen z-50 bg-[--door1]' 
        variants={transitionVariantRight}
        initial='initial' 
        animate='animate'
        exit='exit'
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut'}}>
      </motion.div>
      <motion.div 
        className='fixed top-0 bottom-0 left-full w-screen h-screen z-40 bg-[--door2]' 
        variants={transitionVariantRight}
        initial='initial' 
        animate='animate'
        exit='exit'
        transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut'}}>
      </motion.div>
      <motion.div 
        className='fixed top-0 bottom-0 left-full w-screen h-screen z-30 bg-[--door3]' 
        variants={transitionVariantRight}
        initial='initial' 
        animate='animate'
        exit='exit'
        transition={{ delay: 0.6, duration: 0.6, ease: 'easeInOut'}}>
      </motion.div>
    </>
  );
};

export default Transition;
