import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Logo from "./components/Home/logo";
import Heads from "./components/Home/head";
import Info from "./components/Home/info";
import ShowList from "./components/Home/showList";
import Scrollbar from "./components/Home/scrollbar";
import Update from "./components/Home/update";
import Sub from "./components/Home/sub";
import Title from "./components/Home/title";
import Script from "next/script";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { initGA, logPageView } from "../utils/analytics";

export default function Home() {
  const router = useRouter();
  const [notice, setNotice] = useState(false);
  const [instagram, setInstagram] = useState(false);
  const [low, setIsLow] = useState(false);

  //Check Browser Agent
  useEffect(() => {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    var isSafari = ua.indexOf("Safari") > -1 ? true : false;
    var isWebkit = ua.indexOf("WebKit") > -1 ? true : false;
    var isInstagram = ua.indexOf("Instagram") > -1 ? true : false;

    if (document.documentElement.classList) {
      if (isWebkit && !isSafari && !isInstagram) {
        setNotice(true);
      }
      if (isInstagram) {
        setInstagram(true);
      }
    }
  }, []);

  //Play Music after 5s
  if (typeof document !== "undefined") {
    const video = document.getElementById("video");
    setTimeout(function () {
      video.play().catch(() => {
        setIsLow(true);
      });
    }, 4500);
  }

  useEffect(() => {
    initGA();
    if (!router.asPath.includes("?")) {
      logPageView();
    }
  });

  useEffect(() => {
    router.events.on("routeChangeComplete", logPageView);
    return () => {
      router.events.off("routeChangeComplete", logPageView);
    };
  }, [router.events]);

  const noticeCon = () => {
    if (notice) {
      return (
        <>
          <motion.div
            className="insta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
          >
            <img className="noticeImg" src="/jffticon.png" alt="jfft"></img>
            <span>
              建議使用Safari瀏覽器以達到最佳觀賞效果 <br></br>
              <br></br>{" "}
              {instagram ? (
                <>
                  <span
                    style={{
                      color: "#E9007F",
                      fontSize: "24px",
                      fontWeight: "600",
                    }}
                  >
                    Instagram<br></br>
                  </span>
                  <br></br>
                  點擊右上按鈕，並按以瀏覽器開啓<br></br>
                  Height:
                  {height}
                </>
              ) : (
                <>
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
                </>
              )}
            </span>
          </motion.div>
          <div className="instaBack"></div>
        </>
      );
    }
  };

  return (
    <>
      {/* <div style={{position:"fixed",bottom:0,width:"100%",height:"50px",background:"#000",zIndex:200}}></div> */}
      <Script src="/js/resize.js" strategy="beforeInteractive"></Script>
      <Logo />
      <motion.div
        className={styles.mainContainer}
        id="mainContainer"
        initial={{
          overflow: "hidden",
          paddingBottom: 0,
        }}
        animate={{
          height: notice ? height : "auto",
          overflow: notice ? "hidden" : "visible",
          paddingBottom: "calc(45px + 1.2vw)",
          transition: {
            delay: 10,
            duration: 1.5,
          },
        }}
      >
        {noticeCon()}
        <div className={styles.container} id="container">
          <Heads />
          <motion.div className={styles.mainBox}>
            {low ? (
              <div className={styles.low}>
                由於IOS慳電模式會關閉自動播放功能<br></br>
                建議關閉慳電模式並重新整理網頁
              </div>
            ) : (
              <motion.div
                dangerouslySetInnerHTML={{
                  __html: `
          <video
            id="video"
            loop 
            muted 
            playsinline
            src="https://i.imgur.com/CE4dVM9.mp4"
            class="${styles.video}"
          />,
        `,
                }}
              ></motion.div>
            )}

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
            transition: { delay: 12, duration: 1 },
          }}
        >
          <span>© 2022 JFFT</span>
          <span></span>
          <span>JFFT世一</span>
        </motion.footer>
      </motion.div>
    </>
  );
}
