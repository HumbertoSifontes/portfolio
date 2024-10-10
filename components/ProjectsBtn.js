import { useState } from 'react';
import Link from 'next/link'

const ProjectsBtn = () => {
  const [efectoActivo, setEfectoActivo] = useState(false);

  const activarEfecto = () => {
    setEfectoActivo(true);
    setTimeout(() => {
      setEfectoActivo(false);
    }, 2000)
  };

  return (
    <Link href={'/work'}>
      <button
        className={`btn_form ${efectoActivo ? 'activo' : ''} btn rounded-full border border-accent max-w-[170px] px-8 flex items-center justify-center overflow-hidden group animate-pulse duration-75`}
        onClick={() => {
          activarEfecto();
        }}
        type="button"
      >
        <span className='botonName'>Proyectos</span>
      </button>
    </Link>
  );
}


export default ProjectsBtn;
