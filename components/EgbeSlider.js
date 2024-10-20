import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectCoverflow, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { IoCodeWorkingSharp } from "react-icons/io5";
import {  RxAccessibility } from "react-icons/rx";
import { TbSeo, TbLoader, TbUxCircle } from "react-icons/tb";
import { MdOutlineIncompleteCircle } from "react-icons/md";


const EgbeData = [
  {
    icon: <TbUxCircle />,
    description: 'Implementé principios de UX/UI para hacerlo amigable e intuitivo, siguiendo la paleta de colores requerida por el cliente. Además, usé efectos llamativos para destacar el CTA. La página es 100% responsiva.',
  },
  {
    icon: <TbSeo />,
    description: 'Para mejorar el SEO, utilicé palabras clave y HTML semántico, lo que facilita la comprensión del contenido por parte de los motores de búsqueda y mejora la accesibilidad.',
  },
  {
    icon: <RxAccessibility />,
    description: 'Usé atributos ARIA para mejorar la accesibilidad para usuarios con discapacidades, haciendo la página accesible para todos (a11y).',
  },
  {
    icon: <TbLoader />,
    description: 'Implementé Lazy Loading para la carga diferida de imágenes y videos, y optimicé las imágenes para mejorar el rendimiento y la experiencia del usuario, haciendo que la carga sea más rápida.',
  },
  {
    icon: <IoCodeWorkingSharp />,
    description: "Ya que esta es la V1, el botón de modo oscuro está ubicado en la barra de navegación. Será reubicado en la sección de 'Cuenta' cuando desarrolle el backend.",
  },
  {
    icon: <MdOutlineIncompleteCircle />,
    description: 'Por ahora, la visualización del sitio web completo es posible porque aún no se requiere autenticación/autorización. Una vez integrado con el backend, se deberá registrarse e identificarse para ver más allá de la Landing Page',
  },
];

  const EgbeSlider = () => {
    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
        >
        {EgbeData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='card-container h-full'>
                <div className='bg-card rounded-lg px-6 py-8 flex flex-col gap-x-6 sm:gap-x-0 group transition-all duration-300'>
                  <div className='flex justify-center text-4xl text-accent mb-4 animate-pulse'>{item.icon}</div>
                  <div className='mb-8'>
                    <p className='texto texto-card-services'>{item.description}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            );
          })
        }
      </Swiper>
    );
  };

  export default EgbeSlider;
