import Link from 'next/link';
import Socials from '../components/Socials'

const Header = () => {
  const getLogoPath = () => {
    if (typeof window !== 'undefined') {
      const selectedTheme = window.localStorage.getItem('selectedTheme');
      return selectedTheme === 'dark' ? '/logoDark.png' : '/logoLight.png';
    }
    return '/logoLight.png';
  };
  return (
  <header className='sticky z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
   <div className='container mx-auto'>
    <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8'>
      <div className='w-full h-full max-w-[120px] max-h-[80px] py-4'>
        <Link href={'/'}><div className='logo animate-pulse'></div></Link>
      </div>
      <Socials/>
    </div>
   </div>
  </header>);
};

export default Header;
