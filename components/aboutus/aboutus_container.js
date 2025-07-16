import styles from "./aboutus_container.module.css";
import Image from "next/image";
import valdis from "@/public/aboutus/1.png";

const AboutUsContainer = () => {
  return (
    <section className={styles.container}>
      <div className={styles.textcontainer}>VEF Kultūras pils TDA “Rotaļa” savā radošajā darbībā ne tikai uztur Dziesmu un Deju svētku nepārtrauktību, bet ir arī nerimstošā kustībā un jaunrades meklējumos. Kopš “Rotaļas” dibināšanas 1946. gadā kolektīvs vienmēr ir bijis ar izteiktu raksturu un horeogrāfisko rokrakstu. Jau piekto sezonu “Rotaļa” darbojas mākslinieciskās vadītājas Diānas Gavares virsvadībā, kopā rakstot jaunas vēstures lappuses latviešu skatuviskajā tautas dejā.</div>
      <div className={styles.imagecontainer}>
        <div><Image
          src={valdis}
          fill
          alt="valdis"
          className={styles.img}
          sizes="50vw"
        /></div>
         </div>
        <div className={styles.textcontainer}>Rotaļa, a Latvian folk dance group, was founded in 1946. Since its creation, it has called VEF Culture Palace in Riga its home, where rehearsals continue to this day. Known for its distinctive dance style and choreographic signature, Rotaļa has played a key role in shaping the Latvian folk dance scene, thanks to the vision and talent of its artistic directors.Currently led by Diāna Gavare, Rotaļa is one of the largest Latvian folk dance groups, bringing together nearly a hundred dancers. With youthful energy and passion, the group is always seeking new opportunities and embracing all kinds of creative ideas</div>
    </section>
  );
};

export default AboutUsContainer;
