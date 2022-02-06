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

let member = ["床哥", "GE", "米爺", "良少", "比叔", "含爺"];
let img = [
  "/member/bedgor.jpg",
  "/member/ge.jpg",
  "/member/rice.jpg",
  "/member/leungsiu.jpg",
  "/member/garbriel.jpg",
  "/icons/pwa512.png",
];
let id = [
  `${styles.bed}`,
  `${styles.ge}`,
  `${styles.rice}`,
  `${styles.leung}`,
  `${styles.garbriel}`,
  `${styles.garbriel}`,
];

const Info = () => {
  const members = () => {
    const memberes = [];
    member.forEach((item, index) => {
      if (index == 5) {
        memberes.push(
          <motion.div
            className={styles.memberPhotoBox}
            id={styles.memberPadding}
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
              ></img>
            </motion.div>
            <motion.span className={styles.memberName}>{item}</motion.span>
          </motion.div>
        );
      } else {
        memberes.push(
          <motion.div
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
              ></img>
            </motion.div>
            <motion.span className={styles.memberName}>{item}</motion.span>
          </motion.div>
        );
      }
    });
    return memberes;
  };
  return (
    <motion.div className={styles.info}>
      <motion.div className={styles.memberBox}>
        <motion.span
          className={styles.memberTitle}
          variants={memberList}
          initial="hidden"
          whileInView="visible"
          custom={1}
          viewport={{ once: true }}
        >
          成員
        </motion.span>
        <motion.span className={styles.memberBoxes}>
          <div className={styles.memberInner}>
            {members()}
          </div>
        </motion.span>
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
