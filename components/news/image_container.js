"use client";
import styles from "./image_container.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import Nav from "../nav/nav";

const ImageContainer = ({ news }) => {
  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { duration: 2, type: "easeInOut" },
    },
    exit: {
      opacity: 0,
      transition: { duration: 2, type: "easeInOut" },
    },
  };

  const textvariant = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { duration: 2, type: "easeInOut" },
    },
    exit: {
      opacity: 0,
    },
  };

  const [imageIndex, setImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setImageIndex((prevIndex) => (prevIndex + 1) % news.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [news.length]);

  function nextStep() {
    setDirection(1);
    if (imageIndex === news.length - 1) {
      setImageIndex(0);
      return;
    }
    setImageIndex(imageIndex + 1);
  }

  function prevStep() {
    setDirection(-1);
    if (imageIndex === 0) {
      setImageIndex(news.length - 1);
      return;
    }
    setImageIndex(imageIndex - 1);
  }

  return (
    <section className={styles.container}>
      <AnimatePresence initial={false}>
        <motion.img
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          key={news[imageIndex].title}
          src={`/news/${news[imageIndex].image}`}
          alt={news[imageIndex].title}
          className={styles.img}
          custom={direction}
        />
      </AnimatePresence>
      <div className={styles.textcontainer}>
        <div key={news[imageIndex].title} className={styles.title}>
          {news[imageIndex].title.toUpperCase()}
        </div>
        <Link
          href={`/jaunumi/${news[imageIndex].ID}`}
          className={styles.buttondecoration}
        >
          <div className={styles.button}>LASĪT VAIRĀK</div>
        </Link>
      </div>
    </section>
  );
};
export default ImageContainer;
