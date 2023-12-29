import classes from "./DesktopFindUs.module.css";

const DesktopFindUs = () => {
  return (
    // <div className={classes.container}>
    //   <h2 className={classes.text}>KUR MŪS ATRAST?</h2>
    //   <div className={classes.mapcontainer}>
    //     <iframe
    //       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2174.5183887616286!2d24.164071015978312!3d56.97418188089763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eece573a7831f5%3A0xcf04842f77b3afcc!2sVEF%20Kult%C5%ABras%20pils!5e0!3m2!1slv!2slv!4v1680967361257!5m2!1slv!2slv"
    //       width="100%"
    //       height="400"
    //       style={{ border: 0 }}
    //       allowFullScreen=""
    //     />
    //   </div>
    // </div>

    <div className={classes.mapcontainer}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2174.5183887616286!2d24.164071015978312!3d56.97418188089763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eece573a7831f5%3A0xcf04842f77b3afcc!2sVEF%20Kult%C5%ABras%20pils!5e0!3m2!1slv!2slv!4v1680967361257!5m2!1slv!2slv"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
      />
    </div>
  );
};

export default DesktopFindUs;
