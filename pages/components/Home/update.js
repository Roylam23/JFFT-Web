import React from "react";
import { motion } from "framer-motion";
import styles from "../../../styles/Home.module.css";

const Update = () => {
  return (
    <motion.div
      className={styles.textCon}
      id={styles.textCon}
      style={{ height: "auto" }}
    >
      <div className={styles.frameRe} id={styles.frame}></div>
      <div className={styles.frame} id={styles.frame}></div>
      <motion.div
        className={styles.text1}
        initial={{ y: 25, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { duration: 1.5 },
        }}
        viewport={{ once: true }}
        style={{
          fontWeight: "600",
        }}
      >
        網站初期設計少柒敬請見諒 <br></br>
        <br></br>
        內容會因應功課進度而更新<br></br>
        <br></br>
        加入JFFT永遠都唔會遲！
      </motion.div>
    </motion.div>
  );
};

export default Update;
