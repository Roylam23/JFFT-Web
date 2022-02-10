import React from "react";
import styles from "../../../styles/Home.module.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const shows = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  out: (i) => {
    const delay = i * 0.1;
    return {
      opacity: 0,
      x: 20,
      zIndex: 70,
      transition: {
        delay: delay,
        duration: 0.5,
        zIndex: { delay: 0 },
      },
    };
  },
  before: (i) => {
    const delay = 8.75 + i * 0.2;
    return {
      opacity: 1,
      x: 0,
      zIndex: 80,
      transition: {
        delay: delay,
        duration: 1,
        zIndex: { delay: 0 },
      },
    };
  },
  visible: (i) => {
    const delay = 0.5 + i * 0.1;
    return {
      opacity: 1,
      x: 0,
      zIndex: 80,
      transition: {
        delay: delay,
        duration: 0.5,
        zIndex: { delay: 0 },
      },
    };
  },
};

const lives = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: (i) => {
    const delay = i * 0.1;
    return {
      opacity: 0,
      x: 20,
      zIndex: 70,
      transition: {
        delay: delay,
        duration: 0.5,
        zIndex: { delay: 0 },
      },
    };
  },
  out: (i) => {
    const delay = 0.5 + i * 0.1;
    return {
      opacity: 1,
      x: 0,
      zIndex: 80,
      transition: {
        delay: delay,
        duration: 0.5,
        zIndex: { delay: 0 },
      },
    };
  },
};

