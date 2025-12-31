"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          form.reset();
          setTimeout(() => setSuccess(false), 4000);
        },
        (error: any) => {
          console.error("Email sending error:", error);
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white overflow-hidden"
    >
      {/* 🌌 Animated Star Background */}
      <div className="absolute inset-0 z-0">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* 📝 Left: Contact Form */}
        <motion.form
          onSubmit={sendEmail}
          className="flex-1 bg-gradient-to-br from-gray-800/70 via-gray-900/60 to-gray-800/70 backdrop-blur-md rounded-3xl p-10 shadow-2xl flex flex-col gap-6 border border-pink-600/40"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-pink-400 animate-pulse">
            Contact Me
          </h2>
          <p className="text-gray-300">
            Have a project in mind or just want to say hi? Drop me a message!
          </p>

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="p-4 rounded-xl bg-gray-900 border border-gray-700 focus:border-pink-500 focus:ring focus:ring-pink-500/30 outline-none transition-all duration-300"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="p-4 rounded-xl bg-gray-900 border border-gray-700 focus:border-pink-500 focus:ring focus:ring-pink-500/30 outline-none transition-all duration-300"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="p-4 rounded-xl bg-gray-900 border border-gray-700 focus:border-pink-500 focus:ring focus:ring-pink-500/30 outline-none transition-all duration-300 resize-none h-40"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-pink-500 via-purple-600 to-pink-700 py-3 rounded-xl font-semibold hover:scale-105 hover:shadow-xl transition-transform duration-300"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <motion.p
              className="text-green-400 font-medium mt-2 text-center relative z-10 confetti-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ✅ Message sent successfully!
            </motion.p>
          )}
        </motion.form>

        {/* 🖼️ Right: Image */}
        <motion.div
          className="flex-1 flex items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="w-full max-w-md rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500 border border-pink-500/30">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkXwlplTd4OJoifmruNfJIx_eaVyCeQgnx-A&s"
              alt="Contact Sneara"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* 🌌 Stars Animation + Confetti */}
      <style jsx>{`
        .stars,
        .stars2,
        .stars3 {
          position: absolute;
          width: 100%;
          height: 100%;
          background-repeat: repeat;
          background-position: 0 0;
          z-index: 0;
        }
        .stars {
          background-image: radial-gradient(white 1px, transparent 1px);
          background-size: 3px 3px;
          animation: moveStars 60s linear infinite;
          opacity: 0.2;
        }
        .stars2 {
          background-image: radial-gradient(white 1px, transparent 1px);
          background-size: 2px 2px;
          animation: moveStars 90s linear infinite;
          opacity: 0.15;
        }
        .stars3 {
          background-image: radial-gradient(white 1px, transparent 1px);
          background-size: 1px 1px;
          animation: moveStars 120s linear infinite;
          opacity: 0.1;
        }
        @keyframes moveStars {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 10000px 10000px;
          }
        }

        /* 🎉 Confetti effect text */
        .confetti-text {
          position: relative;
          display: inline-block;
        }
        .confetti-text::after {
          content: "🎉";
          position: absolute;
          top: -10px;
          left: -10px;
          animation: floatConfetti 1s infinite;
        }
        @keyframes floatConfetti {
          0% { transform: translate(0,0) rotate(0deg); opacity:1; }
          50% { transform: translate(10px,-10px) rotate(180deg); opacity:0.5; }
          100% { transform: translate(0,0) rotate(360deg); opacity:1; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
