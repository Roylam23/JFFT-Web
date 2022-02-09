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
import { useEffect, useState } from "react";
import { initGA, logPageView } from "../utils/analytics";

export default function Home() {
  const { scrollY } = useViewportScroll();
  // const x1 = useTransform(scrollY, [100, 2500], ["10%", "-80%"]);
  // const x2 = useTransform(scrollY, [100, 5000], ["-70%", "20%"]);
  // const x3 = useTransform(scrollY, [100, 2500], ["5%", "-20%"]);
  // const op = useTransform(scrollY, [180, 450], [0, 1]);
  const router = useRouter();
  const [notice, setNotice] = useState(false);
  useEffect(() => {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    var isSafari = ua.indexOf("Safari") > -1 ? true : false;
    var isWebkit = ua.indexOf("WebKit") > -1 ? true : false;
    var isInstagram = ua.indexOf("Instagram") > -1 ? true : false;

    if (document.documentElement.classList) {
      if (isWebkit && !isSafari && !isInstagram) {
        setNotice(true);
      }
    }
  });

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

  //Onscroll resize view height
  let height;
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        document.querySelector("#nav").classList.add("black");
      } else if (scrollY == 0) {
        document.querySelector("#nav").classList.remove("black");
        document.documentElement.style.setProperty(
          "--app-height",
          `${window.innerHeight}px`
        );
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", () => {
      height = window.innerHeight;
    });
    window.addEventListener("load", () => {
      document.documentElement.style.setProperty(
        "--app-height",
        `${window.innerHeight}px`
      );
    });
  }, []);

  //Safari Viewport fix
  if (typeof window !== "undefined") {
    document.documentElement.style.setProperty(
      "--app-height",
      `${window.innerHeight}px`
    );
    height = window.innerHeight;
  }

  return (
    <motion.div
      className={styles.mainContainer}
      id="mainContainer"
      initial={{
        overflow: "hidden",
        paddingBottom: 0,
        height: height,
      }}
      animate={{
        height: notice ? height : "auto",
        overflow: notice ? "hidden" : "visible",
        paddingBottom: "calc(45px + 1.2vw)",
        transition: { delay: 4, duration: 1.5 },
      }}
    >
      {notice ? (
        <>
          <motion.div
            className="insta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 5, duration: 1 } }}
          >
            <img className="noticeImg" src="/jffticon.png"></img>
            <span>
              建議使用Safari, Chrome瀏覽器以達到最佳觀賞效果 <br></br>
              <br></br>{" "}
              <span
                style={{
                  color: "#E9007F",
                  fontSize: "24px",
                  fontWeight: "600",
                }}
              >
                LIHKG<br></br>
              </span>
              <br></br>
              點擊分享按鈕，並按以Safari瀏覽
            </span>
          </motion.div>
          <div className="instaBack"></div>
        </>
      ) : null}
      <Logo height={height} />
      <div className={styles.container}>
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
      </div>
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