const options = {
  unclick: {
    y: [0, -10, 0, -5, 0],
    transition: {
      times: [0, 0.7, 0.8, 0.9, 1],
      duration: 0.9,
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
  clicked: {
    y: 0,
    opacity: 1,
  },
};

let livess = [
  "https://i.ytimg.com/vi/xsWB7FWrXlE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCgC4Vk5qc9iqi88eRZsOKOY_u0ZA",
  "https://i.ytimg.com/vi/zIt9dj3b1-4/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDvL5xvDKcjPVQ2ANGvX1eSV_iWIg",
  "https://i.ytimg.com/vi/UdzV0C5dMHc/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATk-CfWQy4aMo7GLa-5JsvmvhxpA",
  "https://i.ytimg.com/vi/58cWuzfqu7c/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD3aY8cP-j0U6mVRwYvCEFZG1TUmg",
  "https://i.ytimg.com/vi/3LIcp4qE2zs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCy9-SFLk8TlcwX6DNCb6VCJXqUlQ",
  "https://i.ytimg.com/vi/wFDgq1kValk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDeLZPsvcYUIVZDcbO-WvZaqusIpg",
];

let showAlt = ["床哥心事台", "我屌你老", "思淫信箱", "音樂擂台", "米比雞翼走"];
let liveAlt = ["JFFSONG", "沉鹿期", "Fancy勁舞團", "米爺徐晃", "聖誕啓示錄"];

let showss = [
  "https://i.ytimg.com/vi/337wko5AmKY/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-WxyDGOCeN5nc034911m21KXVAQ",
  "https://i.ytimg.com/vi/PcXNQauOZ6c/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDIfUY2DgwTGEX2LZydUrB3TiEDIQ",
  "https://i.ytimg.com/vi/yrAPJ_oQy4s/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDfOEZDxPixF5J6tPAGCFmfyHcQAQ",
  "https://i.ytimg.com/vi/2vqdiTbAbBI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBLqqEQZ8CkUa7Frach_2aDGUwWVQ",
  "https://i.ytimg.com/vi/On0oWc_dV6A/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDTTxEVvQK0g043B71QnJeLseeROQ",
  "https://i.ytimg.com/vi/DuUkR_ApJrY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA44hnCsP4drGqoBGMcNvjAvlZLZw",
];
let showListes = [
  "https://www.youtube.com/watch?v=337wko5AmKY",
  "https://www.youtube.com/watch?v=PcXNQauOZ6c",
  "https://www.youtube.com/watch?v=yrAPJ_oQy4s",
  "https://www.youtube.com/watch?v=2vqdiTbAbBI",
  "https://www.youtube.com/watch?v=On0oWc_dV6A",
  "https://www.youtube.com/watch?v=DuUkR_ApJrY",
];
let liveListes = [
  "https://www.youtube.com/watch?v=jIB5dPRMSRg&list=PLU9puGF2UY12vasd3ATv1VJwMHieMN-TQ",
  "https://www.youtube.com/watch?v=78yMRWPmOaE&list=PLBv4Tx9f5FcyddMtzbrZLBWeOXXaTUIET",
  "https://www.youtube.com/watch?v=loZQE_Q_uvc&list=PLBv4Tx9f5FczGeOjNoJVC27WwZ6zi6JdH",
  "https://www.youtube.com/watch?v=aTXace4KyAU&list=PLBv4Tx9f5Fcw0nKy-B_1-psxE-STdoQX0",
  "https://www.youtube.com/watch?v=wOE7hXV4bFc&list=PLU9puGF2UY104bFl5A9QJpBUPF3QNMMpm",
  "https://www.youtube.com/watch?v=x5IVwvfXoRA&list=PLU9puGF2UY11OVE84g2di41BlTlaCmuA5",
];
let showes = [];

const ShowList = () => {
  const [show, setShow] = useState(false);
  const [video, setVideo] = useState(false);

  const sl = () => {
    document.querySelector("#box").scrollLeft = 0;
    document.querySelector("#box1").scrollLeft = 0;
  };

  const handleVideo = () => {
    setVideo(true);
    sl();
  };
  const handleLive = () => {
    setVideo(false);
    sl();
  };
  const handleClick = () => {
    setShow(true);
    setVideo(true);
    sl();
  };

  const listLive = () => {
    showes = [];
    livess.forEach((item, index) => {
      const a = item;
      const b = liveListes[index];
      if (index / 5 == 1) {
        showes.push(
          <motion.a
            key={index}
            className={`${styles.showImgA} ${styles.noMargin}`}
            variants={shows}
            initial="hidden"
            animate={video ? "out" : show ? "visible" : "before"}
            custom={index}
            href={b}
            target="_blank"
            rel="noreferrer"
          >
            <img
              layout="fill"
              alt={showAlt[index]}
              src={a}
              className={styles.showImg}
            />
          </motion.a>
        );
      } else {
        showes.push(
          <motion.a
            key={index}
            className={styles.showImgA}
            variants={shows}
            initial="hidden"
            animate={video ? "out" : show ? "visible" : "before"}
            custom={index}
            href={b}
            target="_blank"
            rel="noreferrer"
          >
            <img
              layout="fill"
              alt={showAlt[index]}
              src={a}
              className={styles.showImg}
            />
          </motion.a>
        );
      }
    });
    return showes;
  };
  const listShow = () => {
    showes = [];
    showss.forEach((item, index) => {
      const a = item;
      const b = showListes[index];
      if (index / 5 == 1) {
        showes.push(
          <motion.a
            key={index}
            className={styles.showImgA}
            variants={lives}
            initial="hidden"
            animate={video ? "out" : "visible"}
            custom={index}
            href={b}
            target="_blank"
            rel="noreferrer"
          >
            <img
              layout="fill"
              alt={liveAlt[index]}
              src={a}
              className={`${styles.showImg} ${styles.noMargin}`}
            />
          </motion.a>
        );
      } else {
        showes.push(
          <motion.a
            key={index}
            className={styles.showImgA}
            variants={lives}
            initial="hidden"
            animate={video ? "out" : "visible"}
            custom={index}
            href={b}
            target="_blank"
            rel="noreferrer"
          >
            <img
              layout="fill"
              alt={liveAlt[index]}
              src={a}
              className={styles.showImg}
            />
          </motion.a>
        );
      }
    });
    return showes;
  };
  return (
    <motion.div
      className={styles.aceBox}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        display: "block",
        transition: { delay: 8.5, duration: 1 },
      }}
      viewport={{ once: true }}
    >
      <span className={styles.optionTitle}>
        <motion.div
          id={styles.live}
          variants={options}
          animate={video ? { opacity: 0.5 } : { opacity: 1 }}
          onClick={show ? handleLive : {}}
        >
          節目
        </motion.div>
        <motion.div
          id={styles.video}
          style={{ marginLeft: "calc(10px + .5vw)" }}
          variants={options}
          initial={{ opacity: 0.5 }}
          animate={
            show ? (video ? { opacity: 1 } : { opacity: 0.5 }) : "unclick"
          }
          onClick={show ? handleVideo : handleClick}
        >
          影片
        </motion.div>
      </span>
      <div className={styles.listCon} id="listCon">
        <div className={styles.showBox} id="box">
          {listLive(video)}
        </div>
        <div className={styles.showVideo} id="box1">
          {listShow(video)}
        </div>
      </div>
    </motion.div>
  );
};

export default ShowList;
