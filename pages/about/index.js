import React, {useState} from "react";
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaJava,
  FaBootstrap,
  FaJenkins,
  FaAws,
  FaCloudflare
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMysql,
  SiDjango,
  SiTailwindcss,
  SiPython,
  SiRedis,
  SiGithubactions,
  SiDocker,
  SiOwasp,
  SiGraphql,
  SiKubernetes,
  SiBurpsuite,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import {TbBrandFramerMotion, TbBrandRedux} from 'react-icons/tb'
import {BiLogoSpringBoot} from 'react-icons/bi'
import CountUp from 'react-countup'
import CredentialSlider from "../../components/CredentialSlider";

const aboutData = [
  {
    title: 'conocimientos',
    info: [
      {
        title: 'Front-End',
        icons: [
          <span title="HTML" key="html"><FaHtml5 style={{ color: '#cc5104' }} /></span>,
          <span title="CSS" key="css"><FaCss3 style={{ color: '#0447cc' }} /></span>,
          <span title="Bootstrap" key="bootstrap"><FaBootstrap style={{ color: '#bd07e6' }} /></span>,
          <span title="Tailwind" key="tailwind"><SiTailwindcss style={{ color: 'lightblue', background: 'white' }} /></span>,
          <span title="Framer-motion" key="framer"><TbBrandFramerMotion style={{ color: '#8507e6' }} /></span>,
          <span title="JavaScript" key="javascript"><FaJs style={{ color: '#e6e207', background: 'black' }} /></span>,
          <span title="React.js" key="react"><FaReact style={{ color: 'lightblue', background: 'white' }} /></span>,
          <span title="Next.js" key="next"><SiNextdotjs /></span>,
          <span title="React-Redux" key="react-redux"><TbBrandRedux style={{ color: 'blueviolet' }} /></span>,
        ],
      },
      {
        title: 'Back-End',
        icons: [
          <span title="Python" key="python"><SiPython style={{ color: '#061e97' }} /></span>,
          <span title="Django" key="django"><SiDjango style={{ color: '#069742' }} /></span>,
          <span title="Java" key="java"><FaJava style={{ color: 'red' }} /></span>,
          <span title="SpringBoot" key="springboot"><BiLogoSpringBoot style={{ color: '#069742' }} /></span>,
          <span title="GraphQL" key="graphql"><SiGraphql style={{ color: '#cb42b6' }} /></span>
        ],
      },
      {
        title: 'DataBase',
        icons: [
          <span title="MySQL" key="mysql"><SiMysql style={{ color: '#061e97', background: 'white' }} /></span>,
          <span title="PostgreSQL" key="postgresql"><BiLogoPostgresql style={{ color: '#3c4c8d' }} /></span>,
          <span title="Redis" key="redis"><SiRedis style={{ color: 'orange' }} /></span>
        ],
      },
      {
        title: 'CI/CD',
        icons: [
          <span title="GitHub-Actions" key="githubactions"><SiGithubactions style={{ color: '#3857d4' }} /></span>,
          <span title="Jenkins" key="jenkins"><FaJenkins style={{ color: 'black', background: '#d43838' }} /></span>
        ]
      },
      {
        title: 'Contenedorizacion',
        icons: [
          <span title="Docker" key="docker"><SiDocker style={{ color: '#3857d4' }} /></span>,
          <span title="Kubernetes" key="kubernetes"><SiKubernetes style={{ color: '#3c4c8d' }} /></span>
        ]
      },
      {
        title: 'Cloud Hosting',
        icons: [
          <span title="Amazon Web Services" key="aws"><FaAws style={{ color: 'black', background: 'orange' }} /></span>,
        ]
      },
      {
        title: 'Seguridad',
        icons: [
          <span title="OWASP Top10" key="owasp"><SiOwasp style={{ color: 'black', background: '#ece4e4' }} /></span>,
          <span title="Burp Suite" key="burp suite"><SiBurpsuite style={{ color: '#d57f5a', background: 'black' }} /></span>,
          <span title="Cloudflare" key="cloudflare"><FaCloudflare style={{ color: 'orange', background: '#ece4e4' }} /></span>
        ]
      },
    ],
  },
  {
    title: 'experiencia',
    info: [
      {
        stage: 'As Freelancer:'
      },
      {
        title: 'UX/UI Designer - NaveSoftware',
        stage: 'Oct/2023 - Nov/2023',
      },
      {
        title: 'FrontEnd Developer - NaveSoftware',
        stage: 'Aug/2023 - Oct/2023',
      },
    ],
  },
  {
    title: 'certificados',
    info: [],
  },
]
  
