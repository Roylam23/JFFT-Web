import Head from "next/head";
import styles from "../styles/Home.module.css";
import Script from "next/script";
import { useRouter } from "next/router";
import Logo from "./components/logo";
import {
  useViewportScroll,
  motion,
  useTransform,
  useMotionValue,
} from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { initGA, logPageView } from "../utils/analytics";
import { use100vh } from "react-div-100vh";
import Image from "next/image";

const options = {
  unclick: {
    y: [0, -10, 0, -5, 0],
    transition: {
      times: [0, 0.7, 0.8, 0.9, 1],
      duration: 0.9,
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
  clicked: {
    y: 0,
    opacity: 1,
  },
};

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

const icon = {
  hidden: {
    opacity: 0,
    y: 0,
  },
  visible: (i) => {
    const delay = 2.5 + i * 0.15;
    return {
      opacity: 1,
      y: -20,
      transition: {
        duration: 1,
        delay: delay,
      },
    };
  },
};

const shows = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  out: (i) => {
    const delay = i * 0.15;
    return {
      opacity: 0,
      x: -20,
      zIndex: 70,
      transition: {
        delay: delay,
        duration: 0.5,
        zIndex: { delay: 0 },
      },
    };
  },
  before: (i) => {
    const delay = 12 + i * 0.15;
    return {
      opacity: 1,
      x: 0,
      zIndex: 80,
      transition: {
        delay: delay,
        duration: 0.5,
        zIndex: { delay: 0 },
      },
    };
  },
  visible: (i) => {
    const delay = 0.5 + i * 0.15;
    return {
      opacity: 1,
      x: 0,
      zIndex: 80,
      transition: {
        delay: delay,
        duration: 0.5,
        zIndex: { delay: 0 },
      },
    };
  },
};

const lives = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: (i) => {
    const delay = i * 0.15;
    return {
      opacity: 0,
      x: 20,
      zIndex: 70,
      transition: {
        delay: delay,
        duration: 0.5,
        zIndex: { delay: 0 },
      },
    };
  },
  out: (i) => {
    const delay = 0.5 + i * 0.15;
    return {
      opacity: 1,
      x: 0,
      zIndex: 80,
      transition: {
        delay: delay,
        duration: 0.5,
        zIndex: { delay: 0 },
      },
    };
  },
};

let livess = ["j5", "j4", "j3", "j1", "j2", "j6"];
let showss = ["v1", "v2", "v3", "v4", "v5", "v6"];
let showListes = [
  "https://www.youtube.com/watch?v=337wko5AmKY",
  "https://www.youtube.com/watch?v=PcXNQauOZ6c",
  "https://www.youtube.com/watch?v=yrAPJ_oQy4s",
  "https://www.youtube.com/watch?v=2vqdiTbAbBI",
  "https://www.youtube.com/watch?v=On0oWc_dV6A",
  "https://www.youtube.com/watch?v=DuUkR_ApJrY",
];
let liveListes = [
  "https://www.youtube.com/watch?v=jIB5dPRMSRg&list=PLU9puGF2UY12vasd3ATv1VJwMHieMN-TQ",
  "https://www.youtube.com/watch?v=78yMRWPmOaE&list=PLBv4Tx9f5FcyddMtzbrZLBWeOXXaTUIET",
  "https://www.youtube.com/watch?v=loZQE_Q_uvc&list=PLBv4Tx9f5FczGeOjNoJVC27WwZ6zi6JdH",
  "https://www.youtube.com/watch?v=aTXace4KyAU&list=PLBv4Tx9f5Fcw0nKy-B_1-psxE-STdoQX0",
  "https://www.youtube.com/watch?v=wOE7hXV4bFc&list=PLU9puGF2UY104bFl5A9QJpBUPF3QNMMpm",
  "https://www.youtube.com/watch?v=x5IVwvfXoRA&list=PLU9puGF2UY11OVE84g2di41BlTlaCmuA5",
];
let showes = [];

let list = [];

for (let i = 0; i < 5; i++) {
  list.push(
    <motion.div
      className={styles.aceBox2}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 4.5, duration: 1.5 } }}
    >
      <div className={styles.showBox}>
        <div className={styles.boxMargin}></div>
        {showes}
      </div>
    </motion.div>
  );
}

