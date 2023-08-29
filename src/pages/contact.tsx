import { useState } from "react";
import type { NextPage } from "next";
import { motion } from "framer-motion";
import { staggerContainer, planetVariants, textVariant } from "@/utils/motion";
import styles from "@/styles";
import { BigTitle } from "@/modules/lib/textStyle";

// import Calendara from "@/components/calendartest";

const Contact: NextPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        msg: form.msg,
      }),
    })
      .then((res) => {
        console.log("Response received");
        if (res.status === 200) {
          console.log("Response succeeded!");
          alert("メッセージが送信されました");
        } else {
          console.log(`Error: Status Code ${res.status}`);
        }
      })
      .catch((e) => {
        console.log(`Error: ${e}`);
      });
  };

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
      <div
        className="bg-white w-[60vw] h-[100vh]"
        style={{ borderRadius: "30px", margin: " 0 auto 60px" }}
      >
        <form>
          <input
            onChange={(e) => {
              const val = e.currentTarget.value;
              setForm((props) => ({
                ...props,
                name: val !== null ? val : "",
              }));
            }}
            value={form.name}
            name="name"
            type="text"
            className="feedback-input"
            placeholder="Name"
          />
          <input
            onChange={(e) => {
              const val = e.currentTarget.value;
              setForm((props) => ({
                ...props,
                email: val !== null ? val : "",
              }));
            }}
            name="email"
            type="text"
            className="feedback-input"
            placeholder="Email"
          />
          <textarea
            onChange={(e) => {
              const val = e.currentTarget.value;
              setForm((props) => ({
                ...props,
                msg: val !== null ? val : "",
              }));
            }}
            name="text"
            className="feedback-input"
            placeholder="Comment"
          ></textarea>
          <input
            onClick={async (e) => {
              await handleSubmit(e);
            }}
            type="submit"
            value="SUBMIT"
          />
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
