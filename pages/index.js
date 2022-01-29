import Head from "next/head";
import styles from "../styles/Home.module.css";
import Script from "next/script";
import { motion, useAnimation } from "framer-motion";
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
      delay: 4.5,
      duration: 1.5,
      ease: "easeInOut",
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

let showss = ["j6", "j5", "j2", "j3", "j4", "j1"];
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
          transition: { delay: 4, duration: 1.5 },
        }}
      >
        <Head>
          <title>JFFT</title>
          <meta name="description" content="JFFT" />
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
          </motion.svg>
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
          <motion.video
            autoPlay
            muted
            loop
            src={"/main.mp4"}
            controls="controls"
            preload="auto"
            className={styles.video}
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                delay: 6,
                duration: 1.5,
                ease: "easeInOut",
              },
            }}
            viewport={{ once: true }}
          >
            <source src={"/main.mp4#t=0.001"} type="video/mp4" />
          </motion.video>
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
                whileInView={{ fontSize: "calc(80px + 6vw)", color: "#E9007F" }}
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
      {list}
      <motion.footer
        className={styles.footer}
        whileInView={{
          opacity: [0, 1],
          transition: { delay: 6, duration: 1.5 },
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