// const key = "AIzaSyAdG9n0Y_ojAJV6-ffClxb4W7EsCLUBhAk";
// const key = "AIzaSyDL0tDIGFd9ntWdIguLMLKLs0rP2e5-238";
// let posts = 0;
// export async function getStaticProps() {
//   console.log(posts);
//   posts = posts + 1;
//   const res = await fetch(
//     `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC3aipgNToMvs2pFaQyaM_hg&eventType=live&type=video&key=${key}`
//   );
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//   };
// }

export default function Home({ data }) {
  const { scrollY } = useViewportScroll();
  const x1 = useTransform(scrollY, [100, 2500], ["10%", "-80%"]);
  const x2 = useTransform(scrollY, [100, 5000], ["-70%", "20%"]);
  const x3 = useTransform(scrollY, [100, 2500], ["5%", "-20%"]);
  const op = useTransform(scrollY, [180, 450], [0, 1]);
  const font = useTransform(scrollY, [250, 400], ["calc(60px + 2vw)", "0px"]);
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [video, setVideo] = useState(false);

  const handleVideo = () => {
    setVideo(true);
    document.querySelector("#box1").scrollLeft = 0;
  };
  const handleLive = () => {
    setVideo(false);
    document.querySelector("#box").scrollLeft = 0;
  };
  const handleClick = () => {
    setShow(true);
    setVideo(true);
  };

  const listLive = () => {
    showes = [];
    livess.forEach((item, index) => {
      const a = "/" + item + ".webp";
      const b = liveListes[index];
      showes.push(
        <motion.a
          className={styles.showImgA}
          variants={shows}
          initial="hidden"
          animate={video ? "out" : show ? "visible" : "before"}
          custom={index}
          href={b}
          target="_blank"
          rel="noreferrer"
        >
          <Image
            layout="fill"
            alt=""
            src={"/showImg" + a}
            className={styles.showImg}
          />
        </motion.a>
      );
    });
    return showes;
  };
  const listShow = () => {
    showes = [];
    showss.forEach((item, index) => {
      const a = "/" + item + ".webp";
      const b = showListes[index];
      showes.push(
        <motion.a
          className={styles.showImgA}
          variants={lives}
          initial="hidden"
          animate={video ? "out" : "visible"}
          custom={index}
          href={b}
          target="_blank"
          rel="noreferrer"
        >
          <Image
            layout="fill"
            alt=""
            src={"/liveImg" + a}
            className={styles.showImg}
          />
        </motion.a>
      );
    });
    return showes;
  };

  const onPlayerReady = (event) => {
    var embedCode = event.target.getVideoEmbedCode();
    event.target.playVideo();
    if (document.getElementById("embed-code")) {
      document.getElementById("embed-code").innerHTML = embedCode;
    }
  };

  useEffect(() => {
    initGA();
    if (!router.asPath.includes("?")) {
      logPageView();
    }
  }, []);

  useEffect(() => {
    // Listen for page changes after a navigation or when the query changes
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
      <motion.div
        className={styles.container}
        id="container"
        style={{ height: height }}
        initial={{ overflow: "hidden" }}
        animate={{
          overflow: "visible",
          transition: { delay: 4, duration: 1.5, ease: "easeInOut" },
        }}
      >
        <Head>
          <title>JFFT - Home</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, target-densityDpi=device-dpi"
          />
          <meta name="description" content="JFFT" />
          <meta name="description" content="Jun For Fun Team" />
          <meta name="description" content="JFFLive" />
          <meta name="description" content="加入JFFT永遠都唔會遲" />
          <meta name="description" content="Firm" />
          <meta name="description" content="JFFT Fanmade網站" />
          <meta
            name="google-site-verification"
            content="k3n1vQkq8AOOwF4G2R65vOQGeWg7Zovv0GPfKbp_ACo"
          />
          <meta name="robots" content="index, follow"></meta>
          <meta property="og:title" content="JFFT"></meta>
          <meta property="og:site_name" content="JFFT"></meta>
          <meta name="author" content="RL"></meta>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/apple192.png"></link>
          <meta name="theme-color" content="#000000" />
          <meta name="application-name" content="JFFT" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="JFFT" />
          <link
            href="/splashscreens/iphone5_splash.png"
            media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="/splashscreens/iphone6_splash.png"
            media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="/splashscreens/iphoneplus_splash.png"
            media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)"
            rel="apple-touch-startup-image"
          />
          <link
            href="/splashscreens/iphonex_splash.png"
            media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
            rel="apple-touch-startup-image"
          />
          <link
            href="/splashscreens/iphonexr_splash.png"
            media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="/splashscreens/iphonexsmax_splash.png"
            media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
            rel="apple-touch-startup-image"
          />
          <link
            href="/splashscreens/ipad_splash.png"
            media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="/splashscreens/ipadpro1_splash.png"
            media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="/splashscreens/ipadpro3_splash.png"
            media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="/splashscreens/ipadpro2_splash.png"
            media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
            rel="apple-touch-startup-image"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Dongle&family=Fjalla+One&family=Open+Sans&family=Roboto:wght@300;400&display=swap"
            rel="stylesheet"
          ></link>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Script src="https://code.iconify.design/2/2.1.2/iconify.min.js"></Script>
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
          {/* <Image id={styles.back} src={"/back.jpg"} alt="JFFSong"></Image> */}
          <div className={styles.filter}></div>
          <motion.div
            className={styles.title}
            initial={{ bottom: "calc(75px + 1vw)" }}
            whileInView={{
              bottom: "calc(200px + 11vw)",
              transition: { delay: 6, duration: 1, ease: "easeInOut" },
            }}
            viewport={{ once: true }}
          >
            <motion.span
              className={styles.titleTop}
              initial={{ opacity: 0, y: 0 }}
              whileInView={{
                opacity: 1,
                y: -30,
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
              initial={{ opacity: 0, y: 0 }}
              whileInView={{
                // width: ["30vw", "20vw"],
                opacity: 1,
                y: -30,
                transition: {
                  duration: 0.75,
                  delay: 1.5,
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
              initial={{ opacity: 0, y: 0 }}
              whileInView={{
                opacity: 1,
                y: -30,
                transition: { duration: 0.75, delay: 2 },
              }}
              viewport={{ once: true }}
            >
              加入JFFT永遠都唔會遲
            </motion.span>
            <span className={styles.iconBox}>
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
            </span>
          </motion.div>
          <div className={styles.frame}></div>
        </motion.div>
        <motion.div
          className={styles.aceBox}
          initial={{ opacity: 0, display: "none" }}
          animate={{
            opacity: 1,
            display: "block",
            transition: { delay: 11.5, duration: 1.5 },
          }}
          viewport={{ once: true }}
        >
          <span className={styles.optionTitle}>
            <motion.div
              id={styles.live}
              variants={options}
              animate={video ? { opacity: 0.5 } : { opacity: 1 }}
              onClick={show ? handleLive : {}}
            >
              節目
            </motion.div>
            <motion.div
              id={styles.video}
              style={{ marginLeft: "calc(10px + .5vw)" }}
              variants={options}
              initial={{ opacity: 0.5 }}
              animate={
                show ? (video ? { opacity: 1 } : { opacity: 0.5 }) : "unclick"
              }
              onClick={show ? handleVideo : handleClick}
            >
              影片
            </motion.div>
          </span>
          <div className={styles.listCon}>
            <div className={styles.showBox} id="box">
              <div
                className={styles.boxMargin}
                variants={shows}
                initial="hidden"
                whileInView={video ? "out" : "visible"}
                viewport={{ once: true }}
                custom={0}
              ></div>
              {listLive(video)}
              <div
                className={styles.boxMargin}
                variants={shows}
                initial="hidden"
                whileInView={video ? "out" : "visible"}
                viewport={{ once: true }}
                custom={7}
              ></div>
            </div>
            <div className={styles.showVideo} id="box1">
              <div
                className={styles.boxMargin}
                initial="hidden"
                whileInView={video ? "out" : "visible"}
                viewport={{ once: true }}
                custom={0}
              ></div>
              {listShow(video)}
              <div
                className={styles.boxMargin}
                initial="hidden"
                whileInView={video ? "out" : "visible"}
                viewport={{ once: true }}
                custom={7}
              ></div>
            </div>
          </div>
        </motion.div>
      </motion.div>
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
            <div className={styles.photoMargin}></div>
            <motion.div
              className={styles.memberPhotoBox}
              variants={memberList}
              initial="hidden"
              whileInView="visible"
              custom={2}
              viewport={{ once: true }}
            >
              <motion.div className={styles.memberPhotoCon}>
                <Image
                  layout="fill"
                  src={"/member/bedgor.jpg"}
                  alt="床哥"
                  id={styles.bed}
                ></Image>
              </motion.div>
              <motion.span className={styles.memberName}>床哥</motion.span>
            </motion.div>
            <motion.div
              className={styles.memberPhotoBox}
              variants={memberList}
              initial="hidden"
              whileInView="visible"
              custom={3}
              viewport={{ once: true }}
            >
              <motion.div className={styles.memberPhotoCon}>
                <Image
                  layout="fill"
                  src={"/member/ge.jpg"}
                  id={styles.ge}
                  alt="GE"
                ></Image>
              </motion.div>
              <motion.span className={styles.memberName}>雞翼</motion.span>
            </motion.div>
            <motion.div
              className={styles.memberPhotoBox}
              variants={memberList}
              initial="hidden"
              whileInView="visible"
              custom={4}
              viewport={{ once: true }}
            >
              <motion.div className={styles.memberPhotoCon}>
                <Image
                  layout="fill"
                  src={"/member/rice.jpg"}
                  id={styles.rice}
                  alt="米爺"
                ></Image>
              </motion.div>
              <motion.span className={styles.memberName}>米爺</motion.span>
            </motion.div>
            <motion.div
              className={styles.memberPhotoBox}
              variants={memberList}
              initial="hidden"
              whileInView="visible"
              custom={5}
              viewport={{ once: true }}
            >
              <motion.div className={styles.memberPhotoCon}>
                <Image
                  layout="fill"
                  src={"/member/leungsiu.jpg"}
                  id={styles.leung}
                  alt="良少"
                ></Image>
              </motion.div>
              <motion.span className={styles.memberName}>良少</motion.span>
            </motion.div>
            <motion.div
              className={styles.memberPhotoBox}
              variants={memberList}
              initial="hidden"
              whileInView="visible"
              custom={6}
              viewport={{ once: true }}
            >
              <motion.div className={styles.memberPhotoCon}>
                <Image
                  layout="fill"
                  src={"/member/garbriel.jpg"}
                  id={styles.garbriel}
                  alt="比叔"
                ></Image>
              </motion.div>
              <motion.span className={styles.memberName}>比叔</motion.span>
            </motion.div>
            <div className={styles.photoMargin}></div>
          </motion.span>
          <motion.div className={styles.memberinfoOut}>
            <motion.div className={styles.memberinfoCon}>
              <motion.div className={styles.memberinfoLeft}></motion.div>
              <motion.div></motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div className={styles.textCon}>
        <div className={styles.frameRe} id={styles.frame}></div>
        <div className={styles.frame} id={styles.frame}></div>
        <motion.div className={styles.text1}>
          <motion.span className={styles.scroll} style={{ x: x1, opacity: op }}>
            Firm&nbsp; 0尊&nbsp; 是&nbsp; Can Cheaper ?&nbsp; 不如?&nbsp;
            就係咁囉&nbsp; is侮辱&nbsp; 就係咁囉
          </motion.span>
          <motion.span className={styles.scroll} style={{ x: x2, opacity: op }}>
            酒仙酒仙&nbsp; 拿拿趣&nbsp; 做畀你&nbsp; 我屌你老母呀 ?&nbsp; 不如
            ?&nbsp; 哭撚左&nbsp; 夠做埋黎&nbsp; 含&nbsp; 0Firm&nbsp; Let’s
            think&nbsp;
          </motion.span>
          <motion.span className={styles.scroll} style={{ x: x3, opacity: op }}>
            0興&nbsp; 小癲&nbsp; 咩老環&nbsp; Don’t know 做 what&nbsp;
            日向0似&nbsp; 招&nbsp; 62520
          </motion.span>
        </motion.div>
      </motion.div>
      <motion.div
        className={styles.textCon1}
        id={styles.textCon}
        style={{ height: "auto" }}
      >
        <div className={styles.frameRe} id={styles.frame}></div>
        <div className={styles.frame} id={styles.frame}></div>
        <motion.div
          className={styles.text1}
          initial={{ y: 25, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 1.5 },
          }}
          viewport={{ once: true }}
          style={{
            paddingTop: "calc(100px + 10vw)",
            paddingBottom: "calc(100px + 10vw)",
            fontWeight: "600",
          }}
        >
          更多內容將會陸續更新<br></br> <br></br>
          祝各位新年快樂 ! <br></br>
          <br></br>
          加入JFFT永遠都唔會遲！<br></br>
          <br></br>
        </motion.div>
      </motion.div>
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
