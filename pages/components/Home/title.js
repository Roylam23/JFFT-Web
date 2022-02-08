import React from "react";
import { motion } from "framer-motion";
import styles from "../../../styles/Home.module.css";
import IconBox from "./iconBox";

const Title = () => {
  const sec = 5;
  return (
    <motion.div
      className={styles.title}
      initial={{ bottom: "calc(75px + 1vw)" }}
      animate={{
        bottom: "calc(200px + 10vw)",
        transition: { delay: sec + 3, duration: 1 },
      }}
      viewport={{ once: true }}
    >
      <motion.span
        className={styles.titleTop}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.75,
            delay: sec,
          },
        }}
        viewport={{ once: true }}
        id={styles.top}
      >
        全港最大黃賭毒邪教
      </motion.span>
      <motion.span
        className={styles.titleTop}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          // width: ["30vw", "20vw"],
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.75,
            delay: sec + 0.5,
            // width: { delay: 6, duration: 1.5, ease: "easeInOut" },
          },
        }}
        viewport={{ once: true }}
      >
        <motion.span
          id={styles.name}
          className={styles.name}
          whileInView={{
            color: "#E9007F",
          }}
        >
          JFFT
        </motion.span>
      </motion.span>
      <motion.span
        className={styles.titleMain}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.75, delay: sec + 1 },
        }}
        viewport={{ once: true }}
      >
        加入JFFT永遠都唔會遲
      </motion.span>
      <IconBox />
    </motion.div>
  );
};

export default Title;
