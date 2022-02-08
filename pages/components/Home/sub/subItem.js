import React from "react";
import useSWR from "swr";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import styles from "../../../../styles/Home.module.css";

const fetcher = (url) => fetch(url).then((r) => r.json());

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
    <div className={styles.subLive}>
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
    </div>
  );
};

export default SubItem;
