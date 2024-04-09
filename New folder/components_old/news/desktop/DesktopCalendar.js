import React from "react";
import classes from "./DesktopCalendar.module.css";
import Image from "next/image";
import timesvg from "../../../public/svg/timesvg.svg";
import placesvg from "../../../public/svg/placesvg.svg";
import { motion } from "framer-motion";
import { useState } from "react";

const calendarvariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, type: "tween", delay: 0.2 },
  },
};

function DesktopCalendar(props) {
  const [showCalendarOverlay, setShowCalendarOverlay] = useState(false);

  const showCalendarOverlayHandler = () => {
    setShowCalendarOverlay(true);
  };

  return (
    <>
      <motion.div
        variants={calendarvariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={classes.container}
        onClick={showCalendarOverlayHandler}
      >
        <div className={classes.hovercontainer}>
          <div className={classes.firstpartcontainer}>
            <div className={classes.imagecontainer}>
              <Image
                src={props.picture}
                className={classes.image}
                alt={props.alttext}
                width={1000}
                height={1000}
                sizes="(max-width: 1000px) 50vw,  25vw"
              />
            </div>
            <div className={classes.datecontainer}>
              <div className={classes.month}>{props.month}</div>
              <div className={classes.dates}>{props.date}</div>
            </div>
          </div>
          <div className={classes.secondpartcontainer}>
            <div className={classes.event}>{props.event}</div>
            <div className={classes.eventname}>{props.eventname}</div>
            <div className={classes.placecontainer}>
              <div className={classes.timecontainer}>
                <div className={classes.svgcontainer}>
                  <Image
                    src={timesvg}
                    alt="Time SVG"
                    className={classes.timesvg}
                  />
                </div>
                <div className={classes.time}>{props.time}</div>
              </div>
              <div className={classes.placeinfocontainer}>
                <div className={classes.svgcontainer}>
                  <Image
                    src={placesvg}
                    alt="Place SVG"
                    className={classes.timesvg}
                  />
                </div>
                <div className={classes.time}>{props.place}</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default DesktopCalendar;
