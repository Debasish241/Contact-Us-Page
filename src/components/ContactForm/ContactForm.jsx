import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdCall, MdEmail, MdMessage } from "react-icons/md";

export default function ContactForm() {
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [text, setText] = useState(" ");

  const onViaCall = () => {
    console.log("from call");
  };
  const onViaMessage = () => {
    console.log("from message");
  };

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            onClick={onViaMessage}
            name="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize={24} />}
          />
          <Button
            onClick={onViaCall}
            name="VIA CALL"
            icon={<MdCall fontSize={24} />}
          />
        </div>
        <Button
          isoutline={true}
          name="VIA EMAIL"
          icon={<MdEmail fontSize={24} />}
        />
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows={7} />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button name="SUBMIT BUTTON" />
          </div>
          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>
      <div className={styles.Contact_image}>
        <img src="/images/contact.svg" alt="contact-image" />
      </div>
    </section>
  );
}
