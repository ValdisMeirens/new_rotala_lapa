import styles from "./info.module.css";
import Image from "next/image";
import { useState } from "react";

const Info = (props) => {
  const [zIndex, setZIndex] = useState(0);

  const changeIndex = () => {
    setZIndex(zIndex + 1);
  };

  return (
    <section className={styles.container}>
      <div className={styles.div1}>
        <div className={styles.card_container}>
          <div className={styles.q8} onClick={changeIndex}>
            <p className={styles.question}>{props.q8}</p>
            <p className={styles.answer}>{props.a8}</p>
          </div>
          <div className={styles.q7}>
            <p className={styles.question}>{props.q7}</p>
            <p className={styles.answer}>{props.a7}</p>
          </div>
          <div className={styles.q6}>
            <p className={styles.question}>{props.q6}</p>
            <p className={styles.answer}>{props.a6}</p>
          </div>
          <div className={styles.q5}>
            <p className={styles.question}>{props.q5}</p>
            <p className={styles.answer}>{props.a5}</p>
          </div>
          <div className={styles.q4}>
            <p className={styles.question}>{props.q4}</p>
            <p className={styles.answer}>{props.a4}</p>
          </div>
          <div className={styles.q3}>
            <p className={styles.question}>{props.q3}</p>
            <p className={styles.answer}>{props.a3}</p>
          </div>
          <div className={styles.q2}>
            <p className={styles.question}>{props.q2}</p>
            <p className={styles.answer}>{props.a2}</p>
          </div>
          <div className={styles.q1}>
            <p className={styles.question}>{props.q1}</p>
            <p className={styles.answer}>{props.a1}</p>
          </div>
          <div className={styles.person}>
            <h1 className={styles.name}>{props.name}</h1>
            <h2 className={styles.title}>{props.title}</h2>
          </div>
        </div>
      </div>
      <div className={styles.div2}>
        <div className={styles.image_container}>
          <Image src={props.src} fill className={styles.img} />
        </div>
      </div>
    </section>
  );
};

export default Info;
