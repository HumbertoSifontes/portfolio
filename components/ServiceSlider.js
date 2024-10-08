import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import {
  RxPencil2,
  RxDesktop,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { TbApi, TbBrandOauth, TbDatabase } from "react-icons/tb";


const serviceData = [
  {
    icon: <TbApi />,
    title: 'Creación de APIs Robustas',
    description: 'Desarrollo de interfaces de programación de aplicaciones (APIs) seguras y fiables para facilitar la comunicación entre diferentes sistemas. Ofrezco soluciones backend escalables y documentadas para facilitar la integración de servicios.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Diseño y Desarrollo Frontend',
    description: 'Creación de interfaces de usuario atractivas y funcionales utilizando las últimas tecnologías y prácticas de diseño. Desde maquetación y diseño hasta interacciones fluidas, cada detalle está cuidadosamente considerado para ofrecer una experiencia de usuario excepcional.',
  },
  {
    icon: <RxDesktop />,
    title: 'Desarrollo de Aplicaciones Web Personalizadas',
    description: 'Creación de aplicaciones web a medida con interfaces atractivas y funcionales para satisfacer las necesidades específicas de tu empresa. Desde plataformas de gestión interna hasta sistemas de venta online, cada solución es diseñada para maximizar la eficiencia y el impacto.',
  },
  {
    icon: <TbBrandOauth />,
    title: 'Implementación de Sistemas de Autenticación y Autorización',
    description: 'Diseño y configuración de sistemas de autenticación y autorización seguros para garantizar la protección de los datos y el acceso controlado a áreas específicas de aplicaciones web.',
  },
  {
    icon: <TbDatabase />,
    title: 'Consultoría y Optimización de Bases de Datos',
    description: ' Análisis detallado de estructuras de bases de datos existentes, optimización de consultas, y diseño de nuevas arquitecturas. Proporciono estrategias efectivas para mejorar el rendimiento y la eficiencia de las bases de datos.',
  },
  {
    icon: <RxRocket />,
    title: 'Optimización de Sitios Web y SEO',
    description: ' Mejora de la visibilidad y el rendimiento de los sitios web mediante estrategias de optimización y posicionamiento en buscadores. Ofrezco técnicas de SEO para aumentar la visibilidad y el alcance online.',
  },
];

  const ServiceSlider = () => {
    return (
      <Swiper 
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15
          },

          640: {
            slidesPerView: 2,
            spaceBetween: 15
          },

        }}
        freeMode= {true}
        pagination={{
          clickable: true,
        }}
        modules={{FreeMode, Pagination}}
        className='h-[540px] sm:h-[380px]'
      >
        {serviceData.map((item, index) => {
        const isLastImage = index === serviceData.length - 1;
        return (
          <SwiperSlide key={index}>
            <div className='card-container'>
              <div className='bg-card rounded-lg px-6 py-8 flex flex-col gap-x-6 sm:gap-x-0 group transition-all duration-300'>
                <div className='flex justify-center text-4xl text-accent mb-4'>{item.icon}</div>
                <div className='mb-8'>
                  <div className='mb-2 text-lg texto'>{item.title}</div>
                  <p className='max-w-[350px] leading-normal texto'>{item.description}</p>
                </div>
                {!isLastImage && (
                  <div className='text-3xl'>
                    <RxArrowTopRight className='absolute group-hover:rotate-45 arrow bottom-0 transition-all' />
                  </div>
                )}
                {isLastImage && <div style={{ height: '29px' }} />}
              </div>
            </div>
            </SwiperSlide>
            );
          })
        }
      </Swiper>
    );
  };

  export default ServiceSlider;
