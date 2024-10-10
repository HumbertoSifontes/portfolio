import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link'
import { fadeIn } from '../variants';

const TalkingBtn = () => {
  return (
    <Link href={'/contact'}>
        <button variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden' type="button" className='btn rounded-full border border-btn max-w-[170px] px-8 flex items-center justify-center overflow-hidden hoverBg group animate-pulse relative z-20'>
            <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 text-accent botonName'>Hablemos</span>
            <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
        </button>
    </Link>
  )
}

export default TalkingBtn