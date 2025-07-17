import { useState, useRef, useEffect } from "react";
import styles from "./qaacordion.module.css";

export default function QAAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);
  const refs = useRef([]);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    refs.current.forEach((el, i) => {
      if (!el) return;
      if (openIndex === i) {
        el.style.maxHeight = el.scrollHeight + "px";
      } else {
        el.style.maxHeight = "0px";
      }
    });
  }, [openIndex]);

  return (
    <div className={styles.qa_container}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className={styles.qa_item}>
            <button
              className={styles.qa_question}
              onClick={() => toggle(index)}
            >
              <span>{item.question}</span>
              <span className={styles.qa_icon}>
                {isOpen ? (
                  <svg width="20" height="20" viewBox="0 0 24 24">
                    <line
                      x1="5"
                      y1="12"
                      x2="19"
                      y2="12"
                      stroke="#2e7d32"
                      strokeWidth="2"
                    />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24">
                    <line
                      x1="12"
                      y1="5"
                      x2="12"
                      y2="19"
                      stroke="#2e7d32"
                      strokeWidth="2"
                    />
                    <line
                      x1="5"
                      y1="12"
                      x2="19"
                      y2="12"
                      stroke="#2e7d32"
                      strokeWidth="2"
                    />
                  </svg>
                )}
              </span>
            </button>
            <div
              ref={(el) => (refs.current[index] = el)}
              className={styles.qa_answer}
            >
              <div className={styles.qa_inner}>{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
