import diana from "@/public/vadiba/diana.webp";
import anta from "@/public/vadiba/anta.webp";
import donats from "@/public/vadiba/donats.webp";
import valentina from "@/public/vadiba/valentina.webp";
import vetra from "@/public/vadiba/vetra.webp";

import Info from "./info";
import InfoReverse from "./info_reverse";

const teachers = {
  diana: [
    "Esmu diplomēta horeogrāfe un deju skolotāja. Ikdienas darbos sastopos ar teju 200 dažādu vecumu dejotājiem. Cilvēkos novērtēju aizrautību – kad redzu viņu acis mirdzam par kaut ko svarīgu un īpašu. Man tā notiek ar deju un kustību, un ar šo degsmi gribu aplipināt visus apkārtējos.",
    "Ķermeņa valoda man šķiet vispatiesākais izpausmes veids – tas neprot izlikties –, tāpēc mācīt cilvēkiem kustēties un dejot ir mana misija. Vēlos, lai dejā ieraugām cits citu – kā meita rūpējas par puisi, kā puisis viņu sargā.",
    "Esmu aizrautīga deju radītāja – lai gan tas vēl, iespējams, neatspoguļojas darbu skaitā, katru deju radu ar lielu rūpību, katrai ir savs stāsts un nozīme. Iedvesmu rodu dzīves situācijās, tradīcijās, tautasdziesmās, pasakās. Uzskatu, ka dejai ir jāvēsta – kamēr neesmu atradusi vēstījumu, nevaru radīto nodot skatītājiem.",
    "Rotaļa ir mans lielais lolojums, mana radošuma meka. Mani dejotāji ir tikpat dzīves mīloši kā es, un tā mēs viens otru spoguļojam.",
    "Mani deju skolotāji: Sandra Liepiņa, Edmunds Veizāns, Artūrs Tabors, Gints Baumanis, Agris Daņiļevičs, Svetlana Korole, Regīna Kaupuža, Dmitrijs Gaitjukevičs un vēl, un vēl…",
  ],
  anta: [
    "Esmu profesionāla horeogrāfe un dejas pasniedzēja ar bakalaura grādu horeogrāfijā un vairāku gadu pieredzi tautas dejā un klasiskās dejas pamatos. Esmu strādājusi kā interešu izglītības skolotāja, baleta pedagoģe un repetitore dažādos deju kolektīvos, veidojot horeogrāfijas un repertuāru, kā arī sagatavojot audzēkņus koncertiem un pasākumiem.",
    "Esmu veidojusi horeogrāfijas koncertiem, skatuves projektiem un video darbiem, kā arī strādājusi radošās komandās kopā ar mūziķiem un izpildītājiem.",
    "Savā pedagoģiskajā darbā uzsveru disciplīnu, kustību kvalitāti, muzikālo izjūtu un individuālu pieeju katram dejotājam, radot profesionālu un atbalstošu mācību vidi. Rotaļai pievienojos 2023. gadā.",
  ],
  donats: [
    "Kopš 2009. gada esmu profesionāls baleta mākslinieks Latvijas Nacionālās Operas un Baleta trupā.",
    "Esmu ieguvis bakalaura grādu horeogrāfijā Jāzepa Vītola Latvijas Mūzikas akadēmijā.",
    "Paralēli klasiskajai dejai kopš 2013. gada darbojos kontaktimprovizācijā (contact improvization). Esmu piedalījies vairākos semināros un vadījis daudzas klases Contact Improvisation Latvia organizācijas projektu ietvaros un ne tikai.",
    "Esmu Rotaļas repetitors kopš 2021. gada. Īpaši piestrādāju pie Rotaļnieku klasiskās dejas tehnikas, lai kustības ir plašas un izteiksmīgas un ķermenis – vingrs un koordinēts.",
  ],
  valentina: [
    "Bērnībā sapņoju arī par baletu, bet dzīves ceļi aizveda klaviermūzikas virzienā. Pirms sāku spēlēt dejotājiem, strādāju mūzikas skolā par klavierspēles pedagoģi. Biju koncertmeistare vairākiem koru kolektīviem.",
    "Mana pirmā satikšanās ar Rotaļu bija 1986. gadā, kad sāku strādāt Zelta Sietiņā. Sadarbība ar Rotaļu sākās 2005. gadā pēc Ginta Baumaņa uzaicinājuma. Spēlējot Rotaļniekiem, jūtos tā, it kā dejotu kopā ar viņiem – dejotāju neizsmeļamā enerģija un degsme piepilda ar prieku un ik reizi no jauna apliecina, ka mana īstā vieta ir tieši šeit.",
  ],
  vetra: [
    "Man ļoti patīk skatīties, kā Rotaļa dejo, bet jāatzīst – tik skaistu teciņa soli kā man pašai vēl neesmu ieraudzījusi.",
  ],
};

const ManagmentContainer = () => {
  return (
    <>
      <Info
        src={diana}
        name="Diāna Gavare"
        title="TDA Rotaļa mākslinieciskā vadītāja"
        bio={teachers.diana}
      />
      <InfoReverse
        src={anta}
        name="Anta Grīnvalde"
        title="Mākslinieciskās vadītājas asistente"
        bio={teachers.anta}
      />
      <Info
        src={donats}
        name="Donāts Rudzītis"
        title="TDA Rotaļa repetitors"
        bio={teachers.donats}
      />
      <InfoReverse
        src={valentina}
        name="Valentīna Popova"
        title="TDA Rotaļa koncertmeistare"
        bio={teachers.valentina}
      />
      <Info
        src={vetra}
        name="Vētra"
        title="TDA Rotaļa repetitore"
        bio={teachers.vetra}
      />
    </>
  );
};

export default ManagmentContainer;
