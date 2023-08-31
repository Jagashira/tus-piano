import styles from "@/styles/Contact/Contact.module.css";
import { Icon } from "@iconify/react";
import { useState } from "react";
import GetInTouch from "./GetInTouch";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const handleSubmit = (e: any) => {
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
    <>
      <GetInTouch />
      <form>
        <div className={styles.inputBox}>
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
            placeholder="Name"
          />
          <Icon icon="ph:user-fill" className={styles.icon} />
        </div>
        <div className={styles.inputBox}>
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
            placeholder="Email"
          />
          <Icon icon="ic:baseline-email" className={styles.icon} />
        </div>
        <div className={styles.inputBox}>
          <textarea
            onChange={(e) => {
              const val = e.currentTarget.value;
              setForm((props) => ({
                ...props,
                msg: val !== null ? val : "",
              }));
            }}
            name="text"
            placeholder="Comment"
            className={styles.inputBox}
          ></textarea>
        </div>
        <button
          onClick={async (e) => {
            await handleSubmit(e);
          }}
          type="submit"
          value="SUBMIT"
          className={styles.btn}
        >
          SUBMIT
        </button>
      </form>
    </>
  );
};

export default Form;
