import styles from "./parotalasimies_container.module.css";
import ParotalasimiesCard from "./parotalasimies_card";
import QAAccordion from "./qaaccordion";

const ParotalasimiesContainer = () => {
  const faqItems = [
    {
      question: "Kad un kur varu pievienoties Rotaļai?",
      answer:
        "2025. gada 8. un 10. septembrī plkst. 19.30 VEF Kultūras pils (Ropažu iela 2) 3. stāva mēģinājumu zālē. Ierašanās pa dienesta ieeju (no Jaunās Teikas puses). Seko norādēm!",
    },
    {
      question: "Kā notiek jauno dejotāju uzņemšana?",
      answer:
        "1) Izvēlies savu laimīgo uzņemšanas datumu un uzraksti ziņu Diānai (gavarediana@gmail.com).\n" +
        "2) Kārtojot somu, neaizmirsti dejošanai atbilstošu apģērbu (krekliņš/bodijs, bruncīši/šorti), kā arī piemērotus apavus. Meitenēm noderēs kāda copadata, lai mati būtu glīti sakārtoti.\n" +
        "3) Ierodies laicīgi, lai jau 19.30 varam sākt dejot! Ar tevi darbosies visa mūsu pedagogu komanda - Donāts, Anta un Diāna.",
    },
    {
      question: "Vai ir nepieciešama iepriekšēja dejošanas pieredze?",
      answer:
        "Jā, mēs ļoti novērtēsim tavu pieredzi skatuviskajā tautas dejā. ",
    },
    {
      question: "No cik gadiem var dejot Rotaļā?",
      answer:
        "Dejot var sākt no 16 gadiem, bet jārēķinās, ka mēģinājumi beidzas vēlu, kā arī koncertizbraucieni un citas aktivitātes var ieilgt pēc pusnakts.",
    },
    {
      question: "Cik reizes nedēļā dejojat?",
      answer:
        "Mēģinājumi notiek 2 reizes nedēļā - pirmdienās un trešdienās 19.30 - 22.30.\n" +
        "Ja nepieciešams, darbojamies arī piektdienās 19.30 - 22.00.\n" +
        "Vienu reizi sezonā mums ir deju nometne.",
    },
    {
      question: "Vai Rotaļā dejo visi?",
      answer:
        "Jā, Rotaļā dejās tiksi, ja vien būsi cītīgs, mērķtiecīgs, atvērts un vienkārši foršs!",
    },
    {
      question: "Kas vēl man būtu jāzina?",
      answer:
        "Mums ļoti patīk būt kopā! Koncertējam diezgan daudz - dodamies pie draugu kolektīviem un rīkojam projektus paši, dodamies uz festivāliem ārpus mūsu mīļās Latvijas. Aktīvi piedalāmies dažādos sporta pasākumos un rīkojam savu futbola turnīru.\n" +
        "Mums ir daudzas un dažādas tradīcijas, ko kopjam un pilnveidojam, veidojot savu spēcīgu Rotaļu. Mēs mīlam prieku un aizrautību! Diāna saka tā:  “Viens var daudz, bet kopā mēs varam visu!” Rotaļa atbild: “Jo visu, ko mēs darām, mēs darām savam baram!”",
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.test}>
        <QAAccordion items={faqItems} />
      </div>
    </section>
  );
};

export default ParotalasimiesContainer;
