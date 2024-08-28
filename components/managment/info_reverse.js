import styles from "./info_reverse.module.css";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import back from "@/public/svg/back.svg";
import forward from "@/public/svg/forward.svg";
import { motion } from "framer-motion";

const InfoReverse = (props) => {
  const [zIndex, setZIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const duration = 0.3;
  const refQ1 = useRef();
  const refQ2 = useRef();
  const refQ3 = useRef();
  const refQ4 = useRef();
  const refQ5 = useRef();
  const refQ6 = useRef();
  const refQ7 = useRef();
  const refQ8 = useRef();
  const refPerson = useRef();

  const refArray = [
    refPerson,
    refQ1,
    refQ2,
    refQ3,
    refQ4,
    refQ5,
    refQ6,
    refQ7,
    refQ8,
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth((prevWidth) => {
        const newWidth = window.innerWidth;
        if (newWidth <= 1200) {
          for (let refItem of refArray) {
            refItem.current.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
            let splitted = window
              .getComputedStyle(refItem.current)
              .backgroundColor.split(",");
            splitted[2] = splitted[2].replace(")", "");
            splitted[3] = "0.999)";
            refItem.current.style.backgroundColor = splitted.join(",");
          }
        } else {
          refPerson.current.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
          refPerson.current.style.zIndex = 100;
          refQ1.current.style.transform =
            "matrix(0.984808, 0.173648, -0.173648, 0.984808, 5.20945, -29.5442)";
          refQ2.current.style.transform =
            "matrix(0.939693, 0.34202, -0.34202, 0.939693, -27.3616, 75.1754)";
          refQ3.current.style.transform =
            "matrix(0.866025, 0.5, -0.5, 0.866025, -37.3205, 24.641)";
          refQ4.current.style.transform =
            "matrix(0.642788, 0.766044, -0.766044, 0.642788, -112.707, -9.86055)";
          refQ5.current.style.transform =
            "matrix(0.984808, -0.173648, 0.173648, 0.984808, -15.0575, -27.8078)";
          refQ6.current.style.transform =
            "matrix(0.939693, -0.34202, 0.34202, 0.939693, 53.825, 1.69285)";
          refQ7.current.style.transform =
            "matrix(0.5, -0.866025, 0.866025, 0.5, 15.359, -106.603)";
          refQ8.current.style.transform =
            "matrix(0.766044, -0.642788, 0.642788, 0.766044, -7.66044, 6.42788)";
          for (let refItem of refArray) {
            let splitted = window
              .getComputedStyle(refItem.current)
              .backgroundColor.split(",");
            splitted[2] = splitted[2].replace(")", "");
            splitted[3] = "0.8)";
            refItem.current.style.backgroundColor = splitted.join(",");
            console.log(splitted);
          }
        }

        return newWidth;
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const changeIndexLeft = () => {
    const nextZIndex = zIndex - 1;
    setZIndex(nextZIndex);

    if (nextZIndex === -8 || nextZIndex === 8) {
      refPerson.current.style.zIndex = 0;
      refQ1.current.style.zIndex = 0;
      refQ2.current.style.zIndex = 0;
      refQ3.current.style.zIndex = 0;
      refQ4.current.style.zIndex = 0;
      refQ5.current.style.zIndex = 0;
      refQ6.current.style.zIndex = 0;
      refQ7.current.style.zIndex = 0;
      refQ8.current.style.zIndex = 1;
    } else if (nextZIndex === -7 || nextZIndex === 7) {
      refPerson.current.style.zIndex = 0;
      refQ1.current.style.zIndex = 0;
      refQ2.current.style.zIndex = 0;
      refQ3.current.style.zIndex = 0;
      refQ4.current.style.zIndex = 0;
      refQ5.current.style.zIndex = 0;
      refQ6.current.style.zIndex = 0;
      refQ7.current.style.zIndex = 1;
      refQ8.current.style.zIndex = 0;
    } else if (nextZIndex === -6 || nextZIndex === 6) {
      refPerson.current.style.zIndex = 0;
      refQ1.current.style.zIndex = 0;
      refQ2.current.style.zIndex = 0;
      refQ3.current.style.zIndex = 0;
      refQ4.current.style.zIndex = 0;
      refQ5.current.style.zIndex = 0;
      refQ6.current.style.zIndex = 1;
      refQ7.current.style.zIndex = 0;
      refQ8.current.style.zIndex = 0;
    } else if (nextZIndex === -5 || nextZIndex === 5) {
      refPerson.current.style.zIndex = 0;
      refQ1.current.style.zIndex = 0;
      refQ2.current.style.zIndex = 0;
      refQ3.current.style.zIndex = 0;
      refQ4.current.style.zIndex = 0;
      refQ5.current.style.zIndex = 1;
      refQ6.current.style.zIndex = 0;
      refQ7.current.style.zIndex = 0;
      refQ8.current.style.zIndex = 0;
    } else if (nextZIndex === -4 || nextZIndex === 4) {
      refPerson.current.style.zIndex = 0;
      refQ1.current.style.zIndex = 0;
      refQ2.current.style.zIndex = 0;
      refQ3.current.style.zIndex = 0;
      refQ4.current.style.zIndex = 1;
      refQ5.current.style.zIndex = 0;
      refQ6.current.style.zIndex = 0;
      refQ7.current.style.zIndex = 0;
      refQ8.current.style.zIndex = 0;
    } else if (nextZIndex === -3 || nextZIndex === 3) {
      refPerson.current.style.zIndex = 0;
      refQ1.current.style.zIndex = 0;
      refQ2.current.style.zIndex = 0;
      refQ3.current.style.zIndex = 1;
      refQ4.current.style.zIndex = 0;
      refQ5.current.style.zIndex = 0;
      refQ6.current.style.zIndex = 0;
      refQ7.current.style.zIndex = 0;
      refQ8.current.style.zIndex = 0;
    } else if (nextZIndex === -2 || nextZIndex === 2) {
      refPerson.current.style.zIndex = 0;
      refQ1.current.style.zIndex = 0;
      refQ2.current.style.zIndex = 1;
      refQ3.current.style.zIndex = 0;
      refQ4.current.style.zIndex = 0;
      refQ5.current.style.zIndex = 0;
      refQ6.current.style.zIndex = 0;
      refQ7.current.style.zIndex = 0;
      refQ8.current.style.zIndex = 0;
    } else if (nextZIndex === 1 || nextZIndex === -1) {
      refPerson.current.style.zIndex = 0;
      refQ1.current.style.zIndex = 1;
      refQ2.current.style.zIndex = 0;
      refQ3.current.style.zIndex = 0;
      refQ4.current.style.zIndex = 0;
      refQ5.current.style.zIndex = 0;
      refQ6.current.style.zIndex = 0;
      refQ7.current.style.zIndex = 0;
      refQ8.current.style.zIndex = 0;
    } else if (nextZIndex === 0) {
      refPerson.current.style.zIndex = 1;
      refQ1.current.style.zIndex = 0;
      refQ2.current.style.zIndex = 0;
      refQ3.current.style.zIndex = 0;
      refQ4.current.style.zIndex = 0;
      refQ5.current.style.zIndex = 0;
      refQ6.current.style.zIndex = 0;
      refQ7.current.style.zIndex = 0;
      refQ8.current.style.zIndex = 0;
    }

    if (nextZIndex > 8) {
      setZIndex(0);
      refPerson.current.style.zIndex = 1;
      refQ1.current.style.zIndex = 0;
      refQ2.current.style.zIndex = 0;
      refQ3.current.style.zIndex = 0;
      refQ4.current.style.zIndex = 0;
      refQ5.current.style.zIndex = 0;
      refQ6.current.style.zIndex = 0;
      refQ7.current.style.zIndex = 0;
      refQ8.current.style.zIndex = 0;
    }
    if (nextZIndex < -8) {
      setZIndex(0);
      refPerson.current.style.zIndex = 1;
      refQ1.current.style.zIndex = 0;
      refQ2.current.style.zIndex = 0;
      refQ3.current.style.zIndex = 0;
      refQ4.current.style.zIndex = 0;
      refQ5.current.style.zIndex = 0;
      refQ6.current.style.zIndex = 0;
      refQ7.current.style.zIndex = 0;
      refQ8.current.style.zIndex = 0;
    }
  };

  const changeIndexRight = () => {
    const nextZIndex = zIndex + 1;
    setZIndex(nextZIndex);
    if (nextZIndex === 0) {
      refPerson.current.style.zIndex = 1;
      refQ1.current.style.zIndex = 0;
      refQ2.current.style.zIndex = 0;
      refQ3.current.style.zIndex = 0;
      refQ4.current.style.zIndex = 0;
      refQ5.current.style.zIndex = 0;
      refQ6.current.style.zIndex = 0;
      refQ7.current.style.zIndex = 0;
      refQ8.current.style.zIndex = 0;
    } else if (nextZIndex === 1 || nextZIndex === -1) {
      refPerson.current.style.zIndex = 0;
      refQ1.current.style.zIndex = 1;
      refQ2.current.style.zIndex = 0;
      refQ3.current.style.zIndex = 0;
      refQ4.current.style.zIndex = 0;
      refQ5.current.style.zIndex = 0;
      refQ6.current.style.zIndex = 0;
      refQ7.current.style.zIndex = 0;
      refQ8.current.style.zIndex = 0;
    } else if (nextZIndex === 2 || nextZIndex === -2) {
      refPerson.current.style.zIndex = 0;
      refQ1.current.style.zIndex = 0;
      refQ2.current.style.zIndex = 1;
      refQ3.current.style.zIndex = 0;
      refQ4.current.style.zIndex = 0;
      refQ5.current.style.zIndex = 0;
      refQ6.current.style.zIndex = 0;
      refQ7.current.style.zIndex = 0;
      refQ8.current.style.zIndex = 0;
    } else if (nextZIndex === 3 || nextZIndex === -3) {
      refPerson.current.style.zIndex = 0;
      refQ1.current.style.zIndex = 0;
      refQ2.current.style.zIndex = 0;
      refQ3.current.style.zIndex = 1;
      refQ4.current.style.zIndex = 0;
      refQ5.current.style.zIndex = 0;
      refQ6.current.style.zIndex = 0;
      refQ7.current.style.zIndex = 0;
      refQ8.current.style.zIndex = 0;
    } else if (nextZIndex === 4 || nextZIndex === -4) {
      refPerson.current.style.zIndex = 0;
      refQ1.current.style.zIndex = 0;
      refQ2.current.style.zIndex = 0;
      refQ3.current.style.zIndex = 0;
      refQ4.current.style.zIndex = 1;
      refQ5.current.style.zIndex = 0;
      refQ6.current.style.zIndex = 0;
      refQ7.current.style.zIndex = 0;
      refQ8.current.style.zIndex = 0;
    } else if (nextZIndex === 5 || nextZIndex === -5) {
      refPerson.current.style.zIndex = 0;
      refQ1.current.style.zIndex = 0;
      refQ2.current.style.zIndex = 0;
      refQ3.current.style.zIndex = 0;
      refQ4.current.style.zIndex = 0;
      refQ5.current.style.zIndex = 1;
      refQ6.current.style.zIndex = 0;
      refQ7.current.style.zIndex = 0;
      refQ8.current.style.zIndex = 0;
    } else if (nextZIndex === 6 || nextZIndex === -6) {
      refPerson.current.style.zIndex = 0;
      refQ1.current.style.zIndex = 0;
      refQ2.current.style.zIndex = 0;
      refQ3.current.style.zIndex = 0;
      refQ4.current.style.zIndex = 0;
      refQ5.current.style.zIndex = 0;
      refQ6.current.style.zIndex = 1;
      refQ7.current.style.zIndex = 0;
      refQ8.current.style.zIndex = 0;
    } else if (nextZIndex === 7 || nextZIndex === -7) {
      refPerson.current.style.zIndex = 0;
      refQ1.current.style.zIndex = 0;
      refQ2.current.style.zIndex = 0;
      refQ3.current.style.zIndex = 0;
      refQ4.current.style.zIndex = 0;
      refQ5.current.style.zIndex = 0;
      refQ6.current.style.zIndex = 0;
      refQ7.current.style.zIndex = 1;
      refQ8.current.style.zIndex = 0;
    } else if (nextZIndex === 8 || nextZIndex === -8) {
      refPerson.current.style.zIndex = 0;
      refQ1.current.style.zIndex = 0;
      refQ2.current.style.zIndex = 0;
      refQ3.current.style.zIndex = 0;
      refQ4.current.style.zIndex = 0;
      refQ5.current.style.zIndex = 0;
      refQ6.current.style.zIndex = 0;
      refQ7.current.style.zIndex = 0;
      refQ8.current.style.zIndex = 1;
    }

    if (nextZIndex > 8) {
      setZIndex(0);
      refPerson.current.style.zIndex = 1;
      refQ1.current.style.zIndex = 0;
      refQ2.current.style.zIndex = 0;
      refQ3.current.style.zIndex = 0;
      refQ4.current.style.zIndex = 0;
      refQ5.current.style.zIndex = 0;
      refQ6.current.style.zIndex = 0;
      refQ7.current.style.zIndex = 0;
      refQ8.current.style.zIndex = 0;
    }
    if (nextZIndex < -8) {
      setZIndex(0);
      refPerson.current.style.zIndex = 1;
      refQ1.current.style.zIndex = 0;
      refQ2.current.style.zIndex = 0;
      refQ3.current.style.zIndex = 0;
      refQ4.current.style.zIndex = 0;
      refQ5.current.style.zIndex = 0;
      refQ6.current.style.zIndex = 0;
      refQ7.current.style.zIndex = 0;
      refQ8.current.style.zIndex = 0;
    }
  };

  const changeLocation = (e) => {
    const targetDiv = e.currentTarget;
    const refArray = [
      refPerson,
      refQ1,
      refQ2,
      refQ3,
      refQ4,
      refQ5,
      refQ6,
      refQ7,
      refQ8,
    ];
    for (let refItem of refArray) {
      if (
        window.getComputedStyle(refItem.current).transform ===
        "matrix(1, 0, 0, 1, 0, 0)"
      ) {
        let splitted = window
          .getComputedStyle(refItem.current)
          .backgroundColor.split(",");
        splitted[3] = "0.8)";

        refItem.current.style.backgroundColor = splitted.join(",");
        refItem.current.style.transform =
          window.getComputedStyle(targetDiv).transform;
        refItem.current.style.zIndex = 1;
        continue;
      }
      refItem.current.style.zIndex = 0;
    }

    let splitedArray = window
      .getComputedStyle(targetDiv)
      .backgroundColor.split(",");
    splitedArray[3] = "0.95)";

    targetDiv.style.position = "relative";
    targetDiv.style.zIndex = 100;
    targetDiv.style.backgroundColor = splitedArray.join(",");
    targetDiv.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
  };

  return (
    <section className={styles.container}>
      <div className={styles.div1}>
        <div className={styles.arrow_left} onClick={changeIndexLeft}>
          <Image src={back} fill alt="back" />
        </div>
        <div className={styles.card_container}>
          <motion.div
            className={styles.q8}
            id="8"
            ref={refQ8}
            onClick={changeLocation}
            // initial={{ visibility: "hidden" }}
            // whileInView={{ visibility: "visible" }}
            // transition={{ duration: { duration }, type: "tween", delay: 0 }}
            viewport={{ once: true }}
          >
            <p className={styles.question}>{props.q8}</p>
            <p className={styles.answer}>{props.a8}</p>
          </motion.div>
          <motion.div
            className={styles.q7}
            id="7"
            ref={refQ7}
            onClick={changeLocation}
            // initial={{ visibility: "hidden" }}
            // whileInView={{ visibility: "visible" }}
            // transition={{ duration: { duration }, type: "tween", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className={styles.question}>{props.q7}</p>
            <p className={styles.answer}>{props.a7}</p>
          </motion.div>
          <motion.div
            className={styles.q6}
            id="6"
            ref={refQ6}
            onClick={changeLocation}
            // initial={{ visibility: "hidden" }}
            // whileInView={{ visibility: "visible" }}
            // transition={{ duration: { duration }, type: "tween", delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className={styles.question}>{props.q6}</p>
            <p className={styles.answer}>{props.a6}</p>
          </motion.div>
          <motion.div
            className={styles.q5}
            id="5"
            ref={refQ5}
            onClick={changeLocation}
            // initial={{ visibility: "hidden" }}
            // whileInView={{ visibility: "visible" }}
            // transition={{ duration: { duration }, type: "tween", delay: 0.9 }}
            viewport={{ once: true }}
          >
            <p className={styles.question}>{props.q5}</p>
            <p className={styles.answer}>{props.a5}</p>
          </motion.div>
          <motion.div
            className={styles.q4}
            id="4"
            ref={refQ4}
            onClick={changeLocation}
            // initial={{ visibility: "hidden" }}
            // whileInView={{ visibility: "visible" }}
            // transition={{ duration: { duration }, type: "tween", delay: 1.2 }}
            viewport={{ once: true }}
          >
            <p className={styles.question}>{props.q4}</p>
            <p className={styles.answer}>{props.a4}</p>
          </motion.div>
          <motion.div
            className={styles.q3}
            id="3"
            ref={refQ3}
            onClick={changeLocation}
            // initial={{ visibility: "hidden" }}
            // whileInView={{ visibility: "visible" }}
            // transition={{ duration: { duration }, type: "tween", delay: 1.5 }}
            viewport={{ once: true }}
          >
            <p className={styles.question}>{props.q3}</p>
            <p className={styles.answer}>{props.a3}</p>
          </motion.div>
          <motion.div
            className={styles.q2}
            id="2"
            ref={refQ2}
            onClick={changeLocation}
            // initial={{ visibility: "hidden" }}
            // whileInView={{ visibility: "visible" }}
            // transition={{ duration: { duration }, type: "tween", delay: 1.8 }}
            viewport={{ once: true }}
          >
            <p className={styles.question}>{props.q2}</p>
            <p className={styles.answer}>{props.a2}</p>
          </motion.div>
          <motion.div
            className={styles.q1}
            id="1"
            ref={refQ1}
            onClick={changeLocation}
            // initial={{ visibility: "hidden" }}
            // whileInView={{ visibility: "visible" }}
            // transition={{ duration: { duration }, type: "tween", delay: 2.1 }}
            viewport={{ once: true }}
          >
            <p className={styles.question}>{props.q1}</p>
            <p className={styles.answer}>{props.a1}</p>
          </motion.div>
          <motion.div
            className={styles.person}
            id="0"
            ref={refPerson}
            onClick={changeLocation}
            // initial={{ visibility: "hidden" }}
            // whileInView={{ visibility: "visible" }}
            // transition={{ duration: { duration }, type: "tween", delay: 2.4 }}
            viewport={{ once: true }}
          >
            <h1 className={styles.name}>{props.name}</h1>
            <h2 className={styles.title}>{props.title}</h2>
          </motion.div>
        </div>
        <div className={styles.arrow_right} onClick={changeIndexRight}>
          <Image src={forward} fill alt="forward" />
        </div>
      </div>
      <div className={styles.div2}>
        <div className={styles.image_container}>
          <Image src={props.src} fill className={styles.img} alt="vadība" />
        </div>
      </div>
    </section>
  );
};

export default InfoReverse;
