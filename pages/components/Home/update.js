import React from "react";
import { useViewportScroll, motion, useTransform } from "framer-motion";
import styles from "../../../styles/Home.module.css";

const Update = () => {
  return (
    <motion.div
      className={styles.textCon1}
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
        更多內容將會陸續更新<br></br> <br></br>
        祝各位新年快樂 ! <br></br>
        <br></br>
        加入JFFT永遠都唔會遲！
      </motion.div>
    </motion.div>
  );
};

export default Update;
