import type { NextPage } from "next";
import { motion } from "framer-motion";
import { staggerContainer, planetVariants, textVariant } from "@/utils/motion";
import { BigTitle, ContactHeadLine } from "@/modules/lib/textStyle";
import styles from "@/styles/Contact.module.css";
import Form from "@/components/Form";
import ContactHero from "@/components/ContactHero";
import GetInTouch from "@/components/Contact/GetInTouch";

// import Calendara from "@/components/calendartest";

const Contact: NextPage = () => {
  return (
    <motion.div
      //@ts-ignore
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="relative"
    >
      <motion.h1
        variants={textVariant(1.1)}
        style={{
          textAlign: "center",
          color: "black",
          zIndex: 10,
          margin: "0 20px 0 20px",
        }}
      >
        <BigTitle>CONTACT</BigTitle>
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
