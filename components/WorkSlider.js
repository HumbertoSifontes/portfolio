import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';
import Image from 'next/image'
import 'swiper/css';
import 'swiper/css/pagination';
import {BsArrowRight} from 'react-icons/bs'
import Link from 'next/link';

const workSlides = {
  slides: [
    {
      title: 'Frontend',
      images: [
        {
          title: 'title',
          path: '/thumb42.png',
          url: 'https://egbeiworiaweda.netlify.app/'
        },
        {
          title: 'title',
          path: '/thumb12.png',
          url: 'https://proyectofinalfrontendfiuba.netlify.app'
        },
        {
          title: 'title',
          path: '/thumb32.png',
          url: 'https://cotizadorefuntadev.netlify.app'
        },
        {
          title: 'title',
          path: '/thumb22.png',
          url: 'https://humbertosifontes.github.io/EcommerceJS/'
        },
      ],
    },
    {
      title: 'Backend',
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
          url: 'https://humbertosifontes.github.io/EcommerceJS/'
        },
        {
          title: 'title',
          path: '/java.png',
          url: 'https://www.youtube.com/watch?v=5Y5W_fdN50Q'
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper 
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={ [Pagination] }
      className='h-[280px] sm:h-[480px]'
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='col-span-2 text-center text-accent font-semibold'>
              {slide.title}
            </div>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image, index) => {
                return (
                  <Link href={image.url} key={index} target="_blank" rel="noopener noreferrer">
                  <div key={index} className='relative rounded-lg overflow-hidden flex items-center justify-center group'>
                    <div className='flex items-center justify-center relative overflow-hidden'>
                      <Image src={image.path} width={500} height={300} alt='work'/>
                      <div className='screen'></div>
                      <div className='absolute bottom-1 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                          <div className='delay-100'>Ir</div>
                          <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>al Proyecto</div>
                          <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'><BsArrowRight/></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                )
              })}
            </div>
          </SwiperSlide>
          );
        })
      }
    </Swiper>
  );
};

export default WorkSlider;

