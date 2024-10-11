import React from 'react';
import { BsArrowRight } from 'react-icons/bs'; 
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import emailjs from 'emailjs-com';
import { Toaster, toast } from 'react-hot-toast';
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
  const [recaptchaToken, setRecaptchaToken] = React.useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!recaptchaToken) {
      toast.error('Por favor completa el reCAPTCHA');
      return;
    }

    emailjs
      .sendForm(
        'service_22bdgmb',
        'template_2kuviqs',
        e.target,
        'XFpkBCGwlHDJ6v58O',
        {
          'g-recaptcha-response': recaptchaToken,
        }
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text); 
          toast.success('¡Mensaje enviado exitosamente!', {
            duration: 3000, 
            style: {
              border: '3px solid #0bec30', 
              padding: '16px'
            }
          })
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('Hubo un error al enviar el mensaje', {
            duration: 3000,
            style: {
              border: '3px solid #ec0b0b',
              padding: '16px',
            },
          });
        }
      );

    e.target.reset();
  };

  const handleRecaptcha = (token) => {
    setRecaptchaToken(token);
  };

  return (
    <div className="h-full py-10 pb-20">
      <Toaster />
      <div className="container mx-auto text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px] bg-card rounded-lg p-8">
          <motion.h2
            variants={fadeIn('down', 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Conectemos<span className="text-accent animate-pulse">.</span>
          </motion.h2>

          <form className="flex-1 flex flex-col gap-6 w-full mx-auto" onSubmit={sendEmail}>
            <motion.div
              variants={fadeIn('right', 0.7)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex flex-col xs:flex-col sm:flex-row gap-x-6 w-full"
            >
              <input
                className="input xs:mb-6 sm:mb-0 texto"
                type="text"
                placeholder="Nombre"
                name="from_name"
                required
              />
              <input
                className="input texto"
                type="email"
                placeholder="Email"
                name="reply_to"
                required
              />
            </motion.div>

            <motion.input
              variants={fadeIn('right', 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="input texto"
              type="text"
              placeholder="Asunto"
              name="subject"
            />
            <motion.textarea
              variants={fadeIn('right', 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="textarea texto"
              placeholder="Mensaje"
              name="message"
              required
            ></motion.textarea>

            <ReCAPTCHA
              sitekey="6LdUpF4qAAAAAAZHu3GmmpPmT3dNS0yBa62JlSC7"
              onChange={handleRecaptcha}
            />

            <motion.button
              variants={fadeIn('right', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              type="submit"
              className="btn rounded-full border border-btn max-w-[170px] px-8 flex items-center justify-center overflow-hidden hoverBg group animate-pulse relative z-20"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 text-accent botonName">
                ENVIAR
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </motion.button>
          </form>
        </div>
      </div>
      <div className="w-full h-full max-w-[750px] max-h-[600px] absolute xs:-top-[310px] xs:-left-[260px] xs:rotate-90 xl:top-auto xl:-bottom-[220px] xl:-left-[350px] divAvatar xl:rotate-0">
        <div className="xl:flex xl:max-w-none triangle translate-z-0 animate-pulse"></div>
      </div>
    </div>
  );
};

export default Contact;
