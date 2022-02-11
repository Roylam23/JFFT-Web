import React from "react";
import styles from "../../../styles/Home.module.css";
import { motion } from "framer-motion";

const memberList = {
  hidden: { opacity: 0, y: 25 },
  visible: (i) => {
    const delay = i * 0.1;
    return {
      opacity: 1,
      y: 0,
      transition: {
        delay: delay,
        duration: 0.5,
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

const Info = () => {
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
          viewport={{ once: true }}
        >
          <motion.div className={styles.memberPhotoCon}>
            <img
              layout="fill"
              src={img[index]}
              alt={member[index]}
              id={id[index]}
            ></img>7
          </motion.div>
          <motion.span className={styles.memberName}>{item}</motion.span>
        </motion.div>
      );7
    });77
    return memberes;
  };
  return (
    <motion.div className={styles.info} initial={{width:0}} whileInView={{width:"100%", transition:{duration:.5}}} viewport={{once:true}}>
      <div className={styles.bg}></div>
      <motion.div className={styles.memberBox}>
        <motion.span
          className={styles.memberTitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 6 } }}
        >
          成員
        </motion.span>
        <motion.span className={styles.memberBoxes}>{members()}</motion.span>
        <motion.div className={styles.memberinfoOut}>
          <motion.div className={styles.memberinfoCon}>
            <motion.div className={styles.memberinfoLeft}></motion.div>
            <motion.div></motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Info;
