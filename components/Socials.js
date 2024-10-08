import Link from 'next/link'
import {RiLinkedinBoxFill, RiGithubFill, RiArticleLine} from 'react-icons/ri'
import DarkMode from './DarkMode'

const Socials = () => {
  return (
  <div className='flex items-center gap-x-5 text-xl'>
    <Link href={'https://www.linkedin.com/in/humberto-sifontes'} className='icon hover:scale-125 transition-all duration-300'>
      <RiLinkedinBoxFill/>
    </Link>
    <Link href={'https://github.com/HumbertoSifontes'} className='icon hover:scale-125 transition-all duration-300'>
      <RiGithubFill/>
    </Link>
    <Link href={'https://drive.google.com/file/d/1PrPKSwEHcaczLJiMNyvwyXxG_TZeUJAs/view?usp=drive_link'} className='icon hover:scale-125 transition-all duration-300'>
      <RiArticleLine/>
    </Link>
    <DarkMode />
  </div>);
};

export default Socials;
