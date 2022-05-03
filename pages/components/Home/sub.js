import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import {
  motion,
  useTransform,
  useViewportScroll,
  useElementScroll,
} from "framer-motion";
import styles from "../../../styles/Home.module.css";
import SubItem from "./sub/subItem";
import Debug from "./debug";

let elementTop;
let elementHeight;

const Sub = () => {
  // const { scrollY, scrollYProgress } = useViewportScroll();
  // const [scrollPercentageStart, setScrollPercentageStart] = useState(0);
  // const [scrollPercentageEnd, setScrollPercentageEnd] = useState(0);
  // const op = useTransform(
  //   scrollYProgress,
  //   [scrollPercentageStart, scrollPercentageEnd],
  //   [0, 1]
  // );
  return (
    <div className={styles.subCon} id="subCon">
      {/* <Debug info={elementTop} /> */}
      <div className={styles.bg}></div>
      <div className={styles.subInner}>
        <div className={styles.subTitle}>實時訂閲數</div>
        <motion.div
          className={styles.subConInner}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: .5 } }}
          viewport={{ margin: "-15% 0px" }}
        >
          <SubItem
            url="https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&hl=fr&id=UCcrhFT95jH5XqVVPyBhRbrA&key=AIzaSyAdG9n0Y_ojAJV6-ffClxb4W7EsCLUBhAk"
            img="/jffticon.png"
            name="JFFT"
            param="https://www.youtube.com/c/JFFTHK"
          />
          <SubItem
            url="https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&hl=fr&id=UC3aipgNToMvs2pFaQyaM_hg&key=AIzaSyAdG9n0Y_ojAJV6-ffClxb4W7EsCLUBhAk"
            img="/jfflive.png"
            name="JFFLive"
            param="https://www.youtube.com/c/JFFLiveChannel"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Sub;
