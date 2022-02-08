import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Logo from "./components/Home/logo";
import Heads from "./components/Home/head";
import Info from "./components/Home/info";
import ShowList from "./components/Home/showList";
import Scrollbar from "./components/Home/scrollbar";
import Update from "./components/Home/update";
import IconBox from "./components/Home/iconBox";
import Sub from "./components/Home/sub";
import { useViewportScroll, motion, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { initGA, logPageView } from "../utils/analytics";
import { use100vh } from "react-div-100vh";

export default function Home() {
  const { scrollY } = useViewportScroll();
  // const x1 = useTransform(scrollY, [100, 2500], ["10%", "-80%"]);
  // const x2 = useTransform(scrollY, [100, 5000], ["-70%", "20%"]);
  // const x3 = useTransform(scrollY, [100, 2500], ["5%", "-20%"]);
  // const op = useTransform(scrollY, [180, 450], [0, 1]);
  const router = useRouter();

  useEffect(() => {
    initGA();
    if (!router.asPath.includes("?")) {
      logPageView();
    }
  }, []);

  useEffect(() => {
    router.events.on("routeChangeComplete", logPageView);
    return () => {
      router.events.off("routeChangeComplete", logPageView);
    };
  }, [router.events]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        document.querySelector("#nav").classList.add("black");
      } else if (scrollY == 0) {
        document.querySelector("#nav").classList.remove("black");
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  const height = use100vh();
  return (
    <motion.div
      className={styles.mainContainer}
      initial={{ overflow: "hidden", paddingBottom: 0, height: height }}
      animate={{
        height: "auto",
        overflow: "visible",
        paddingBottom: "calc(45px + 1.2vw)",
        transition: { delay: 4, duration: 1.5 },
      }}
    >
      <motion.div className={styles.container} style={{ height: height }}>
        <Heads />
        <Logo />
        <motion.div
          className={styles.mainBox}
          initial={{ y: "100vh" }}
          animate={{ y: 0, transition: { delay: 3.5, duration: 1.5 } }}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: `
          <video
            loop
            muted
            autoplay
            playsinline
            src="https://i.imgur.com/CE4dVM9.mp4"
            class="${styles.video}"
          />,
        `,
            }}
          ></div>
          <div className={styles.filter}></div>
          <motion.div
            className={styles.title}
            initial={{ bottom: "calc(75px + 1vw)" }}
            whileInView={{
              bottom: "calc(200px + 11vw)",
              transition: { delay: 4, duration: 1 },
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
                  delay: 1,
                },
              }}
              viewport={{ once: true }}
              id={styles.top}
            >
              全港最大黃賭毒邪教
            </motion.span>
            <motion.span
              className={styles.titleTop}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                // width: ["30vw", "20vw"],
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.75,
                  delay: 1.25,
                  // width: { delay: 6, duration: 1.5, ease: "easeInOut" },
                },
              }}
              viewport={{ once: true }}
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
                transition: { duration: 0.75, delay: 1.5 },
              }}
              viewport={{ once: true }}
            >
              加入JFFT永遠都唔會遲
            </motion.span>
            <IconBox />
          </motion.div>
          <div className={styles.frame}></div>
        </motion.div>
        <ShowList />
      </motion.div>
      <Info />
      <Scrollbar />
      <Sub />
      <Update />
      <motion.footer
        className={styles.footer}
        animate={{
          opacity: [0, 1],
          transition: { delay: 6, duration: 1 },
        }}
      >
        <span>© 2022 JFFT</span>
        <span></span>
        <span>JFFT世一</span>
      </motion.footer>
    </motion.div>
  );
}
