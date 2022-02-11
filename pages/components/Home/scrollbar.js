import React from "react";
import { motion } from "framer-motion";
import styles from "../../../styles/Home.module.css";

const Scrollbar = () => {
  let width;
  let width1;
  let width2;
  if (typeof window !== "undefined") {
    width = document.querySelector("#scroll").scrollWidth;
    width1 = document.querySelector("#scroll1").scrollWidth;
    width2 = document.querySelector("#scroll2").scrollWidth;
  }
  console.log(width)
  return (
    <motion.div className={styles.textCon}>
      {/* <div className={styles.bg1}></div> */}
      <div className={styles.frameRe} id={styles.frame}></div>
      <div className={styles.frame} id={styles.frame}></div>
      <motion.div className={styles.text1}>
        <motion.span
          className={styles.scroll}
          initial={{ x: 0 }}
          animate={{
            x: -width,
            transition: { repeat: Infinity, duration: 25, ease: "linear" },
          }}
        >
          <span id="scroll">
            Firm&nbsp; 0尊&nbsp; 是&nbsp; Can Cheaper ?&nbsp; 不如?&nbsp;
            就係咁囉&nbsp; is侮辱&nbsp; 就係咁囉&nbsp; 好撚棘&nbsp; 咩老環&nbsp;
            拍定手先啦&nbsp;
          </span>
          <span>
            Firm&nbsp; 0尊&nbsp; 是&nbsp; Can Cheaper ?&nbsp; 不如?&nbsp;
            就係咁囉&nbsp; is侮辱&nbsp; 就係咁囉&nbsp; 好撚棘&nbsp; 咩老環&nbsp;
            拍定手先啦 &nbsp;
          </span>
        </motion.span>
        <motion.span
          className={styles.scroll}
          initial={{ x: 0 }}
          animate={{
            x: -width1,
            transition: { repeat: Infinity, duration: 27, ease: "linear" },
          }}
        >
          <span id="scroll1">
            酒仙酒仙&nbsp; 拿拿趣&nbsp; 做畀你&nbsp; 我屌你老母呀 ?&nbsp; 不如
            ?&nbsp; 哭撚左&nbsp; 夠做埋黎&nbsp; 含&nbsp; 0Firm&nbsp; Let’s think
          </span>
          <span>
            酒仙酒仙&nbsp; 拿拿趣&nbsp; 做畀你&nbsp; 我屌你老母呀 ?&nbsp; 不如
            ?&nbsp; 哭撚左&nbsp; 夠做埋黎&nbsp; 含&nbsp; 0Firm&nbsp; Let’s
            think&nbsp;
          </span>
        </motion.span>
        <motion.span
          className={styles.scroll}
          initial={{ x: 0 }}
          animate={{
            x: -width2,
            transition: { repeat: Infinity, duration: 25, ease: "linear" },
          }}
        >
          <span id="scroll2">
            0興&nbsp; 小癲&nbsp; 咩老環&nbsp; Don’t know 做 what&nbsp;
            日向0似&nbsp; 招&nbsp; 62520&nbsp; 加分哦
          </span>
          <span>
            0興&nbsp; 小癲&nbsp; 咩老環&nbsp; Don’t know 做 what&nbsp;
            日向0似&nbsp; 招&nbsp; 62520&nbsp; 加分哦&nbsp;
          </span>
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default Scrollbar;
