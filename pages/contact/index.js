// components
import Circles from "/components/Circles";

//icons
import { BsArrowRight } from "react-icons/bs";

//framer
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../../variants";

//emailjs
import emailjs from 'emailjs-com';

const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hk8cuhl', 'template_mjuw8og', e.target, 'jFw_yxBWpqtWh2r9g')
      .then((result) => {
          console.log(result.text);
          alert('Message envoyé avec succès !');
      }, (error) => {
          console.log(error.text);
          alert('Erreur lors de l\'envoi du message.');
      });
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-2-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            onSubmit={sendEmail}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
            <input type="text" name="name" placeholder="name" className="input w-full" required />
            <input type="email" name="email" placeholder="email" className="input w-full" required />
            </div>
            <input type="text" name="subject" placeholder="subject" className="input" required />
            <textarea name="message" placeholder="message" className="textarea" required></textarea>
            <button
              className="btn btn rounded-full border border-white/50 max-w-[170px] 
              px-8 transition-all duration-300 flex items-center justify-center 
              overflow-hidden hover:border-accent group"
              type="submit"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let's talk
              </span>
              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex
                group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