const About = () => {
  const [index, setIndex] = useState(0);
  const [showCredentialSlider, setShowCredentialSlider] = useState(false);
  const handleItemClick = (itemIndex) => {
    setIndex(itemIndex);
    setShowCredentialSlider(itemIndex === 2);
  };
  
  return (
      <div className= 'h-full pt-20 pb-28 text-center xl:text-left'>
        <motion.div variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden' className="w-full h-full max-w-[750px] max-h-[600px] absolute bottom-0 -left-[150px] divAvatar avatarAbout">
          <div className='hidden xl:flex xl:max-w-none avatar translate-z-0'></div>
        </motion.div>
        <div className="w-[250px] h-full max-w-[550px] max-h-[600px] absolute xs:-top-[170px] xs:-left-[260px] lg:-bottom-[330px] lg:-right-[5px] xl:top-auto xl:left-auto xl:-bottom-[330px] xl:-right-[5px] divAvatar rotate-45">
          <div className='xl:flex xl:max-w-none sign translate-z-0 animate-pulse'></div>
        </div>
          <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
              <div className="flex-1 flex flex-col justify-center">
                <motion.h2 className="h2" variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden'>
                  Mi <span className="text-accent">historia</span>
                </motion.h2>
                <motion.p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 texto" variants={fadeIn('right', 0.4)} initial='hidden' animate='show' exit='hidden'>
                  Como entusiasta de la tecnología, he adquirido una sólida formación en desarrollo web full stack, respaldada por estudios certificados y una constante búsqueda 
                  de conocimiento autodidacta. Mi enfoque en el desarrollo de software y el diseño me ha permitido fusionar la estética con la funcionalidad y seguridad, creando productos digitales intuitivos, atractivos y seguros.
                </motion.p>
                <motion.div className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8" variants={fadeIn('right', 0.6)} initial='hidden' animate='show' exit='hidden'>
                  <div className="flex flex-1 xl:gap-x-6">
                    <div className="flex-1 relative after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                      <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                        <CountUp start={0} end={24} duration={5}/> +
                      </div>
                      <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] texto">
                        Meses de Experiencia
                      </div>
                    </div>
                    <div className="flex-1 relative after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                      <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                        <CountUp start={0} end={7} duration={5}/> 
                      </div>
                      <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] texto">
                        Desarrollos Personales
                      </div>
                    </div>
                    <div className="flex-1 relative after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                      <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                        <CountUp start={0} end={4} duration={5}/>
                      </div>
                      <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] texto">
                        Certificaciones
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              <motion.div className="flex flex-col w-full xl:max-w-[48%] h-[280px]" variants={fadeIn('left', 0.4)} initial='hidden' animate='show' exit='hidden'>
                  <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
                      {aboutData.map((item, itemIndex) => {
                          return (
                              <div 
                                  key={itemIndex} 
                                  className={`texto cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-[var(--letters)] after:absolute after:-bottom-1 after:left-0 
                                    ${index === itemIndex ? 'text-accent after:w-[100%] active-title animate-pulse after:animate-pulse after:transition-all after:duration-300' : ''}`}                                                    
                                  onClick={() => handleItemClick(itemIndex)}
                              >
                                  {item.title}
                              </div>
                          )
                      })}
                  </div>
                  <div className="py-2 xs:pb-36 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
                    {aboutData[index].info.map((item, itemIndex) => {
                      return (
                        <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center">
                          <div className="font-light mb-2 md:mb-0 texto">{item.title}</div>
                          <div className="hidden md:flex texto">-</div>
                          <div className="texto">{item.stage}</div>
                          <div className="flex gap-x-1 mt-2">{item.icons && item.icons.map((icon, iconIndex) => <div key={iconIndex} className="text-2xl">{icon}</div>)}</div>
                        </div>
                      );
                    })}
                    {showCredentialSlider && index === 2 && (
                      <div className='w-full xl:max-w-[75%]'>
                        <CredentialSlider />
                      </div>  )
                    }     
                  </div>
              </motion.div>
          </div>
      </div>
  )
};

export default About;