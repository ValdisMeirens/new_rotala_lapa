import Image from "next/image";
import styles from "./managment_container.module.css";
import diana from "@/public/vadiba/diana.jpg";
import anta from "@/public/vadiba/anta.jpg";
import donats from "@/public/vadiba/donats.jpg";
import valentina from "@/public/vadiba/valentina.jpg";
import Info from "./info";

const ManagmentContainer = () => {
  return (
    <>
      <Info
        src={diana}
        q1="Vai atceries savu pirmo satikšanos ar Rotaļu?"
        q2="Ja tu būtu kāda no Rotaļas repertuāra dejām, tad kura? Kāpēc? "
        q3="Kāds ir tavs mīļākais tautas tērps Rotaļas noliktavā? Kāpēc tieši šis?"
        q4="Kā tu atceries visu Rotaļas dejotāju vārdus? "
        q5="Kāda ir tava spilgtākā atmiņa, kas radīta kopā ar Rotaļu?"
        q6="Ko Rotaļa ir tev iemācījusi?"
        q7="Kas/kāds ir īsts Rotaļnieks?"
        q8="Cik augstu jākāpj, lai tiktu uz Rotaļas mēģinājumu zāli VEF Kultūras pilī?"
        a1="Šķiet, ka pati pirmā reize, kad domāju, kas ir šis fenomens, bija filmas 'Vella kalpi'un 'Vella kalpi vellna dzirdnavā' epizodes ar čigānietes lomas atveidotāju Aiju Baumani. Skatījos/skatos tūkstošiem reižu. Mīļākās filmas. 
        Otrā reize un īsta satikšanās ar Rotaļu ir saistīta ar sk.Ginta Baumaņa darbu Dobelē.        "
        a2="Es būtu jebkura no Rotaļas dejām. Katrā ir kaut kas svarīgs, vērtīgs, dzīvs."
        a3="Šajā brīdī lībiešu tautas tērps. Esam to atjaunojuši un papildinājuši ar skaistiem aksesuāriem. Tas dejotājām dod īpašu mirdzumu, stāju un ir atšķirīgs. Vienlīdz blakus liktu arī Nīcas tautas tērpu. Ar to esam procesā uz atjaunošanu. "
        a4="Neskaitāmas reizes bīdot Excel tabuliņu sastāvus."
        a5="2023. gada Deju svētku lielkoncertā “Balts” Rotaļnieki lepni iedejo arēnā kā pirmie uz deju Es tev došu skaistu sētu."
        a6="Viens tu vari daudz, bet komandā - visu!"
        a7="Patiess no papēžiem līdz matu galiem."
        a8="4 gadus kā minimums, 10 ir tikai sākums..."
        name="Diāna Gavare"
        title="TDA Rotaļa mākslinieciskā vadītāja"
      />
    </>
  );
};

export default ManagmentContainer;
