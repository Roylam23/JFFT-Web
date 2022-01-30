import Head from "next/head";
import styles from "../styles/Home.module.css";
import Script from "next/script";
import {
  useViewportScroll,
  motion,
  useTransform,
  useMotionValue,
} from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";

const load = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = i * 0.5;
    return {
      opacity: 1,
      pathLength: 1,
      transition: {
        pathLength: { delay, duration: 1.25 },
        opacity: { delay, duration: 0.5 },
      },
    };
  },
};

const load1 = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 6 + i * 0.5;
    return {
      opacity: 1,
      pathLength: 1,
      transition: {
        pathLength: { delay, duration: 1.25 },
        opacity: { delay, duration: 0.5 },
      },
    };
  },
};

const hidden = {
  visible: {
    height: "calc(55px + 1vw)",
    backgroundImage:
      "linear-gradient(to bottom,rgba(0,0,0,.7) 10%,rgba(0,0,0,0))",
    // backgroundColor: "transparent",
    transition: {
      delay: 4,
      duration: 1.5,
      backgroundImage: { delay: 5, duration: 1.5 },
      backgroundColor: { delay: 4, duration: 1.5 },
    },
  },
};

const end = {
  visible: {
    width: "0px",
    height: "auto",
    transition: {
      delay: 4,
      duration: 1.5,
    },
  },
};

const icon = {
  hidden: {
    opacity: 0,
    y: 0,
  },
  hover: {
    y: -40,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
  visible: (i) => {
    const delay = 2.5 + i * 0.15;
    return {
      opacity: 1,
      y: -20,
      transition: {
        opacity: { delay, duration: 1 },
        y: { delay, duration: 1 },
      },
    };
  },
};

const clickTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const show = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  visible: (i) => {
    const delay = 6 + i * 0.15;
    return {
      opacity: 1,
      x: 0,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    };
  },
};

let showss = ["j5", "j4", "j3", "j1", "j2", "j6"];
let showes = [];
showss.forEach((item, index) => {
  const a = "/" + item + ".webp";
  const b =
    "https://www.youtube.com/watch?v=jIB5dPRMSRg&list=PLU9puGF2UY12vasd3ATv1VJwMHieMN-TQ";
  showes.push(
    <a className={styles.showImgA} href={b} target="_blank" rel="noreferrer">
      <motion.img
        src={a}
        alt=""
        className={styles.showImg}
        variants={show}
        initial="hidden"
        animate="visible"
        // viewport={{ once: true }}
        custom={index}
      />
    </a>
  );
});

let list = [];

for (let i = 0; i < 5; i++) {
  list.push(
    <motion.div
      className={styles.aceBox2}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 4.5, duration: 1.5 } }}
    >
      <span className={styles.optionTitle}>人氣節目</span>
      <div className={styles.showBox}>
        <div className={styles.boxMargin}></div>
        {showes}
      </div>
    </motion.div>
  );
}

