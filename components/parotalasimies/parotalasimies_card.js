import styles from "./parotalasimies_card.module.css";
import Image from "next/image";
import valdis from "@/public/aboutus/1.png";

const ParotalasimiesCard = ({ question, answer }) => {
  return (
    <section className={styles.container}>
      <div className={styles.cardcontainer}>
        <div className={styles.question}>{question}</div>
        <div className={styles.answer}>{answer}</div>
      </div>
    </section>
  );
};

export default ParotalasimiesCard;
