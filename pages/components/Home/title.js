import React from "react";
import styles from "../../../styles/Home.module.css";
import { useViewportScroll, motion, useTransform } from "framer-motion";

const icon = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (i) => {
    const delay = 5.25 + 1.5 + i * 0.15;
    return {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: delay,
      },
    };
  },
};

const Title = () => {
  const sec = 5.25;
  // const { scrollY } = useViewportScroll();
  // const movement = ["0", "100px"];
  // const opacity = [1, 0];
  // const x1 = useTransform(scrollY, [0, 500], movement);
  // const x2 = useTransform(scrollY, [100, 700], movement);
  // const x3 = useTransform(scrollY, [200, 900], movement);
  // const x4 = useTransform(scrollY, [300, 1100], movement);
  // const op1 = useTransform(scrollY, [0, 200], opacity);
  // const op2 = useTransform(scrollY, [50, 300], opacity);
  // const op3 = useTransform(scrollY, [100, 400], opacity);
  // const op4 = useTransform(scrollY, [150, 500], opacity);
  return (
    <motion.div
      className={styles.title}
      initial={{ bottom: "calc(75px + 1vw)" }}
      animate={{
        bottom: "calc(200px + 10vw)",
        transition: { delay: sec + 3, duration: 1 },
      }}
      viewport={{ once: true }}
    >
      <motion.span
        className={styles.titleTop}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.75,
            delay: sec,
          },
        }}
        viewport={{ once: true }}
        id={styles.top}
        // style={{ x: x1, opacity: op1 }}
      >
        只是為了好玩的團隊
      </motion.span>
      <motion.span
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          // width: ["30vw", "20vw"],
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.75,
            delay: sec + 0.5,
            // width: { delay: 6, duration: 1.5, ease: "easeInOut" },
          },
        }}
        viewport={{ once: true }}
        // style={{ x: x2, opacity: op2 }}
      >
        <motion.span
          id={styles.name}
          className={styles.name}
          whileInView={{
            color: "#E9007F",
          }}
        >
          JFFT
        </motion.span>
      </motion.span>
      <motion.span
        className={styles.titleMain}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.75, delay: sec + 1 },
        }}
        viewport={{ once: true }}
        // style={{ x: x3, opacity: op3 }}
      >
        加入JFFT永遠都唔會遲
      </motion.span>
      <motion.span
        className={styles.iconBox}
        // style={{ x: x4, opacity: op4 }}
      >
        <motion.a
          className={styles.a}
          href="https://www.youtube.com/channel/UC3aipgNToMvs2pFaQyaM_hg"
          target="_blank"
          whileHover={{ y: -10 }}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.icon}
            variants={icon}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <g>
                <path
                  d="M23.5 6.507a2.786 2.786 0 0 0-.766-1.27a3.05 3.05 0 0 0-1.338-.742C19.518 4 11.994 4 11.994 4a76.624 76.624 0 0 0-9.39.47a3.16 3.16 0 0 0-1.338.76c-.37.356-.638.795-.778 1.276A29.09 29.09 0 0 0 0 12c-.012 1.841.151 3.68.488 5.494c.137.479.404.916.775 1.269c.371.353.833.608 1.341.743c1.903.494 9.39.494 9.39.494a76.8 76.8 0 0 0 9.402-.47a3.05 3.05 0 0 0 1.338-.742c.37-.353.633-.792.765-1.27A28.38 28.38 0 0 0 24 12.023a26.579 26.579 0 0 0-.5-5.517zM9.602 15.424V8.577l6.26 3.424l-6.26 3.423z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_100_7">
                  <path fill="#fff" d="M0 0h24v24H0z" />
                </clipPath>
              </defs>
            </g>
          </motion.svg>
        </motion.a>
        <motion.a
          className={styles.a}
          href="https://www.instagram.com/jfft_justforfun/"
          target="_blank"
          whileHover={{ y: -10 }}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.icon}
            variants={icon}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <path
                d="M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.066c1.172.053 1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12c0 2.988-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066c-2.988 0-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.397 5.397 0 0 1-1.949-1.268a5.392 5.392 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12c0-2.988.013-3.362.066-4.534c.053-1.172.24-1.972.511-2.672a5.396 5.396 0 0 1 1.27-1.948a5.392 5.392 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511zm8.98 1.98c-1.16-.053-1.508-.064-4.445-.064c-2.937 0-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.412 3.412 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445c0 2.937.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064c2.938 0 3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445c0-2.937-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379zm-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986zM8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996zm10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89z"
                fill="currentColor"
              />
            </g>
          </motion.svg>
        </motion.a>
        <motion.a
          className={styles.a}
          href="https://www.facebook.com/JUSTFORFUN.JFFT/"
          target="_blank"
          initial={{ y: 0 }}
          whileHover={{ y: -10 }}
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className={styles.icon}
            variants={icon}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 1000 1000"
          >
            <path
              d="M182.594 0C81.445 0 0 81.445 0 182.594v634.813c0 101.149 81.445 182.594 182.594 182.594h344.063V609.063H423.282v-140.75h103.375v-120.25c0-94.475 61.079-181.219 201.781-181.219c56.968 0 99.094 5.469 99.094 5.469l-3.313 131.438s-42.963-.406-89.844-.406c-50.739 0-58.875 23.378-58.875 62.188v102.781h152.75l-6.656 140.75H675.5v390.938h141.906c101.149 0 182.594-81.445 182.594-182.594V182.595C1000 81.446 918.555.001 817.406.001H182.593z"
              fill="currentColor"
            />
          </motion.svg>
        </motion.a>
      </motion.span>
    </motion.div>
  );
};

export default Title;
