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
import Title from "./components/Home/title";
import { useViewportScroll, motion, useTransform } from "framer-motion";
import { useEffect } from "react";
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
      initial={{ overflow: "hidden", paddingBottom: 0 }}
      animate={{
        height: "auto",
        overflow: "visible",
        paddingBottom: "calc(45px + 1.2vw)",
        transition: { delay: 4, duration: 1.5 },
      }}
    >
      <Logo />
      <motion.div className={styles.container}>
        <Heads />
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
          <div className={styles.frame}></div>
        </motion.div>
        <Title />
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
