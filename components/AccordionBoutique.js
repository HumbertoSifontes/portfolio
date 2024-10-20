import React from "react";
import { Disclosure, DisclosureButton } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Fragment } from 'react';
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';

export default function Accordion() {
  const [isOpen1, setIsOpen1] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);
  const [isOpen3, setIsOpen3] = React.useState(false);

  function openModal1() {
    setIsOpen1(true);
  }
  function closeModal1() {
    setIsOpen1(false);
  }

  function openModal2() {
    setIsOpen2(true);
  }
  function closeModal2() {
    setIsOpen2(false);
  }

  function openModal3() {
    setIsOpen3(true);
  }
  function closeModal3() {
    setIsOpen3(false);
  }

  return (
    <>
      <div className="w-full max-w-xl mx-auto my-6">
        <div className="mx-auto w-full max-w-lg divide-y divide-white rounded-xl bg-card">
          <Disclosure as="div" className="p-6" onClick={openModal1}>
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-sm/6 font-medium texto group-data-[hover]:text-white/80">
                  Características del Diseño
                </span>
                <ChevronDownIcon className="size-5 texto group-data-[hover]:fill-white/50 rotate-270" />
              </DisclosureButton>
          </Disclosure>
        </div>

        <Transition appear show={isOpen1} as={Fragment}>
          <Dialog as="div" className="relative z-40" onClose={closeModal1}>
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="fixed inset-0 bg-black bg-opacity-55" />
            </TransitionChild>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex items-center justify-center p-4 text-center">
                <TransitionChild
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <DialogPanel className="Modales rounded-2xl text-left align-middle shadow-xl">
                    <DialogTitle
                      as="h3"
                      className="text-accent text-2xl leading-6 mb-8 font-bold fullstack text-center animate-pulse"
                    >
                      Características del Diseño
                    </DialogTitle>
                    <div className="mt-2">
                      <ul className="list-disc list-inside texto">
                        <li><strong>Diseño Responsivo:</strong> Nuestra página web utiliza un diseño responsivo para garantizar una experiencia óptima en una variedad de dispositivos y tamaños de pantalla.</li>
                        <li><strong>Barra de Navegación:</strong> Contamos con una barra de navegación fija en la parte superior que permite a los usuarios acceder fácilmente a diferentes secciones del sitio, incluyendo la tienda y el carrito de compras.</li>
                        <li><strong>Presentación Visual Atractiva:</strong> Utilizamos una combinación de colores atractivos, tipografía y efectos visuales, como sombras y transiciones, para crear una experiencia visualmente atractiva.</li>
                        <li><strong>Carrito de Compras:</strong> Los usuarios pueden agregar productos a su carrito de compras, ver el contenido del carrito y proceder con el proceso de compra. El carrito de compras se muestra como un panel deslizable.</li>
                        <li><strong>Filtrado de Productos:</strong> Implementamos un sistema de filtrado por categoría y una función de búsqueda que permite a los usuarios encontrar fácilmente productos específicos.</li>
                        <li><strong>Página de Detalles del Producto:</strong> Cada producto tiene su propia página de detalles que incluye información detallada, como descripción, precio y opciones para agregar el producto al carrito.</li>
                        <li><strong>Sección de Contacto:</strong> Ofrecemos a los usuarios la posibilidad de ponerse en contacto con nuestro equipo a través de un formulario de contacto.</li>
                        <li><strong>Efecto de Partículas:</strong> Hemos incorporado un efecto visual de partículas en la página de inicio para aumentar la interactividad visual.</li>
                      </ul>
                    </div>

                    <div className="mt-4 flex justify-center">
                      <button
                        type="button"
                        className="btn btn_form rounded-full border border-btn max-w-[170px] px-8 flex items-center justify-center overflow-hidden hoverBg botonName animate-pulse relative"
                        onClick={closeModal1}
                      >
                        Cerrar
                      </button>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>

      <div className="w-full max-w-xl mx-auto my-6">
        <div className="mx-auto w-full max-w-lg divide-y divide-white rounded-xl bg-card">
          <Disclosure as="div" className="p-6" onClick={openModal2}>
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-sm/6 font-medium texto group-data-[hover]:text-white/80">
                  Funcionalidades Destacadas
                </span>
                <ChevronDownIcon className="size-5 texto group-data-[hover]:fill-white/50 rotate-270" />
              </DisclosureButton>
          </Disclosure>
        </div>
        
        <Transition appear show={isOpen2} as={Fragment}>
          <Dialog as="div" className="relative z-40" onClose={closeModal2}>
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="fixed inset-0 bg-black bg-opacity-55" />
            </TransitionChild>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full modal2-centered justify-center p-4 text-center">
                <TransitionChild
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <DialogPanel className="Modales h-modal2-boutique rounded-2xl text-left align-middle shadow-xl">
                    <DialogTitle
                      as="h3"
                      className="text-accent text-2xl leading-6 mb-8 font-bold fullstack text-center animate-pulse"
                    >
                      Funcionalidades Destacadas
                    </DialogTitle>
                    <div className="mt-2">
                      <ul className="list-disc list-inside texto">
                        <li><strong>Carrito de Compras:</strong>  Los usuarios pueden agregar productos al carrito, revisar y ajustar la cantidad de productos en el carrito, y proceder a la compra.</li>
                        <li><strong>Filtrado y Búsqueda de Productos:</strong> Hemos habilitado filtros por categoría y una función de búsqueda para mejorar la navegación y la búsqueda de productos.</li>
                        <li><strong>Interacción Visual:</strong> Implementamos efectos visuales interactivos, como cambios de color al pasar el cursor sobre botones, para mejorar la experiencia del usuario.</li>
                        <li><strong>Contacto:</strong> Los usuarios pueden comunicarse con nuestro equipo a través de un formulario de contacto para consultas y asistencia.</li>
                      </ul>
                    </div>

                    <div className="mt-4 flex justify-center">
                      <button
                        type="button"
                        className="btn btn_form rounded-full border border-btn max-w-[170px] px-8 flex items-center justify-center overflow-hidden hoverBg botonName animate-pulse relative"
                        onClick={closeModal2}
                      >
                        Cerrar
                      </button>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>

      <div className="w-full max-w-xl mx-auto my-6">
        <div className="mx-auto w-full max-w-lg divide-y divide-white rounded-xl bg-card">
          <Disclosure as="div" className="p-6" onClick={openModal3}>
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-sm/6 font-medium texto group-data-[hover]:text-white/80">
                  Métodos de Desarrollo
                </span>
                <ChevronDownIcon className="size-5 texto group-data-[hover]:fill-white/50 rotate-270" />
              </DisclosureButton>
          </Disclosure>
        </div>

        <Transition appear show={isOpen3} as={Fragment}>
          <Dialog as="div" className="relative z-40" onClose={closeModal3}>
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="fixed inset-0 bg-black bg-opacity-55" />
            </TransitionChild>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full justify-center p-4 text-center">
                <TransitionChild
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <DialogPanel className="Modales rounded-2xl text-left align-middle shadow-xl">
                    <DialogTitle
                      as="h3"
                      className="text-accent text-2xl leading-6 mb-8 font-bold fullstack text-center animate-pulse"
                    >
                      Metodos de Desarrollo
                    </DialogTitle>
                    <div className="mt-2">
                      <ul className="list-disc list-inside texto">
                        <li><strong>HTML y CSS:</strong> La estructura y el diseño visual de la página web se crearon utilizando HTML y CSS.</li>
                        <li><strong>JavaScript:</strong> Para la funcionalidad interactiva, como el carrito de compras y los efectos visuales, utilizamos JavaScript.</li>
                        <li><strong>Gestión de Datos:</strong> La información de los productos se almacena en un archivo JSON llamado &quot;productos.json&quot; y se carga dinámicamente en la página web mediante JavaScript.</li>
                        <li><strong>Diseño Responsivo:</strong> Implementamos CSS y media queries para garantizar que la página web se vea y funcione correctamente en diferentes dispositivos y tamaños de pantalla.</li>
                        <li><strong>Bibliotecas Externas:</strong> Utilizamos la biblioteca &quot;particles.js&quot; para crear el efecto de partículas en la página de inicio.</li>
                        <li><strong>Optimización de Imágenes:</strong> Todas las imágenes se optimizaron para asegurarnos de que la página web se cargue de manera eficiente.</li>
                        <li><strong>Validación de Formularios:</strong> Implementamos una validación de formularios para garantizar que los usuarios ingresen información válida al ponerse en contacto con nuestro equipo.</li>
                      </ul>
                    </div>

                    <div className="mt-4 flex justify-center">
                      <button
                        type="button"
                        className="btn btn_form rounded-full border border-btn max-w-[170px] px-8 flex items-center justify-center overflow-hidden hoverBg botonName animate-pulse relative"
                        onClick={closeModal3}
                      >
                        Cerrar
                      </button>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
    
  );
}
