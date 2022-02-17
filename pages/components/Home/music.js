import React from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import styles from "../../../styles/Home.module.css";
import { Icon } from "@iconify/react";

const ani = {
  hidden: { opacity: 0, y: 15 },
  visible: (i) => {
    const delay = i * 0.05;
    return {
      opacity: 1,
      y: 0,
      transition: {
        delay: delay,
        duration: 0.3,
        opacity: {
          duration: 0.5,
        },
      },
    };
  },
  visible1: (i) => {
    const delay = i * 0.05;
    return {
      opacity: 0.4,
      y: 0,
      transition: {
        delay: delay,
        duration: 0.3,
        opacity: {
          duration: 0.5,
        },
      },
    };
  },
};

let img = [
  "https://i.ytimg.com/vi/337wko5AmKY/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-WxyDGOCeN5nc034911m21KXVAQ",
  "https://i.ytimg.com/vi/0gkBAVv0U_E/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAjM6uIHMXev861EBZS8Hj_aL6ohQ",
  "https://i.ytimg.com/vi/EAP1bAcXj3U/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCpPEBacl4ohButIq0y_iulCc1vyw",
  "https://i.ytimg.com/vi/Xgc_75oqZK8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNQ5Z03XwD1zZZx6CEDFzw3tuWHg",
  "https://i.ytimg.com/vi/xkaLRoUQJow/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCq-g1gnxyqg-Z007-G-FHgCxwOsQ",
];

let link = [
  "https://www.youtube.com/watch?v=337wko5AmKY",
  "https://www.youtube.com/watch?v=0gkBAVv0U_E",
  "https://www.youtube.com/watch?v=EAP1bAcXj3U",
  "https://www.youtube.com/watch?v=Xgc_75oqZK8",
  "https://www.youtube.com/watch?v=xkaLRoUQJow",
];

let style = ["", "img1", "", "img2", "img3"];
let name = ["JFFSONG", "尋找白卡", "等你下火", "甘願墮落", "接龍"];
let singers = [
  "東京卍會",
  "床哥 (feat. 釘姐)",
  "耀祥, 雞翼",
  "新光合唱團",
  "良少, 雞翼, 米爺",
];
let id;

const Music = () => {
  const listes = () => {
    const music = [];
    img.forEach((item, index) => {
      id = style[index];
      music.push(
        <a href={link[index]} className={styles.musicMainCon}>
          <motion.div
            className={styles.musicMinCon}
            variants={ani}
            initial="hidden"
            whileInView="visible"
            custom={index}
            whileHover={{ backgroundColor: "#252525" }}
            whileTap={{ backgroundColor: "#252525" }}
            viewport={{ once: true, margin: "-20% 0%" }}
          >
            <div className={styles.playBtn}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="calc(1.2em + .3vw)"
                height="calc(1.2em + .3vw)"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M7 28a1 1 0 0 1-1-1V5a1 1 0 0 1 1.482-.876l20 11a1 1 0 0 1 0 1.752l-20 11A1 1 0 0 1 7 28Z"
                />
              </svg>
            </div>
            <span className={styles.musicBox}>
              <img className={styles.musicPhoto} src={item} id={id}></img>
            </span>
            <span className={styles.musicName}>{name[index]}</span>
            <span className={styles.singer}>{singers[index]}</span>
          </motion.div>
        </a>
      );
    });
    return music;
  };
  const empty = () => {
    const e = [];
    for (var i = 0; i < 9; i++) {
      e.push(
        <a className={styles.musicMainCon}>
          <motion.div
            className={styles.musicMinCon}
            variants={ani}
            initial="hidden"
            whileInView="visible1"
            custom={i + 5}
            viewport={{ once: true, margin: "-20% 0%" }}
          >
            <span
              className={styles.musicBox}
              style={{ background: "#131313" }}
            ></span>
            <span className={styles.musicName}>快啲出新歌啦屌</span>
            <span className={styles.singer}>會然</span>
          </motion.div>
        </a>
      );
    }
    return e;
  };
  //Scroll Box
  if (typeof window !== "undefined") {
    var s = document.querySelector("#scrollBoxInner");
    var vw = window.innerWidth / 100;
    var vw2 = 2 * vw;
    var padding = (30 + vw2) * 2;
    var scrolls = s.offsetWidth - padding + 25;
    window.addEventListener("resize", function () {
      vw = window.innerWidth / 100;
      vw2 = 2 * vw;
      padding = (30 + vw2) * 2;
      scrolls = s.offsetWidth - padding + 25;
      s.scrollLeft = 0;
    });
    document.querySelector("#left").addEventListener("click", function () {
      s.scrollLeft -= scrolls;
      console.log(scrolls);
    });
    document.querySelector("#right").addEventListener("click", function () {
      s.scrollLeft += scrolls;
      console.log(scrolls);
    });
  }
  return (
    <div className={styles.musicCon}>
      <div className={styles.bg}></div>
      <div className={styles.musicTitle}>熱門單曲</div>
      <div className="scrollBox">
        <div className="scrollBoxBtn" id="left">
          <Icon width="36" icon="akar-icons:chevron-left" />
        </div>
        <div className="scrollBoxBtn" id="right">
          <Icon width="36" icon="akar-icons:chevron-right" />
        </div>
        <div className="scrollBoxInner" id="scrollBoxInner">
          {listes()}
          {empty()}
          <div className={styles.musicMargin}></div>
        </div>
      </div>
    </div>
  );
};

export default Music;
