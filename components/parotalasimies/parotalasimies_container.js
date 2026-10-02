import styles from "./parotalasimies_container.module.css";
import ParotalasimiesCard from "./parotalasimies_card";
import QAAccordion from "./qaaccordion";

const ParotalasimiesContainer = () => {
  const faqItems = [
    {
      question: "Kad un kur varu pievienoties Rotaļai?",
      answer:
        "2026. gada 26. augustā, 2. septembrī un 7. septembrī plkst. 19.30 VEF Kultūras pils (Ropažu iela 2) 3. stāva mēģinājumu zālē. Ierašanās pa dienesta ieeju (no Jaunās Teikas puses). Seko norādēm!",
    },
    {
      question: "Kā notiek jauno dejotāju uzņemšana?",
      answer: (
        <>
          1) Aizpildi{" "}
          <a
            href="https://forms.gle/1y9H1hJjha1N3SrD6"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.formLink}
          >
            <bold></bold>anketu
          </a>{" "}
          un izvēlies savu laimīgo uzņemšanas datumu.
          <br />
          2) Kārtojot somu, neaizmirsti dejošanai atbilstošu apģērbu
          (krekliņš/bodijs, bruncīši/šorti), kā arī piemērotus apavus.
          <br />
          3) Ierodies laicīgi, lai jau 19.30 varam sākt dejot!
        </>
      ),
    },
    {
      question: "Vai ir nepieciešama iepriekšēja dejošanas pieredze?",
      answer:
        "Jā, mēs ļoti novērtēsim tavu pieredzi skatuviskajā tautas dejā. ",
    },
    {
      question: "No cik gadiem var dejot Rotaļā?",
      answer:
        "Ņemot vērā vēlās mēģinājumu beigas, kā arī koncertizbraucienus un citas aktivitātes, kas nereti ieilgst pat pēc pusnakts, Rotaļai vari pievienoties no 18 gadu vecuma.",
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
