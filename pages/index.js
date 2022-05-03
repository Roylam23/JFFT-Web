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
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { initGA, logPageView } from "../utils/analytics";
import React from "react";
import Debug from "./components/Home/debug";
import Music from "./components/Home/music";

var height;
var preScroll = 0;
if (typeof window !== "undefined") {
  const a = true;
  // function resizeCon() {
  //   document.documentElement.style.setProperty(
  //     "--vh",
  //     `${window.visualViewport.height}px`
  //   );
  // }
  // resizeCon();
  setTimeout(function () {
    var h = document.querySelector("#mainContainer");
    h.style.height = "auto";
    h.style.overflow = "visible";
  }, 10000);
  // height = window.visualViewport.height;
  console.log(
    "%c%s",
    "border-radius: 6px; padding: 8px; color: #ffffff; background: #4801ff;",
    "✨ Developed by: RL — https://jfft.pages.dev"
  );

  function handleScroll() {
    var scrollY = window.scrollY;
    // Hide Navbar
    // if (scrollY > preScroll + 30) {
    //   document.querySelector("#nav").classList.add("hidden");
    //   preScroll = scrollY;
    // } else if (scrollY < preScroll && scrollY > 0) {
    //   document.querySelector("#nav").classList.remove("hidden");
    //   preScroll = scrollY;
    // }

    //Nav transparent black
    if (scrollY > (document.querySelector("#container").offsetHeight - 400)) {
      document.querySelector("#nav").classList.add("black");
    } else {
      document.querySelector("#nav").classList.remove("black");
    }
    // resizeCon();
  }

  window.addEventListener("scroll", handleScroll);
  // window.addEventListener("resize", resizeCon);
}

export default function Home() {
  const router = useRouter();
  const [notice, setNotice] = useState(false);
  const [instagram, setInstagram] = useState(false);
  const [low, setIsLow] = useState(false);
  // const { scrollY } = useViewportScroll();
  // const num = useTransform(scrollY, [0, 1000], [0, 100000]);
  // const vScroll = useTransform(scrollY, [0, height], ["0%", "20%"]);

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
            <img loading="lazy" className="noticeImg" src="/jffticon.png" alt="jfft" />
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
                  {num["current"]}
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
      {/* <Script src="/js/resize.js" strategy="beforeInteractive"></Script> */}
      <Logo />
      {/* <Debug info={height} /> */}
      <motion.div className={styles.mainContainer} id="mainContainer">
        {noticeCon()}
        <div className={styles.container} id="container">
          <Heads />
          <div className={styles.bgm}></div>
          <motion.div className={styles.mainBox}>
            {low ? (
              <div className={styles.low}>
                由於IOS慳電模式會關閉自動播放功能<br></br>
                建議關閉慳電模式並重新整理網頁
              </div>
            ) : (
              <motion.div
                id="videoS"
                // style={{ y: vScroll }}
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
        <Music />
        <Sub />
        <Update />
        <motion.footer
          className={styles.footer}
          animate={{
            opacity: [0, 1],
            transition: { delay: 12, duration: 1 },
          }}
        >
          <div id={styles.footerIcon}>
            <motion.span
              className={styles.iconBox}
              style={{ marginTop: 0, gap: "calc(15px + .8vw)" }}
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
                  className={styles.footerIconBox}
                  aria-hidden="true"
                  role="img"
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
                  className={styles.footerIconBox}
                  aria-hidden="true"
                  role="img"
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
                  className={styles.footerIconBox}
                  aria-hidden="true"
                  role="img"
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
          </div>
          <div className={styles.footerSec}>
            <span style={{ fontSize: "calc(14px + .4vw)" }}>
              成為會然獲得更多福利
            </span>
            <span style={{ fontSize: "calc(20px + .5vw)" }}>
              加入JFFT永遠都唔會遲
            </span>
            <span className={styles.footerImgCon}>
              <img loading="lazy"
                className={styles.footerImg}
                src="https://yt3.ggpht.com/oXoO57pmKFsC2PkbY4b4kjBggZ-HDf0tLJELc5utJSdnFtzqbeViG4PPotSByw3ghYQXvKHgOw0=s64-k-nd"
              ></img>
              <img loading="lazy"
                className={styles.footerImg}
                src="https://yt3.ggpht.com/foTPqcJtDbZfJxfKTt7VtjuKuY-gu1oVXfVqnliYqedAy3BD8KQHrv5D3ZMIXH4smBdW3fI7IA=s64-k-nd"
              ></img>
              <img loading="lazy"
                className={styles.footerImg}
                src="https://yt3.ggpht.com/Dgmmeat8PM1ptCDOGafjcSGhm1xZdqO415gWUzsU_eIrFMlhOQo5BIC8PRI9H7gtVvj2un7sAQ=s64-k-nd"
              ></img>
              <img loading="lazy"
                className={styles.footerImg}
                src="https://yt3.ggpht.com/chQ8p2BC3hHW7qJGv-CiD8wpPW2uc8Fhzh4n6eUQ8ypuij-7wKIxgG23f5fXUemg-KJnuokF=s64-k-nd"
              ></img>
              <img loading="lazy"
                className={styles.footerImg}
                src="https://yt3.ggpht.com/orKxvq5-N1YSxyPb-aRNbPBr5h05LcxjsuVmQ2-FhIlBrF-Bj-VBFKjeTYUiaEqd3Hh4tPE0Zg=s64-k-nd"
              ></img>
              <img loading="lazy"
                className={styles.footerImg}
                src="https://yt3.ggpht.com/33_YRLxYvsObX0GrJNgfGI5A5MZ979YHVTIT-S6srwCngVwW74ZkrCcUG4kuIu2WqA8bvbOf3g=s64-k-nd"
              ></img>
            </span>
          </div>
          <div className={styles.footerBottom}>
            <span>© 2022 JFFT</span>
            <span>JFFT世一</span>
          </div>
        </motion.footer>
      </motion.div>
    </>
  );
}
