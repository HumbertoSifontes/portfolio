import React, { useState } from 'react';
import Modal from 'react-modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

const credentialSlides = {
  slides: [
    {
      title: 'introduccion',
      path: '/introduccion.png',
    },
    {
      title: 'frontend',
      path: '/frontend.png',
    },
    {
      title: 'backend',
      path: '/backend.png',
    },
    {
      title: 'fullstack',
      path: '/fullstack.png',
    },
  ],
};

const CredentialSlider = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
  
    const openModal = (path) => {
        console.log('Opening modal with path:', path);
      setSelectedImage(path);
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setSelectedImage('');
      setModalIsOpen(false);
    };
    return (
        <div>
            <Swiper
                effect={'cube'}
                grabCursor={true}
                cubeEffect={{
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                }}
                pagination={{
                clickable: true,
                }}
                modules={ [EffectCube, Pagination] }
                className='h-[280px] sm:h-[280px]'
            >
                {credentialSlides.slides.map((slide, index) => {
                return (
                    <SwiperSlide key={index}>
                    <div className='relative rounded-lg overflow-hidden flex items-center justify-center group' onClick={() => openModal(slide.path)}>
                        <div className='h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer transition-all duration-300 card-container'>
                        <Image src={slide.path} width={500} height={300} alt='certificado' />
                        </div>
                    </div>
                    </SwiperSlide>
                );
                })}
            </Swiper>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel='Credential Image'
                className='Modal'
                overlayClassName='Overlay'
            >
                 {console.log('Modal is open:', modalIsOpen)}
                {selectedImage && (
                <div>
                    <button onClick={closeModal}>Close Modal</button>
                    <Image src={selectedImage} width={800} height={600} alt='modal-image' />
                </div>
                )}
            </Modal>
        </div>
    );
  };
  
  export default CredentialSlider;
  