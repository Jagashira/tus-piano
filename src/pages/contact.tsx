import type { NextPage } from "next";
import { motion } from "framer-motion";
import { staggerContainer, planetVariants, textVariant } from "@/utils/motion";
import { BigTitleContact } from "@/modules/lib/textStyle";
import styles from "@/styles/Contact/Contact.module.css";
import Form from "@/components/Contact/Form";
import ContactHero from "@/components/Contact/ContactHero";

const Contact: NextPage = () => {
  return (
    <motion.div
      //@ts-ignore
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={styles.wrapper}
    >
      <motion.h1 variants={textVariant(1.1)} className={styles.headline}>
        <BigTitleContact>CONTACT</BigTitleContact>
      </motion.h1>

      <div className={styles.contactContainer}>
        <div className={styles.subcontainer}>
          <div className={styles.left}>
            <Form />
          </div>
          <div className={styles.right}>
            <ContactHero />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
