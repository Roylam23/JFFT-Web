import React from "react";
import { motion } from "framer-motion";
import styles from "../../../styles/Home.module.css";

const Update = () => {
  return (
    <motion.div
      className={styles.updateCon}
    >
      <div className={styles.frameRe} id={styles.frame}></div>
      <div className={styles.frame} id={styles.frame}></div>
      <motion.div
        className={styles.text2}
        initial={{ y: 25, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { duration: .75 },
        }}
        viewport={{ margin: "-20% 0%" }}
        style={{
          fontWeight: "600",
        }}
      >
        <span>網站初期設計簡陋敬請見諒</span>
        <span>網站預期於暑假期間進行更新</span>
        <span>加入JFFT永遠都唔會遲！</span>
        <span>感謝JFFT為各位會然帶黎歡樂</span>
      </motion.div>
    </motion.div>
  );
};

export default Update;