export default function Home() {
  // const { scrollY } = useViewportScroll();
  // const y1 = useTransform(scrollY, [0, 1000], [0, 500]);
  // const y2 = useTransform(scrollY, [0, 1000], [0, -50]);
  // const op = useTransform(scrollY, [0, 500], [0, 1])
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        document.querySelector("#nav").classList.add("black");
      } else if (scrollY == 0) {
        document.querySelector("#nav").classList.remove("black");
      }
    };

    // just trigger this so that the initial state
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <motion.div
      className={styles.mainContainer}
      initial={{ height: "100vh", overflow: "hidden" }}
      animate={{
        height: "auto",
        overflow: "visible",
        transition: { delay: 4, duration: 1.5 },
      }}
    >
      <motion.div
        className={styles.container}
        initial={{ height: "100vh", overflow: "hidden" }}
        animate={{
          height: "calc(250px + 35vw)",
          overflow: "visible",
          transition: { delay: 4, duration: 1.5, ease: "easeInOut" },
        }}
      >
        <Head>
          <title>JFFT</title>
          <meta name="description" content="JFFT" />
          <meta name="description" content="Jun For Fun Team" />
          <meta
            name="robots"
            content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
          ></meta>
          <meta property="og:title" content="JFFT"></meta>
          <meta property="og:site_name" content="JFFT"></meta>
          <meta name="author" content="RL"></meta>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Script src="https://code.iconify.design/2/2.1.2/iconify.min.js"></Script>
        <motion.div
          className={("nav", styles.logoBox)}
          id="nav"
          variants={hidden}
          animate="visible"
        >
          <motion.svg
            width="calc(30px + .8vw)"
            viewBox="0 0 119 101"
            className={styles.load_icon1}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial="hidden"
            animate="visible"
            onClick={clickTop}
          >
            <motion.path
              d="M21.4346 33.4273C14.6663 26.1002 10.2974 19.3375 7.08741 9.09273C7.04328 8.95191 7.21956 8.84739 7.32158 8.95402C13.3177 15.2211 18.9454 19.6224 28.1267 23.4861C28.2838 23.5522 28.4655 23.4595 28.5084 23.2946C32.3032 8.702 39.2638 3.166 45.691 8.24407C45.7976 8.32825 45.9582 8.21904 45.93 8.08622C43.7433 -2.23008 58.5728 2.0094 61.1223 11.4742C61.1518 11.5835 61.2938 11.6174 61.3693 11.5331C70.1963 1.68703 84.6207 2.39733 88.492 17.2157C88.5351 17.3805 88.7185 17.4748 88.8772 17.4131C95.2981 14.9162 97.6066 17.922 96.4195 31.5983C96.4071 31.741 96.5067 31.8757 96.647 31.905C107.283 34.1201 110.969 45.0022 107.364 55.8155C103.006 64.6167 101.87 64.0083 100.445 65.727C100.342 65.8509 100.494 65.9807 100.617 65.877C109.082 58.7443 107.278 66.0499 97.0887 74.9485C96.9801 75.0433 97.0655 75.2284 97.2074 75.203C102.099 74.3277 101.726 76.4606 96.0759 85.1083C95.9775 85.2589 95.9838 85.4618 96.0957 85.6025C101.496 92.3953 107.114 95.4375 115.941 98.275C116.095 98.3244 116.055 98.5537 115.893 98.5507C102.199 98.2959 93.2679 97.4113 80.7784 95.1975C80.0746 95.0728 79.3465 95.1422 78.6776 95.3944C66.8244 99.863 60.9865 100.594 62.8198 94.4634C62.857 94.3391 62.7197 94.2261 62.6081 94.2921C53.1508 99.8885 46.9357 100.162 48.9415 93.8197C48.9767 93.7081 48.8683 93.5969 48.7579 93.6357C40.4069 96.5702 36.0888 96.4961 34.0877 92.0542C33.9977 91.8544 33.8017 91.7164 33.583 91.7035C25.9166 91.2494 22.1628 86.6059 26.0371 82.909C26.2508 82.7051 26.0493 82.2915 25.7567 82.3319C-1.98725 86.1611 -2.81995 62.7463 10.4039 53.9992C11.1369 53.9992 4.87874 49.1054 11.5739 48.8355C11.737 48.8289 11.8165 48.4867 11.6775 48.4011C7.57934 45.8749 8.71012 36.2272 21.2686 33.902C21.4879 33.8614 21.5859 33.5911 21.4346 33.4273Z"
              fill="black"
              variants={load1}
              custom={1}
            />
            <motion.path
              d="M52.2595 0.331276C55.8134 1.23418 59.7966 3.99483 61.9651 8.00027C66.4435 4.10205 71.9392 2.25979 77.1011 3.05406C82.7729 3.9268 87.5901 7.90914 89.9622 14.8521C91.0649 14.5664 92.1562 14.4386 93.1973 14.5752C94.9851 14.8096 96.3917 15.7911 97.313 17.399C98.1618 18.8802 98.5709 20.8335 98.7288 23.1166C98.865 25.0856 98.8227 27.4529 98.6227 30.2447C103.802 31.7826 107.401 35.3063 109.275 39.8345C111.305 44.7376 111.275 50.6922 109.346 56.4784L109.3 56.6159L109.236 56.7458C108.307 58.6202 107.51 60.1015 106.81 61.2902C107.189 61.5186 107.514 61.8463 107.742 62.2652C108.054 62.8401 108.097 63.4224 108.075 63.8407C108.052 64.2717 107.953 64.6848 107.834 65.0501C107.381 66.4438 106.269 68.2085 104.754 70.0887C103.853 71.2081 102.765 72.4217 101.498 73.6909C101.837 73.9535 102.136 74.2961 102.355 74.7318C102.724 75.4668 102.744 76.2293 102.667 76.8447C102.521 78.014 101.927 79.3604 101.164 80.7809C100.496 82.0244 99.5994 83.5009 98.4898 85.2272C103.314 90.9445 108.415 93.6568 116.576 96.2801C117.816 96.6786 118.252 97.8825 118.093 98.792C117.936 99.6956 117.132 100.67 115.848 100.646C102.047 100.39 93.0064 99.4947 80.406 97.2613C80.0768 97.203 79.7303 97.235 79.4103 97.3556C76.4194 98.4831 73.7646 99.3917 71.4907 100.017C69.2464 100.634 67.2397 101.015 65.5904 101C64.0007 100.985 62.156 100.586 61.0983 98.9733C60.8551 98.6026 60.683 98.2104 60.569 97.8051C59.2895 98.4554 58.074 98.9998 56.9374 99.4309C54.9458 100.186 53.0646 100.645 51.4486 100.629C49.8324 100.613 48.0495 100.09 47.0779 98.4021C46.7495 97.8315 46.5678 97.2145 46.4973 96.5741C43.5648 97.4415 41.014 97.8875 38.853 97.6991C37.3699 97.5698 36.0023 97.1378 34.8218 96.2911C33.8836 95.6183 33.1499 94.7455 32.5783 93.7261C28.8156 93.3478 25.6583 91.996 23.8717 89.8713C22.8801 88.692 22.2854 87.2257 22.4073 85.6204C22.4294 85.3297 22.4743 85.044 22.5404 84.7642C16.9635 85.1186 12.4246 84.3246 8.88752 82.6434C4.59709 80.6041 1.89979 77.3092 0.710686 73.5075C-1.43847 66.6363 1.41646 58.5261 7.52214 53.5198C7.29417 53.197 7.06516 52.8377 6.87652 52.4648C6.49207 51.7049 5.85269 50.0367 6.97633 48.5127C7.30658 48.0648 7.72418 47.7337 8.17288 47.4886C7.16335 45.3554 7.23204 42.642 8.30489 40.2259C9.72548 37.0265 12.8617 34.1622 17.8607 32.5872C12.0403 25.8792 8.06354 19.2382 5.08103 9.71949C4.37982 7.4816 7.18265 5.78434 8.82927 7.50539C14.2386 13.1592 19.2709 17.1949 27.0407 20.7272C28.9459 14.3073 31.5691 9.50739 34.7462 6.7983C36.537 5.27134 38.5774 4.35105 40.7791 4.30621C41.7865 4.28569 42.7725 4.44957 43.7277 4.77701C43.9712 3.38349 44.6047 2.1851 45.7005 1.30129C47.5651 -0.202529 50.095 -0.218647 52.2595 0.331276ZM98.255 77.1626C98.064 77.1852 97.8372 77.2183 97.57 77.2662C96.4047 77.4747 95.5016 76.7677 95.1468 76.0039C94.7953 75.2471 94.835 74.1288 95.7035 73.3702C97.9494 71.4088 99.755 69.544 101.105 67.9293C100.432 68.1146 99.6726 67.9924 99.0725 67.4759C98.6541 67.1158 98.3522 66.5781 98.3127 65.9486C98.2725 65.3067 98.5142 64.7641 98.8248 64.3896L100.438 65.7272L100.592 65.8547M100.438 65.7272L98.8248 64.3896C99.2811 63.8392 99.7254 63.4585 100.073 63.1604C100.097 63.1404 100.119 63.1208 100.142 63.1016C100.491 62.8014 100.811 62.5202 101.213 62.0556C102.039 61.1024 103.302 59.2682 105.414 55.0173C107.044 50.0378 106.96 45.1986 105.403 41.4377C103.859 37.7079 100.83 34.9183 96.213 33.9568C95.0271 33.7098 94.2215 32.6107 94.3251 31.4172C94.6175 28.0484 94.6866 25.4175 94.5475 23.4058C94.4057 21.3569 94.059 20.1505 93.6764 19.4829C93.3664 18.9418 93.0662 18.7853 92.6523 18.731C92.0732 18.655 91.1211 18.7867 89.6301 19.3665C88.2965 19.885 86.8157 19.1152 86.4578 17.7457C84.6968 11.005 80.6967 7.84804 76.4637 7.1967C72.1052 6.52605 66.9632 8.42561 62.9232 12.9321C61.7369 14.2554 59.554 13.734 59.0922 12.0194C58.0452 8.13251 54.3681 5.19155 51.2274 4.39361C49.6392 3.99009 48.7124 4.25686 48.3318 4.56382C48.0784 4.76822 47.5092 5.46123 47.9736 7.6518C48.1969 8.70558 47.6459 9.57006 47.0189 9.98909C46.3798 10.4161 45.2971 10.6091 44.3852 9.88862C43.0718 8.85089 41.8926 8.47579 40.8645 8.49673C39.8348 8.5177 38.6929 8.9413 37.4657 9.98766C34.9351 12.1454 32.3884 16.6759 30.5301 23.8222C30.1747 25.1888 28.6737 25.9929 27.3073 25.4179C21.0262 22.7747 16.3365 19.8725 12.0987 16.3474C14.8267 22.2067 18.2936 26.9457 22.9674 32.0054C24.3146 33.4639 23.3734 35.6426 21.6436 35.9629C15.8632 37.0331 13.1283 39.6913 12.1356 41.9268C11.0756 44.3141 11.8889 46.0737 12.7706 46.6172C13.4439 47.0322 13.6989 47.6639 13.7848 48.0621C13.8721 48.4663 13.8408 48.8377 13.7723 49.1288C13.7041 49.4178 13.5644 49.7748 13.2913 50.1073C13.0164 50.4419 12.4708 50.8966 11.6518 50.9297C11.3364 50.9424 11.0789 50.9664 10.8712 50.9955C11.0625 51.2763 11.3049 51.5798 11.5695 51.9031C11.5832 51.9198 11.5977 51.9375 11.613 51.9561C11.7642 52.1402 11.9867 52.4113 12.1371 52.6412C12.1863 52.7163 12.2564 52.8294 12.3229 52.9671C12.3764 53.0781 12.5009 53.3507 12.5409 53.7159C12.584 54.1089 12.5444 54.8893 11.8816 55.5123C11.7164 55.6676 11.5444 55.7817 11.3774 55.8654C5.55127 59.825 3.02331 66.8606 4.71095 72.2563C5.54502 74.9229 7.43139 77.3105 10.6868 78.8579C13.9833 80.4247 18.7958 81.1764 25.4636 80.2561C26.7626 80.0768 27.6332 80.9305 27.9648 81.6125C28.2968 82.2951 28.432 83.5144 27.4772 84.4255C26.7884 85.0828 26.6116 85.6094 26.5867 85.938C26.5624 86.2573 26.6589 86.6734 27.0797 87.1738C27.9813 88.246 30.1795 89.4032 33.7003 89.6117C34.7158 89.6718 35.5893 90.3001 35.9918 91.1936C36.375 92.0442 36.8094 92.5587 37.2645 92.8851C37.7174 93.2099 38.3265 93.4459 39.217 93.5236C41.1077 93.6884 43.9052 93.1175 48.0566 91.6588C49.9219 91.0033 51.4488 92.8206 50.933 94.4518C50.5236 95.7465 50.6772 96.2298 50.7061 96.3013C50.714 96.3062 50.727 96.3134 50.7465 96.3222C50.8415 96.3652 51.0673 96.4334 51.4905 96.4376C52.3596 96.4463 53.6801 96.1836 55.451 95.512C57.1917 94.8518 59.2434 93.8444 61.5342 92.4888C63.4185 91.3738 65.3606 93.2599 64.8211 95.0641C64.5121 96.0974 64.5738 96.5325 64.6019 96.6515C64.6973 96.7016 64.9741 96.8023 65.6289 96.8084C66.6916 96.8181 68.2523 96.5609 70.379 95.9759C72.4761 95.399 74.996 94.5404 77.9317 93.4337C78.9494 93.05 80.0591 92.9431 81.1375 93.1343C89.9212 94.6912 96.9138 95.5836 105.089 96.061C101.107 93.8568 97.7301 91.0348 94.4487 86.907C93.7558 86.0354 93.7393 84.8431 94.3148 83.9623C95.7185 81.8137 96.7616 80.1193 97.4711 78.798C97.8444 78.1028 98.0938 77.5666 98.255 77.1626M64.5595 96.6237C64.5598 96.6234 64.5637 96.6261 64.5702 96.6327C64.5624 96.6273 64.5592 96.624 64.5595 96.6237ZM10.5223 50.3445C10.5237 50.3452 10.5288 50.3596 10.5331 50.3853C10.5231 50.3565 10.5209 50.3437 10.5223 50.3445Z"
              fill="#E9007F"
              variants={load1}
              custom={1}
            />
            <motion.path
              d="M73.4463 50.0978C74.2121 49.2299 75.5364 49.1472 76.4043 49.9129C79.3874 52.545 83.1825 53.042 86.2558 50.4986C87.1475 49.7606 88.4685 49.8853 89.2065 50.7769C89.9444 51.6686 89.8198 52.9897 88.9281 53.7276C83.898 57.8904 77.7735 56.7108 73.6312 53.0558C72.7633 52.29 72.6806 50.9657 73.4463 50.0978Z"
              fill="white"
              variants={load1}
              custom={1}
            />
            <motion.path
              d="M46.6653 52.2464C47.5566 52.9847 47.6807 54.3058 46.9423 55.1972C44.3386 58.3406 41.7569 60.8115 38.9367 62.085C35.9602 63.429 32.9068 63.3577 29.6902 61.8311C28.6446 61.3349 28.1992 60.0849 28.6954 59.0393C29.1917 57.9937 30.4416 57.5483 31.4873 58.0445C33.6863 59.0882 35.4492 59.0608 37.2118 58.265C39.1308 57.3985 41.2112 55.5456 43.7145 52.5235C44.4528 51.6321 45.774 51.5081 46.6653 52.2464Z"
              fill="white"
              variants={load1}
              custom={1}
            />
            <motion.path
              d="M78.1328 38.7774C77.2352 37.9044 75.8695 37.2956 73.8634 37.4743C71.8586 37.6528 70.5647 38.5023 69.7711 39.5615C68.9478 40.6603 68.5677 42.1173 68.6829 43.5944C68.7982 45.073 69.3988 46.4342 70.3566 47.3597C71.2756 48.2478 72.6302 48.8432 74.5469 48.6678C78.1883 48.3344 79.9065 45.4708 79.7299 42.5103C79.6419 41.033 79.0694 39.6883 78.1328 38.7774ZM83.7744 42.2691C84.052 46.9229 81.1946 52.1278 74.9163 52.7026C71.8733 52.9812 69.3421 52.0136 67.5411 50.2733C65.7789 48.5705 64.8251 46.2379 64.6435 43.9094C64.4618 41.5793 65.0423 39.1156 66.5286 37.132C68.0446 35.1087 70.4095 33.7141 73.5041 33.4385C76.5975 33.1631 79.1526 34.1173 80.9576 35.8728C82.7235 37.5902 83.6355 39.9391 83.7744 42.2691Z"
              fill="white"
              variants={load1}
              custom={1}
            />
            <motion.path
              d="M44.4552 43.5281C43.5577 42.6552 42.192 42.0464 40.1859 42.225C38.181 42.4035 36.8872 43.2531 36.0935 44.3123C35.2702 45.411 34.8902 46.8681 35.0054 48.3451C35.1207 49.8238 35.7212 51.1849 36.679 52.1104C37.5981 52.9985 38.9526 53.594 40.8694 53.4185C44.5108 53.0852 46.229 50.2216 46.0524 47.261C45.9643 45.7838 45.3918 44.439 44.4552 43.5281ZM50.0969 47.0198C50.3744 51.6737 47.517 56.8786 41.2388 57.4533C38.1957 57.7319 35.6645 56.7644 33.8636 55.0241C32.1013 53.3212 31.1475 50.9887 30.966 48.6601C30.7843 46.33 31.3648 43.8664 32.8511 41.8827C34.3671 39.8595 36.7319 38.4649 39.8266 38.1893C42.92 37.9139 45.475 38.8681 47.28 40.6235C49.046 42.341 49.958 44.6899 50.0969 47.0198Z"
              fill="white"
              variants={load1}
              custom={1}
            />
            <motion.path
              d="M77.7551 52.7661L75.6478 56.1778C73.838 59.108 71.5233 60.3916 68.8821 61.0216C67.6253 61.3214 66.2932 61.4749 64.9685 61.6087C64.7209 61.6337 64.473 61.658 64.2242 61.6825C63.1101 61.792 61.9773 61.9033 60.7666 62.0822C59.1356 62.3231 57.7129 62.6268 56.3823 62.9107C56.2709 62.9345 56.1602 62.9582 56.05 62.9816C54.6574 63.278 53.2901 63.5608 51.9882 63.6508C50.6507 63.7433 49.3097 63.6403 47.9449 63.1297C46.5855 62.621 45.327 61.7546 44.077 60.4993L41.4103 57.821L77.7551 52.7661Z"
              fill="white"
              variants={load1}
              custom={1}
            />
            <motion.path
              d="M76.1215 49.0118C77.1783 49.2355 77.8538 50.2736 77.6301 51.3304C77.2585 53.0859 76.6182 54.7128 75.763 56.1937L83.4712 63.3208C84.2643 64.0542 84.3128 65.2917 83.5794 66.0849C82.8461 66.8781 81.6085 66.9265 80.8154 66.1932L73.4214 59.3566C72.3626 60.4985 71.1604 61.5047 69.857 62.3674L70.9498 65.9469L74.2315 64.7971C75.251 64.44 76.367 64.9769 76.7242 65.9964C77.0814 67.0159 76.5444 68.1319 75.5249 68.4891L72.093 69.6914L73.6753 74.8739C73.9907 75.9071 73.4089 77.0004 72.3757 77.3158C71.3425 77.6312 70.2492 77.0494 69.9338 76.0162L66.3416 64.2503C64.2407 65.1418 61.9828 65.7249 59.679 65.9691L59.7205 68.5697L63.3226 68.2572C64.3988 68.1638 65.3469 68.9605 65.4403 70.0367C65.5337 71.113 64.7369 72.0611 63.6607 72.1545L59.7832 72.4909L59.8588 77.2301C59.8761 78.3102 59.0145 79.1998 57.9344 79.2171C56.8542 79.2343 55.9646 78.3727 55.9474 77.2926L55.7679 66.054C54.6396 65.9827 53.5122 65.8271 52.3987 65.5825C51.0994 69.1588 49.5233 71.6589 47.7962 73.2407C45.7563 75.1091 43.416 75.7441 41.3059 75.0855C37.1447 73.7869 35.7431 68.2696 39.3008 64.5271C40.0451 63.7441 41.2832 63.7128 42.0661 64.4571C42.849 65.2013 42.8804 66.4394 42.1361 67.2224C40.3149 69.1382 41.4281 71.0257 42.4713 71.3512C42.9633 71.5048 43.8975 71.5067 45.154 70.3559C46.2567 69.3459 47.5224 67.4996 48.6702 64.3879C45.2221 62.8916 42.3355 60.4127 39.8779 56.8578C39.2637 55.9692 39.486 54.7508 40.3746 54.1366C41.2632 53.5223 42.4815 53.7446 43.0958 54.6332C45.5597 58.1973 48.3638 60.2944 51.7171 61.3553C53.6283 61.96 55.6407 62.2279 57.6496 62.1828C60.8141 62.1117 63.9342 61.2644 66.5889 59.7804C68.6201 58.645 70.3569 57.1496 71.6422 55.3691C72.6757 53.9374 73.4233 52.3138 73.8029 50.5204C74.0266 49.4635 75.0647 48.7881 76.1215 49.0118Z"
              fill="#E9007F"
              variants={load1}
              custom={1}
            />
          </motion.svg>

          {/* <motion.svg
            width="calc(30px + .8vw)"
            viewBox="0 0 846 724"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.load_icon1}
            initial="hidden"
            animate="visible"
            onClick={clickTop}
          >
            <motion.path
              d="M153.453 239.755C105.008 187.311 73.7379 138.908 50.762 65.58C50.4462 64.5721 51.7079 63.8239 52.4381 64.5872C95.3553 109.444 135.636 140.946 201.352 168.601C202.476 169.074 203.777 168.41 204.084 167.23C231.245 62.7833 281.066 23.1592 327.069 59.5057C327.832 60.1082 328.982 59.3265 328.78 58.3758C313.128 -15.4635 419.271 14.8808 437.52 82.6255C437.731 83.4078 438.747 83.6501 439.288 83.0468C502.467 12.5734 605.711 17.6574 633.42 123.721C633.728 124.9 635.041 125.575 636.177 125.133C682.135 107.262 698.658 128.776 690.161 226.664C690.073 227.686 690.785 228.65 691.789 228.859C767.914 244.714 794.299 322.603 768.5 400C737.301 462.995 729.172 458.641 718.971 470.942C718.236 471.829 719.326 472.758 720.207 472.015C780.796 420.963 767.88 473.253 694.951 536.945C694.174 537.624 694.785 538.949 695.801 538.767C730.81 532.502 728.141 547.768 687.702 609.664C686.997 610.742 687.043 612.195 687.844 613.202C726.494 661.821 766.706 683.596 829.889 703.906C830.988 704.259 830.701 705.901 829.547 705.879C731.526 704.055 667.603 697.724 578.209 681.879C573.172 680.986 567.96 681.483 563.173 683.288C478.333 715.272 436.547 720.506 449.67 676.624C449.936 675.735 448.953 674.926 448.154 675.398C380.463 715.455 335.978 717.413 350.335 672.016C350.587 671.218 349.811 670.422 349.021 670.7C289.248 691.703 258.341 691.173 244.018 659.38C243.374 657.95 241.971 656.963 240.406 656.87C185.533 653.62 158.665 620.384 186.395 593.923C187.925 592.464 186.483 589.503 184.388 589.792C-14.1904 617.2 -20.1504 449.607 74.5002 387C79.7463 387 34.9533 351.973 82.8745 350.04C84.042 349.993 84.6105 347.544 83.6159 346.931C54.283 328.85 62.3766 259.796 152.265 243.153C153.835 242.863 154.536 240.928 153.453 239.755Z"
              stroke="#E9007F"
              stroke-width="30"
              variants={load1}
              custom={1}
            />
            <motion.path
              d="M537 369C562.5 391.5 598 397.5 627 373.5"
              stroke="white"
              stroke-width="30"
              variants={load1}
              stroke-linecap="round"
              custom={2}
            />
            <motion.path
              d="M219 429.5C257.763 447.896 287.946 430.13 324.5 386"
              stroke="white"
              stroke-width="30"
              variants={load1}
              stroke-linecap="round"
              custom={2}
            />
            <motion.path
              d="M527.438 254.279C600.437 247.779 605.938 356.779 534.938 363.279C463.938 369.779 454.438 260.779 527.438 254.279Z"
              stroke="white"
              stroke-width="29"
              variants={load1}
              custom={3}
            />
            <motion.path
              d="M286.438 288.279C359.437 281.779 364.938 390.779 293.938 397.279C222.938 403.779 213.438 294.779 286.438 288.279Z"
              stroke="white"
              stroke-width="29"
              variants={load1}
              custom={3}
            />
            <motion.path
              d="M530 395.5L325.084 424C356.812 455.866 380.386 439.273 433 431.5C477 425 508.472 430.353 530 395.5Z"
              stroke="white"
              stroke-width="27"
              stroke-linecap="round"
              variants={load1}
              custom={4}
            />
            <motion.path
              d="M297 399.5C316.155 427.209 338.65 444.347 366 453M542 365C538.858 379.845 532.668 393.255 524.19 405M366 453C327.5 578 253 512.5 291.5 472M366 453C381.235 457.82 397.178 459.927 413 459.571M413 459.571L413.75 506.536M413 459.571C437.879 459.012 462.456 452.364 483.5 440.6M414.5 553.5L413.75 506.536M413.75 506.536L454.5 503M483.5 440.6L498.75 490.55M483.5 440.6C499.62 431.589 513.667 419.577 524.19 405M514 540.5L498.75 490.55M498.75 490.55L536 477.5M524.19 405L588 464"
              stroke="#E9007F"
              stroke-width="28"
              stroke-linecap="round"
              variants={load1}
              custom={4}
            />
          </motion.svg> */}
          <motion.svg
            width="calc(65px + 6vw)"
            height="724"
            viewBox="0 0 846 724"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.load_icon}
            variants={end}
            initial="hidden"
            animate="visible"
            onClick={clickTop}
          >
            <motion.path
              d="M153.453 239.755C105.008 187.311 73.7379 138.908 50.762 65.58C50.4462 64.5721 51.7079 63.8239 52.4381 64.5872C95.3553 109.444 135.636 140.946 201.352 168.601C202.476 169.074 203.777 168.41 204.084 167.23C231.245 62.7833 281.066 23.1592 327.069 59.5057C327.832 60.1082 328.982 59.3265 328.78 58.3758C313.128 -15.4635 419.271 14.8808 437.52 82.6255C437.731 83.4078 438.747 83.6501 439.288 83.0468C502.467 12.5734 605.711 17.6574 633.42 123.721C633.728 124.9 635.041 125.575 636.177 125.133C682.135 107.262 698.658 128.776 690.161 226.664C690.073 227.686 690.785 228.65 691.789 228.859C767.914 244.714 794.299 322.603 768.5 400C737.301 462.995 729.172 458.641 718.971 470.942C718.236 471.829 719.326 472.758 720.207 472.015C780.796 420.963 767.88 473.253 694.951 536.945C694.174 537.624 694.785 538.949 695.801 538.767C730.81 532.502 728.141 547.768 687.702 609.664C686.997 610.742 687.043 612.195 687.844 613.202C726.494 661.821 766.706 683.596 829.889 703.906C830.988 704.259 830.701 705.901 829.547 705.879C731.526 704.055 667.603 697.724 578.209 681.879C573.172 680.986 567.96 681.483 563.173 683.288C478.333 715.272 436.547 720.506 449.67 676.624C449.936 675.735 448.953 674.926 448.154 675.398C380.463 715.455 335.978 717.413 350.335 672.016C350.587 671.218 349.811 670.422 349.021 670.7C289.248 691.703 258.341 691.173 244.018 659.38C243.374 657.95 241.971 656.963 240.406 656.87C185.533 653.62 158.665 620.384 186.395 593.923C187.925 592.464 186.483 589.503 184.388 589.792C-14.1904 617.2 -20.1504 449.607 74.5002 387C79.7463 387 34.9533 351.973 82.8745 350.04C84.042 349.993 84.6105 347.544 83.6159 346.931C54.283 328.85 62.3766 259.796 152.265 243.153C153.835 242.863 154.536 240.928 153.453 239.755Z"
              stroke="#E9007F"
              stroke-width="30"
              variants={load}
              custom={1}
            />
            <motion.path
              d="M537 369C562.5 391.5 598 397.5 627 373.5"
              stroke="white"
              stroke-width="30"
              variants={load}
              stroke-linecap="round"
              custom={2}
            />
            <motion.path
              d="M219 429.5C257.763 447.896 287.946 430.13 324.5 386"
              stroke="white"
              stroke-width="30"
              variants={load}
              stroke-linecap="round"
              custom={2}
            />
            <motion.path
              d="M527.438 254.279C600.437 247.779 605.938 356.779 534.938 363.279C463.938 369.779 454.438 260.779 527.438 254.279Z"
              stroke="white"
              stroke-width="29"
              variants={load}
              custom={3}
            />
            <motion.path
              d="M286.438 288.279C359.437 281.779 364.938 390.779 293.938 397.279C222.938 403.779 213.438 294.779 286.438 288.279Z"
              stroke="white"
              stroke-width="29"
              variants={load}
              custom={3}
            />
            <motion.path
              d="M530 395.5L325.084 424C356.812 455.866 380.386 439.273 433 431.5C477 425 508.472 430.353 530 395.5Z"
              stroke="white"
              stroke-width="27"
              stroke-linecap="round"
              variants={load}
              custom={4}
            />
            <motion.path
              d="M297 399.5C316.155 427.209 338.65 444.347 366 453M542 365C538.858 379.845 532.668 393.255 524.19 405M366 453C327.5 578 253 512.5 291.5 472M366 453C381.235 457.82 397.178 459.927 413 459.571M413 459.571L413.75 506.536M413 459.571C437.879 459.012 462.456 452.364 483.5 440.6M414.5 553.5L413.75 506.536M413.75 506.536L454.5 503M483.5 440.6L498.75 490.55M483.5 440.6C499.62 431.589 513.667 419.577 524.19 405M514 540.5L498.75 490.55M498.75 490.55L536 477.5M524.19 405L588 464"
              stroke="#E9007F"
              stroke-width="28"
              stroke-linecap="round"
              variants={load}
              custom={4}
            />
          </motion.svg>
        </motion.div>
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
            src="/main.mp4"
            class="${styles.video}"
          />,
        `,
            }}
          ></div>
          <img id={styles.back} src={"/back.jpg"}></img>
          <div className={styles.filter}></div>
          <motion.div className={styles.title}>
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
                lineHeight: "calc(50px + 2.2vw)",
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
                whileInView={{
                  fontSize: "calc(80px + 6vw)",
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
        </motion.div>
        <motion.div
          className={styles.aceBox}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 4.5, duration: 1.5 } }}
        >
          <span className={styles.optionTitle}>人氣節目</span>
          <div className={styles.showBox}>
            <div className={styles.boxMargin}></div>
            {showes}
          </div>
        </motion.div>
        <div className={styles.frame}></div>
      </motion.div>
      <motion.div className={styles.textCon}>
        <motion.div
          className={styles.text1}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
          }}
          viewport={{once: true }}
        >
          更多內容將會陸續更新
        </motion.div>
      </motion.div>
      <motion.footer
        className={styles.footer}
        whileInView={{
          opacity: [0, 1],
          transition: { delay: 6, duration: 1 },
        }}
        viewport={{ once: true }}
      >
        <span>© 2022 JFFT</span>
        <span></span>
        <span>醉愛JFFT</span>
      </motion.footer>
    </motion.div>
  );
}
