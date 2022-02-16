import React from "react";
import useSWR from "swr";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import styles from "../../../../styles/Home.module.css";

const fetcher = (url) => fetch(url).then((r) => r.json());

const display = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Odometer = dynamic(import("react-odometerjs"), {
  ssr: false,
  loading: () => 0,
});

const SubItem = (props) => {
  const { data, error } = useSWR(props.url, fetcher, {
    refreshInterval: 2500,
  });
  if (!data) return null;
  return (
    <a href={props.param}>
      <motion.div
        className={styles.subLive}
        // variants={display}
        // initial="hidden"
        // whileInView="visible"
        // viewport={{ once: true }}
      >
        <img className={styles.subImgLive} src={props.img}></img>
        <span className={styles.subTitleLive}>{props.name}</span>
        <div className={styles.odoCon}>
          <Odometer
            className={styles.odometer}
            id={styles.odometer}
            value={data["est_sub"]}
            format="(,ddd)"
          />
        </div>
      </motion.div>
    </a>
  );
};

export default SubItem;
