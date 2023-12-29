import classes from "./MobileCalendarContainer.module.css";
import MobileCalendar from "./MobileCalendar";

const MobileCalendarContainer = ({ calendar }) => {
  const calendarArray = calendar.map((calendar) => {
    const day = calendar.k_datums.substring(8, 10);
    const month = calendar.k_datums.substring(5, 7);
    let monthText;
    switch (month) {
      case "01":
        monthText = "JAN";
        break;
      case "02":
        monthText = "FEB";
        break;
      case "03":
        monthText = "MAR";
        break;
      case "04":
        monthText = "APR";
        break;
      case "05":
        monthText = "MAI";
        break;
      case "06":
        monthText = "JŪN";
        break;
      case "07":
        monthText = "JŪL";
        break;
      case "08":
        monthText = "AUG";
        break;
      case "09":
        monthText = "SEP";
        break;
      case "10":
        monthText = "OKT";
        break;
      case "11":
        monthText = "NOV";
        break;
      case "12":
        monthText = "DEC";
        break;
      default:
    }

    return (
      <div key={calendar.k_id}>
        <MobileCalendar
          picture={calendar.afisa}
          alttext={calendar.k_pasakums}
          month={monthText}
          date={+day + 1}
          event={calendar.k_apraksts}
          eventname={calendar.k_pasakums}
          time={calendar.k_laiks}
          place={calendar.k_vieta}
        />
      </div>
    );
  });

  //console.log(calendarArray);

  return (
    <div className={classes.container}>
      <h2 className={classes.latestevents}>TUVĀKIE PASĀKUMI</h2>
      <div className={classes.calendaritems}>{calendarArray}</div>
    </div>
  );
};

export default MobileCalendarContainer;
