import React from "react";
import styles from "../../../styles/Home.module.css";
import { motion, useTransform, useViewportScroll } from "framer-motion";

const memberList = {
  hidden: { opacity: 0, y: 15 },
  visible: (i) => {
    const delay = i * 0.05;
    return {
      opacity: 1,
      y: 0,
      transition: {
        delay: delay,
        duration: 0.3,
        opacity:{
          duration: .5,
        }
      },
    };
  },
};
let member = ["床哥", "雞翼", "米爺", "良少", "比叔"];
// let member = ["床哥", "雞翼", "米爺", "良少", "比叔", "含爺"];
let img = [
  "/member/bedgor.jpg",
  "/member/ge.jpg",
  "/member/rice.jpg",
  "/member/leungsiu.jpg",
  "/member/garbriel.jpg",
];
// let img = [
//   "/member/bedgor.jpg",
//   "/member/ge.jpg",
//   "/member/rice.jpg",
//   "/member/leungsiu.jpg",
//   "/member/garbriel.jpg",
//   "/icons/pwa512.png",
// ];
let id = [
  `${styles.bed}`,
  `${styles.ge}`,
  `${styles.rice}`,
  `${styles.leung}`,
  `${styles.garbriel}`,
];
// let id = [
//   `${styles.bed}`,
//   `${styles.ge}`,
//   `${styles.rice}`,
//   `${styles.leung}`,
//   `${styles.garbriel}`,
//   `${styles.garbriel}`,
// ];

let info, infoHeight, infoTop, infoScrollEnd;

const Info = () => {
  // if (typeof window !== "undefined") {
  //   info = document.querySelector("#info").getBoundingClientRect();
  //   infoHeight = info["height"];
  //   infoTop = info["top"];
  //   infoScrollEnd = infoTop + infoHeight;
  //   console.log(infoHeight);
  // }
  // const { scrollY } = useViewportScroll();
  // const y = useTransform(
  //   scrollY,
  //   [infoTop, infoScrollEnd],
  //   ["calc(40%)", "calc(0%)"]
  // );
  // const s = useTransform(
  //   scrollY,
  //   [infoTop, infoScrollEnd],
  //   ["calc(16px + 3vw)", "calc(16px + .45vw)"]
  // );
  const members = () => {
    const memberes = [];
    member.forEach((item, index) => {
      memberes.push(
        <motion.div
          key={index}
          className={styles.memberPhotoBox}
          variants={memberList}
          initial="hidden"
          whileInView="visible"
          custom={index}
          viewport={{ margin: "-20% 0%", once: true }}
        >
          <motion.div className={styles.memberPhotoCon}>
            <img
              layout="fill"
              src={img[index]}
              alt={member[index]}
              id={id[index]}
            ></img>
          </motion.div>
          <motion.span className={styles.memberName}>{item}</motion.span>
        </motion.div>
      );
    });
    return memberes;
  };
  return (
    <motion.div
      className={styles.info}
      id="info"
      initial={{ width: 0 }}
      whileInView={{ width: "100%", transition: { duration: 0.5 } }}
      viewport={{ once: true }}
    >
      <div className={styles.bg}></div>
      <motion.div className={styles.memberBox}>
        <motion.span
          className={styles.memberTitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 6 } }}
          viewport={{ margin: "-50% 0" }}
          // style={{ marginLeft: y, marginRight: y, fontSize: s }}
          // viewport={{ margin: "500% 0px" }}
          // style={{ opacity: y }}
        >
          成員
        </motion.span>
        <motion.span className={styles.memberBoxes}>{members()}</motion.span>
        {/* <motion.div className={styles.memberinfoOut}>
          <motion.div className={styles.memberinfoCon}>
            <motion.div className={styles.memberinfoLeft}></motion.div>
            <motion.div></motion.div>
          </motion.div>
        </motion.div> */}
      </motion.div>
    </motion.div>
  );
};

export default Info;
