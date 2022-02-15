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
  const ref = useRef();
  const { scrollY, scrollYProgress } = useViewportScroll();
  const [scrollPercentageStart, setScrollPercentageStart] = useState(0);
  const [scrollPercentageEnd, setScrollPercentageEnd] = useState(0);
  const op = useTransform(
    scrollYProgress,
    [scrollPercentageStart, scrollPercentageEnd],
    [0, 1]
  );
  useLayoutEffect(() => {
    // Get the distance from the start of the page to the element start
    document.addEventListener("scroll", () => {
      const rect = ref.current.getBoundingClientRect();
      console.log(rect);
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      const offsetStart = rect.top + scrollTop;
      const offsetEnd = offsetStart + rect.height;

      const elementScrollStart = offsetStart / document.body.clientHeight;
      const elementScrollEnd = offsetEnd / document.body.clientHeight;

      setScrollPercentageStart(elementScrollStart);
      setScrollPercentageEnd(elementScrollEnd);
    });
  }, []);
  return (
    <div ref={ref} className={styles.subCon} id="subCon">
      {/* <Debug info={elementTop} /> */}
      <div className={styles.bg}></div>
      <div className={styles.subInner}>
        <div className={styles.subTitle}>實時訂閲數</div>
        <motion.div
          className={styles.subConInner}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{margin: "-25% 0px"}}
        >
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
        </motion.div>
      </div>
    </div>
  );
};

export default Sub;
