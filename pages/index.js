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
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { initGA, logPageView } from "../utils/analytics";

export default function Home() {
  const router = useRouter();
  const [notice, setNotice] = useState(false);
  const [insta, setInsta] = useState(false);
  useEffect(() => {
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    var isSafari = ua.indexOf("Safari") > -1 ? true : false;
    var isWebkit = ua.indexOf("WebKit") > -1 ? true : false;
    var isInstagram = ua.indexOf("Instagram") > -1 ? true : false;

    if (document.documentElement.classList) {
      if (isWebkit && !isSafari) {
        setNotice(true);
      }
      if (isInstagram) {
        setInsta(true);
      }
    }
  });

  useEffect(() => {
    initGA();
    if (!router.asPath.includes("?")) {
      7;
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
  let preScroll = 0;
  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      const scrollY = window.scrollY;
      const conHeight = document.querySelector("#container").scrollHeight;

      if (scrollY > preScroll + 30) {
        document.querySelector("#nav").classList.add("hidden");
        preScroll = scrollY;
      } else if (scrollY < preScroll && scrollY > 0) {
        document.querySelector("#nav").classList.remove("hidden");
        preScroll = scrollY;
      }
      document.documentElement.style.setProperty(
        "--vh",
        `${window.visualViewport.height}px`
      );
      if (scrollY > 0) {
        document.querySelector("#nav").classList.add("black");
      } else if (scrollY == 0) {
        document.querySelector("#nav").classList.remove("black");
      }

      if (scrollY < conHeight) {
        document.documentElement.style.setProperty(
          "--vh",
          `${window.visualViewport.height}px`
        );
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.visualViewport.height}px`
      );
    });
  }, []);

  //Safari Viewport fix
  if (typeof window !== "undefined") {
    document.documentElement.style.setProperty(
      "--vh",
      `${window.visualViewport.height}px`
    );
    height = window.visualViewport.height;
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.getRegistrations().then((registrations) => {
          for (let registration of registrations) {
            registration.unregister().then((bool) => {
              console.log("unregister: ", bool);
            });
          }
        });
      });
    }
  }

  return (
    <>
      {/* <div style={{position:"fixed",bottom:0,width:"100%",height:"50px",background:"#000",zIndex:200}}></div> */}
      <Logo />
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
          transition: { delay: 10, duration: 1.5 },
        }}
      >
        {notice ? (
          <>
            <motion.div
              className="insta"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
            >
              <img className="noticeImg" src="/jffticon.png"></img>
              <span>
                建議使用Safari瀏覽器以達到最佳觀賞效果 <br></br>
                <br></br>{" "}
                {insta ? (
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
                    點擊右上按鈕，並按以瀏覽器開啓
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
        ) : null}
        <div className={styles.container} id="container">
          <Heads />
          <motion.div className={styles.mainBox}>
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
    </>
  );
}
