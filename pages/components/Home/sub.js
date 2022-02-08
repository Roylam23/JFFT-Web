import React from "react";
import { motion } from "framer-motion";
import styles from "../../../styles/Home.module.css";
import SubItem from "./sub/subItem";

const Sub = () => {
  return (
    <motion.div className={styles.subCon} style={{ height: "auto" }}>
      <div className={styles.subTitle}>
        實時訂閲&nbsp;
        <span style={{ fontWeight: 500, fontSize: "calc(12px + .5vw)" }}>
          beta
        </span>
      </div>
      <div className={styles.subConInner}>
        <SubItem
          url="https://api.socialcounts.org/youtube-live-subscriber-count/UCcrhFT95jH5XqVVPyBhRbrA"
          img="/jffticon.png"
          name="JFFT"
        />
        <SubItem
          url="https://api.socialcounts.org/youtube-live-subscriber-count/UC3aipgNToMvs2pFaQyaM_hg"
          img="/jfflive.png"
          name="JFFLive"
        />
      </div>
    </motion.div>
  );
};

export default Sub;
