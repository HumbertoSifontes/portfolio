import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const TaskApp = () => {
  return (
    <>
      <div className="h-full pt-8 pb-36">
        <div className="container mx-auto sm-screen-w">
          <div className="flex flex-col xl:flex-row gap-x-8">
            <div className="text-center flex xl:max-w-[65%] flex-col xl:text-left mb-4 xl:mb-0">
              <div className="w-full">
                <motion.h3
                  variants={fadeIn("down", 0.2)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="h3 texto"
                >
                  Lista de Tareas
                  <span className="text-accent animate-pulse">.</span>
                </motion.h3>
                <motion.div
                    variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="w-full mx-auto xl:mx-0 mb-10 xl:mb-8 texto"></motion.div>
                <p className='texto'>
                    Desarrollé el sitio web con{" "}
                    <span className="text-accent text-2xl leading-6 mb-8 font-bold fullstack animate-pulse">
                        React.js 
                    </span>
                    ,Redux y React Router resultando en una SPA (Single Page Application). 
                    Diseñada para gestionar tareas. La aplicación utiliza el almacenamiento local para la persistencia de datos, incluso después de refrescar la página, e incorpora bibliotecas adicionales para elementos decorativos en la interfaz de usuario.
                  <br />
                  <br />
                  <h3 className="text-lg font-medium leading-6 texto">
                    Funcionalidades destacadas
                  </h3>
                  <div className="mt-2 text-md">
                      <ul className="list-disc list-inside">
                        <li className="text-lg font-small font-light texto"><strong>Aplicación de Página Única (SPA): </strong > Este proyecto aprovecha React y React Router para crear una experiencia de página única continua, mejorando la navegación y la interacción del usuario.</li>
                        <li className="text-lg font-small font-light texto"><strong>Gestión de Estado con Redux:</strong> Redux se utiliza para gestionar de manera eficiente el estado de la aplicación, permitiendo cambios de estado centralizados y predecibles.</li>
                        <li className="text-lg font-small font-light texto"><strong>Datos Persistentes usando Almacenamiento Local:</strong> La aplicación emplea el almacenamiento local del navegador para guardar los datos de las tareas, asegurando que las tareas se conserven incluso si la página se refresca o el navegador se cierra.</li>
                        <li className="text-lg font-small font-light texto"><strong>Elementos Decorativos en la Interfaz de Usuario:</strong> Se integraron bibliotecas especializadas para mejorar el atractivo visual de la aplicación, haciendo que la interfaz sea más atractiva y fácil de usar.</li>
                      </ul>
                    </div>
                </p>
              </div>
            </div>

            <motion.div
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="w-full flex items-center justify-center xl:w-[23vw]"
            >
              <Link
                href={"https://proyectofinalfrontendfiuba.netlify.app"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative rounded-lg overflow-hidden group">
                  <div className="flex items-center justify-center relative overflow-hidden">
                    <Image
                      src={"/thumb12.png"}
                      width={500}
                      height={300}
                      alt="work"
                    />
                    <div className="screen"></div>
                    <div className="absolute bottom-1 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                      <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                        <div className="delay-100">Ir</div>
                        <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                          al Proyecto
                        </div>
                        <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                          <BsArrowRight />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
          <div className="w-[250px] h-full max-w-[550px] max-h-[600px] absolute xs:-top-[170px] xs:-left-[260px] lg:-bottom-[330px] lg:-right-[5px] xl:top-auto xl:left-auto xl:-bottom-[330px] xl:-right-[5px] divAvatar rotate-45">
            <div className="xl:flex xl:max-w-none sign translate-z-0 animate-pulse"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskApp;
