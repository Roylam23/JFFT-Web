import React from "react";
import { motion } from "framer-motion";
import styles from "../../../styles/Home.module.css";
import SubItem from "./sub/subItem";
const Sub = () => {
  return (
    <motion.div className={styles.subCon}>
      <div className={styles.bg}></div>
      <div className={styles.subInner}>
        <div className={styles.subTitle}>實時訂閲數</div>
        <div className={styles.subConInner}>
          <SubItem
            url="https://api.socialcounts.org/youtube-live-subscriber-count/UCcrhFT95jH5XqVVPyBhRbrA"
            img="/jffticon.png"
            name="JFFT"
            param="0"
          />
          <SubItem
            url="https://api.socialcounts.org/youtube-live-subscriber-count/UC3aipgNToMvs2pFaQyaM_hg"
            img="/jfflive.png"
            name="JFFLive"
            param="1"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Sub;
