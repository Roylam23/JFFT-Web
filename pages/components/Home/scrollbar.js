import React from "react";
import { useViewportScroll, motion, useTransform } from "framer-motion";
import styles from "../../../styles/Home.module.css";

const Scrollbar = () => {
  const { scrollY } = useViewportScroll();
  const x1 = useTransform(scrollY, [100, 2500], ["10%", "-80%"]);
  const x2 = useTransform(scrollY, [100, 5000], ["-70%", "20%"]);
  const x3 = useTransform(scrollY, [100, 2500], ["5%", "-20%"]);
  const op = useTransform(scrollY, [180, 450], [0, 1]);
  return (
    <motion.div className={styles.textCon}>
      <div className={styles.frameRe} id={styles.frame}></div>
      <div className={styles.frame} id={styles.frame}></div>
      <motion.div className={styles.text1}>
        <motion.span className={styles.scroll} style={{ x: x1, opacity: op }}>
          Firm&nbsp; 0尊&nbsp; 是&nbsp; Can Cheaper ?&nbsp; 不如?&nbsp;
          就係咁囉&nbsp; is侮辱&nbsp; 就係咁囉&nbsp; 好撚棘&nbsp; 咩老環&nbsp;
          拍定手先啦
        </motion.span>
        <motion.span className={styles.scroll} style={{ x: x2, opacity: op }}>
          酒仙酒仙&nbsp; 拿拿趣&nbsp; 做畀你&nbsp; 我屌你老母呀 ?&nbsp; 不如
          ?&nbsp; 哭撚左&nbsp; 夠做埋黎&nbsp; 含&nbsp; 0Firm&nbsp; Let’s
          think&nbsp;
        </motion.span>
        <motion.span className={styles.scroll} style={{ x: x3, opacity: op }}>
          0興&nbsp; 小癲&nbsp; 咩老環&nbsp; Don’t know 做 what&nbsp;
          日向0似&nbsp; 招&nbsp; 62520&nbsp; 加分哦
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default Scrollbar;