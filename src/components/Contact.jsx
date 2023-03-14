import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

// trex7T3zXDFxjjvmt
// template_bbgfvwj
// service_p1xkfcl
const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_p1xkfcl",
        "template_bbgfvwj",
        {
          from_name: form.name,
          to_name: "Rafiu",
          from_email: form.email,
          to_email: "md.rafiu.islam@g.bracu.ac.bd",
          message: form.message,
        },
        "trex7T3zXDFxjjvmt"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);

          alert("Something went wrong!");
        }
      );
  };

  return (
    <div className="xl:flex-row xl:mt-12 flex flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 flex-[.5] rounded-2xl p-8 "
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="what's your name?"
              className="py-4 px-6 bg-tertiary font-medium rounded-lg placeholder:text-secondary text-white border-none outline-none

             "
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="what's your email?"
              className="py-4 px-6 bg-tertiary font-medium rounded-lg placeholder:text-secondary text-white border-none outline-none

             "
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              type="text"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Please type your message"
              className="py-4 px-6 bg-tertiary font-medium rounded-lg placeholder:text-secondary text-white border-none outline-none

             "
            />
          </label>
          <button
            type="submit"
            className="py-4 px-8 w-fit bg-tertiary text-white font-bold outline-none shadow-md shadow-primary rounded-md hover:bg-black-200"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
