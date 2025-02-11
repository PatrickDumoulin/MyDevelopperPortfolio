import { useRouter } from 'next/router';
import { translations } from '../../translations';

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
  const router = useRouter();
  const { locale } = router;
  const t = translations[locale];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hk8cuhl', 'template_mjuw8og', e.target, 'jFw_yxBWpqtWh2r9g')
      .then((result) => {
        console.log(result.text);
        alert(t.contact.success);
      }, (error) => {
        console.log(error.text);
        alert(t.contact.error);
      });
  };

  return (
    <div className="h-full bg-gradient-to-b from-[#0B1221] to-[#142237]">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            {t.contact.title}<span className="text-accent">.</span>
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
              <input
                type="text"
                name="name"
                placeholder={t.contact.name}
                className="input"
              />
              <input
                type="email"
                name="email"
                placeholder={t.contact.email}
                className="input"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder={t.contact.subject}
              className="input"
            />
            <textarea
              name="message"
              placeholder={t.contact.message}
              className="textarea"
            ></textarea>
            <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                {t.contact.send}
              </span>
              <BsArrowRight className=" -translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
