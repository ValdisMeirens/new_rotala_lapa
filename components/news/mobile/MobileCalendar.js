import React from "react";
import classes from "./MobileCalendar.module.css";
import Image from "next/image";
import timesvg from "../../../public/svg/timesvg.svg";
import placesvg from "../../../public/svg/placesvg.svg";

function MobileCalendar(props) {
  return (
    <div className={classes.container}>
      <div className={classes.hovercontainer}>
        <div className={classes.firstpartcontainer}>
          <div className={classes.imagecontainer}>
            <Image
              src={props.picture}
              className={classes.image}
              alt={props.alttext}
              width={1000}
              height={1000}
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
                  as="image"
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
                  as="image"
                />
              </div>
              <div className={classes.time}>{props.place}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileCalendar;
