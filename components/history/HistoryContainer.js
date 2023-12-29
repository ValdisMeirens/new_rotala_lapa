import InfoDesktop from "../header/common/InfoDesktop";
import classes from "./HistoryContainer.module.css";
import history from "../../public/vesture/vecakopbilde.jpg";
import historytext from "../../public/header/par-mums.png";

const HistoryContainer = (props) => {
  return (
    <div className={classes.container}>
      <InfoDesktop
        backgroundImage={history}
        backgroundImageText="Vēsture"
        image={historytext}
        imageText="Vēsture"
        text="VĒSTURE"
      />
      <div className={classes.historycontainer}>
        <div className={classes.title}>Kā sākās Rotaļa?</div>
        <p className={classes.text}>
          Tautas deju ansamblis <span className={classes.rotala}>"Rotaļa"</span>{" "}
          ir dibināts <span className={classes.years}>1946.</span> gadā. Jau no
          pašiem pirmsākumiem <span className={classes.rotala}>"Rotaļa"</span>{" "}
          ir bijusi Valsts elektrotehniskās fabrikas (VEF) kultūras nama deju
          kolektīvs, bet <span className={classes.years}>1963.</span>gadā
          kolektīvam piešķirts tautas deju ansambļa goda nosaukums. <br /> Savu
          vārdu <span className={classes.rotala}>"Rotaļa"</span> ieguva pēc tāda
          paša nosaukuma dejas, kuras horeogrāfe bija pirmā{" "}
          <span className={classes.rotala}>"Rotaļas"</span> mākslinieciskā
          vadītāja <span className={classes.authors}>Ludmila Krūmiņa.</span>
        </p>
        <div className={classes.title}>Rotaļa cauri laikiem.</div>
        <p className={classes.text}>
          <span className={classes.years}>1983.</span> gada Deju svētku skatē,{" "}
          <span className={classes.rotala}>"Rotaļa"</span> ierindojas 1. vietā
          ar <span className={classes.authors}>Aijas Baumanes</span> deju
          "Plācenītis", <span className={classes.authors}>Modra Gipmaņa</span>{" "}
          "Trīs sidraba upes tek" un "Lietuviešu deju". Ansamblim tiek piešķirts
          Nopelniem Bagātā Tautas Deju Ansambļa tituls. <br />
          Arī nākamajā Deju svētku skatē{" "}
          <span className={classes.years}>1985.</span> gadā{" "}
          <span className={classes.rotala}>"Rotaļa"</span> tiek atzīta par
          labāko deju kolektīvu, visus pārsteidzot ar{" "}
          <span className={classes.authors}>Aijas Baumanes</span> "Tūdaliņu",
          <span className={classes.authors}>Ulda Žagatas</span> "Dejotprieku" un
          "Turku deju". Kolektīvam piešķīra LPSR nopelniem bagātā kolektīva goda
          nosaukums. <br />
          <span className={classes.years}>1998.</span> gadā Latvijas Nacionālajā
          operā norisinās Latvijas Tautas Deju Ansambļu skate, kuru vērtē
          starptautiska žūrija. Ar{" "}
          <span className={classes.authors}>Aijas Baumanes</span> deju "Kur tu
          augi daļa meita" un{" "}
          <span className={classes.authors}>Ritas Spalvas</span> "Putnu
          sasaukšanās pavasarī"{" "}
          <span className={classes.rotala}>TDA "Rotaļa"</span> izpelnās arī
          starptautiskās žūrijas augstāko atzinību, un Latvijas labākā tautas
          deju ansambļa titulu. To no savām rokām neizlaižot arī 4 nākošajās
          Deju svētku laureātu skatēs -{" "}
          <span className={classes.years}>2003.</span> Gada skatē{" "}
          <span className={classes.rotala}>Rotaļa</span> piedalās ar dejām
          "Alsunģietis" un "Virmo gaiss"
          <br />
          <span className={classes.years}>2008.</span> gadā, kad{" "}
          <span className={classes.rotala}>Rotaļa</span> sevi pārstāv ar "Kur tu
          augu daiļa meita", un <span className={classes.authors}>Ginta</span>{" "}
          jaunradi "Paēduši, padzēruši", kā arī "Tu kā es kā", kas tapis uz
          akapella grupas "Cosmos" populārās dziesmas pamata un skatē izpelnījās
          nedzirdētas ovācijas. <span className={classes.years}>2008.</span>{" "}
          gads oktobrī <span className={classes.rotala}>TDA Rotaļa</span> kopā
          ar visas Latvijas dejotājiem piedalās Latvijas Valsts 90 dzimšanas
          dienas sveiciena un vienlaikus Ginesa rekorda uzstādīšanā kategorijā
          Garākā deja, kas norit Vecrīgā. <br />
          <span className={classes.years}>2009.</span> gada janvārī{" "}
          <span className={classes.rotala}>TDA "Rotaļa"</span> startē Jaunrades
          deju skatē Valmierā, piedāvājot veselas 8 dejas – gan{" "}
          <span className={classes.authors}>Aijas Baumanes</span>,{" "}
          <span className={classes.authors}>Modra Gipmaņa</span>
          un <span className={classes.authors}>Ojāra Graša</span> dejas, kas
          iepriekš turētas kā "svece zem pūra", gan jaunākās{" "}
          <span className={classes.authors}>Ginta Baumaņa</span> dejas. Turpmāk
          ik gadu janvārī <span className={classes.rotala}>Rotaļa</span>{" "}
          piedalās šajā konkursā piedāvājot Latvijas kolektīviem jaunas dejas
          gan jauniešiem, gan vidējās paaudzes kolektīviem, un lepojas gan ar
          žūrijas apbalvojumiem, gan citu horeogrāfu komplimentiem par savu
          unikālo dejas stilu un manieri. <br />
          <span className={classes.years}>2010.</span> gada novembrī Ķīpsalā{" "}
          <span className={classes.rotala}>Rotaļa</span>, kopā ar citiem 800
          dejotājiem, piedalās mītiskajā dejas uzvedumā NO ZOBENA SAULE LĒCA(
          horeogrāfs <span className={classes.authors}>Agris Daņiļevičs</span>,
          režisors <span className={classes.authors}>Uģis Brikmanis</span>,
          producents <span className={classes.authors}>Edžus Arums</span>).
          Dejas izrāde ir mītisks stāsts par seno baltu dzīvi, kuru dalībnieki
          atspoguļo dejā, mūzikā, rituālos un scenogrāfijas simbolos. Stāsts
          radīts kā kultūras vērtība, kas atspoguļo mūsu senču viedo dzīvesziņu.
          Izrādes sižetiskā līnija ļauj iepazīt seno baltu dzīves gājumu,
          ikdienu, būtiskākos ritus, piemēram, dzimšanu, kristības, kāzas.
          Izrāde ir par cilvēka likteni – spēju to pieņemt. Izrāde ir kā himna
          ikvienam latvietim un baltu kultūras pārstāvim. Šī izrāde gūst
          lielisku panākumus, un tiek no jauna uzvesta{" "}
          <span className={classes.years}>2013.</span> un{" "}
          <span className={classes.years}>2016.</span> Gadā, pulcējot arvien
          vairāk dalībniekus izdzīvot šo stāstu, kā arī{" "}
          <span className={classes.years}>2018.</span> gadā par godu Latvijas
          simtgadei, plānots šo izrādi veidot nebijušā veidā – brīvā dabā.{" "}
          <br />
          Sadarbībā ar Maestro{" "}
          <span className={classes.authors}>Raimondu Paulu</span>, Rotaļnieki
          kopā ar mūziķiem un aktieriem piedalās Rīgas pilsētas Līgo svinībās
          krastmalā <span className={classes.years}>2012.</span> un{" "}
          <span className={classes.years}>2015.</span> gadā, kā ari sagaida
          Jauno <span className={classes.years}>2015.</span> gadu LTV programmā
          priecējot gan klāt esošos, gan arī skatītājus pie televizoriem. <br />
          Pieredzes un emociju pārbagāts{" "}
          <span className={classes.rotala}>"Rotaļai"</span> ir{" "}
          <span className={classes.years}>2016.</span> gads. Jau iepriekšējā
          gada nogalē plānotā izvākšanas no mīļajām mājām – VEF Kultūras pils,
          ar tam veltītu koncertu "Nekur nav tik Labi, kā mājās", kā arī{" "}
          <span className={classes.rotala}>Rotaļas</span> kalendāru, kurā
          iemūžināti visi VEFiņa stūri, tiek atlikta. Tā kā{" "}
          <span className={classes.rotala}>Rotaļas</span> rindās aug jaunā
          horeogrāfe <span className={classes.authors}>Diāna Gavare</span>, tiek
          gatavots viņas diplomdarbs "Māras meitas", kas daļai no kolektīva ir
          nebijusi pieredze un emocijas, atkal izdejojot stāstu caur deju. Vēli
          vakari tiek pavadīti šķirojot, krāmējot kastēs un uzskaitot tērpu
          noliktavas dārgumus, līdz pavasarī VEF Kultūras pils tiek slēgta
          rekonstrukcijai un Rotaļnieki pārvācās uz telpām pāris kvartālus
          tālāk. Tai pašā laikā ir pienākusi kolektīva 70.jubileja, kas ar
          krāšņu koncertu "Pa Saules" pirmo reizi tiek atzīmēta ārpus mājām –
          Dailes teātrī. Koncerta mākslinieciskais vadītājs un idejas autors{" "}
          <span className={classes.authors}>Gints Baumanis</span> programmā
          iekļauj gan visiem mīļas un zināmas dejas, gan jaunas horeogrāfijas,
          kas ļauj skatītājiem izsekot gada gājumam caur 4 sezonām. "Pa saules
          ceļu" ir atgādinājums, cik daudz mēs varam kopā, apvienojoties visām
          paaudzēm un liekot kopā savus talantus, jo gan koncerta scenārijs, gan
          vadītāji, gan ikviena horeogrāfija nāk no{" "}
          <span className={classes.rotala}>Rotaļas</span> talantīgajiem
          dalībniekiem.
        </p>
        <div className={classes.title}>Rotaļas tradīcijas.</div>
        <p className={classes.text}>
          Par neatņemamu sezonas daļu kļuvuši koncerti gada aukstākajā laikā –
          janvārī un februāri, kad{" "}
          <span className={classes.rotala}>Rotaļa</span> apciemo savus draugus
          ārpus Rīgas –Siguldā viesojamies "Baltās ziemas virpulī", Jelgāvā ik
          gadu "Mīlam dejā" kā ari ciemojamies Limbažos, Salacgrīvā un citur.
          Bet vasaru noslēdzam un deju sezonu sākam Carnikavas "Nēģu svētkos"
          <br />
          Lai parādītu savu sacensību garu, katru sezonu sākam ar orientēšanās
          sacensībām tautas deju kolektīviem "Greizais Kompass" un noslēdzam ar
          pludmales volejbola kausu "Smilšu bumba", pa vidu neizlaižot ne "Egona
          Kausu" basketbolā, ne Tautas bumbas turnīru "Cīņa pie Gatves", ne
          Danča florbola kausu. <span className={classes.years}>
            2007.
          </span>{" "}
          gadā tā brīža <span className={classes.rotala}>Rotaļas</span>{" "}
          prezidents Renārs Danelsons, realizē sen lolotu sapni, tiek organizēts
          pirmais <span className={classes.rotala}>Rotaļas</span> kauss futbolā.
          Tradīcija plešas plašumā, un katru gadu laukumā parādās arvien jauni
          un jauni cīnīties griboši deju ansambļi. <br />
          Rotaļnieki katras sezonas sākumā iepazīstas ar jaunajiem deju biedriem
          "Iepazīšanās pirtī", kurā visi vienojamies krāsas tematikā, gatavojam
          priekšnesumus un atrakcijas, lai labāk iepazītu viens otru, savukārt
          pāris mēnešus vēlāk tiek rīkota "Iesvētību balle", kurā Rotaļnieka
          kārtā tiek uzņemti dejotāju, kam šī ir 4tā nodejotā sezonā. Ar šo
          notikumu esam iejutušies gan supervaroņu, cirkus mākslinieku,
          sportistu, spiegu un vampīru ādās, gan ceļojuši uz PSRS laikiem,
          gangsteru rajoniem un Francijas Cabaret.
        </p>
      </div>
    </div>
  );
};

export default HistoryContainer;
