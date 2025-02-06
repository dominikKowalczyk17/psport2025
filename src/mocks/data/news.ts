// src/mocks/data/news.ts
import type { News, NewsState } from "@/types/News";
import { authors } from "./authors";
import { categories } from "./categories";

export const mockNews: News[] = [
  // PIŁKA NOŻNA
  {
    id: 1,
    title: "Messi zdobywa Złotą Piłkę po raz ósmy!",
    slug: "messi-zlota-pilka-2025",
    excerpt:
      "Argentyńczyk po raz kolejny triumfuje w plebiscycie France Football.",
    content: `Leo Messi ponownie zostaje uznany najlepszym piłkarzem świata! Argentyńska legenda odebrała Złotą Piłkę podczas gali w Paryżu, wyprzedzając Erlinga Haalanda i Kevina De Bruyne. 
      "To ogromny zaszczyt wciąż być częścią elity światowego futbolu w wieku 37 lat" - mówił wzruszony kapitan Inter Miami. 
      W sezonie 2024/25 Messi poprowadził swoją drużynę do mistrzostwa MLS, notując 34 gole i 25 asyst. Historyczny triumf został nagrodzony 
      specjalną edycją trofeum z wygrawerowanym napisem "GOAT 2025".`,
    publishDate: new Date("2025-02-06T18:00:00"),
    modifiedDate: new Date("2025-02-06T18:30:00"),
    author: authors[0],
    category: categories[1],
    url: "/pilka-nozna/messi-zlota-pilka-2025",
    imageUrl: "/placeholder.svg",
    thumbnailUrl: "/placeholder.svg",
    tags: ["Złota Piłka", "Messi", "France Football"],
    isHot: true,
    isFeatured: true,
  },
  {
    id: 2,
    title: "Manchester City wygrywa Ligę Mistrzów!",
    slug: "manchester-city-liga-mistrzow-2025",
    excerpt:
      "Drużyna Pepa Guardioli po raz kolejny triumfuje w Champions League.",
    content: `Manchester City pisze historię! Podopieczni Pepa Guardioli pokonali w londyńskim finale Bayern Monachium 3:1, 
      sięgając po trzeci z rzędu tytuł Ligi Mistrzów. Decydującego gola w 89. minucie strzelił norweski snajper Erling Haaland, 
      kończąc sezon z rekordowymi 17 golami w CL. "To nasza najlepsza drużyna w historii" - przyznał hiszpański trener, który zapowiedział 
      rezygnację z funkcji po zakończeniu kontraktu.`,
    publishDate: new Date("2025-02-06T22:00:00"),
    author: authors[1],
    category: categories[1],
    url: "/pilka-nozna/manchester-city-liga-mistrzow-2025",
    imageUrl: "/placeholder.svg",
    thumbnailUrl: "/placeholder.svg",
    tags: ["Liga Mistrzów", "Manchester City", "Guardiola"],
    isHot: true,
    isFeatured: true,
  },

  // SIATKÓWKA
  {
    id: 3,
    title: "Polska pokonuje Francję w Lidze Narodów!",
    slug: "polska-francja-liga-narodow-2025",
    excerpt:
      "Biało-czerwoni odnoszą ważne zwycięstwo w rozgrywkach międzynarodowych.",
    content: `Polscy siatkarze w stylu pokonali Francuzów 3:1 (25-23, 22-25, 25-19, 25-21) w kluczowym meczu Ligi Narodów. 
      Najskuteczniejszy w drużynie Nikola Grbića okazał się Wilfredo León, który zdobył 24 punkty. "To dopiero początek naszej drogi, 
      ale pokazaliśmy charakter" - komentował kapitan Bartosz Kurek. Decydujący był trzeci set, gdzie biało-czerwoni zablokowali 
      aż 7 ataków rywali.`,
    publishDate: new Date("2025-02-06T19:45:00"),
    author: authors[2],
    category: categories[2],
    url: "/siatkowka/polska-francja-liga-narodow-2025",
    imageUrl: "/placeholder.svg",
    thumbnailUrl: "/placeholder.svg",
    tags: ["Liga Narodów", "Polska", "Francja"],
    isHot: true,
    isFeatured: true,
  },

  // TENIS
  {
    id: 4,
    title: "Świątek wygrywa Wimbledon!",
    slug: "swiatek-wimbledon-2025",
    excerpt: "Iga Świątek pokonała Naomi Osakę w wielkim finale Wimbledonu!",
    content: `Iga Świątek dokonała niemożliwego! Polska tenisistka po 3-godzinnym finale pokonała Naomi Osakę 6-7(5), 7-5, 6-2, 
    zdobywając pierwszy w karierze tytuł na trawie. "Wimbledon był moim marzeniem od dziecka" - mówiła ze łzami w oczach 24-latka, 
    która jako pierwsza Polka w historii triumfowała w All England Club. W decydującym secie Świątek zaserwowała 15 asów, 
    ustanawiając nowy rekord turnieju.`,
    publishDate: new Date("2025-02-06T17:00:00"),
    author: authors[0],
    category: categories[3],
    url: "/tenis/swiatek-wimbledon-2025",
    imageUrl: "/placeholder.svg",
    thumbnailUrl: "/placeholder.svg",
    tags: ["Wimbledon", "Iga Świątek", "WTA"],
    isHot: true,
    isFeatured: true,
  },

  // KOSZYKÓWKA
  {
    id: 5,
    title: "Los Angeles Lakers zdobywają mistrzostwo NBA!",
    slug: "lakers-mistrzostwo-nba-2025",
    excerpt:
      "LeBron James poprowadził Lakers do kolejnego tytułu mistrzowskiego!",
    content: `LeBron James w wieku 40 lat poprowadził Lakers do mistrzostwa NBA! Kalifornijska drużyna pokonała Celtics 112-109 
      w emocjonującym 6. meczu finału. "Król" James został MVP serii, średnio notując 28.5 punktów. Historyczny rzut za 3 punkty 
      z ostatniej sekundy zapewnił Lakers pierwszy tytuł od 2020 roku. "To dla Kobe'ego" - krzyczał do kamery LeBron, wskazując 
      na specjalną opaskę z numerem 24.`,
    publishDate: new Date("2025-02-06T23:15:00"),
    author: authors[1],
    category: categories[4],
    url: "/koszykowka/lakers-mistrzostwo-nba-2025",
    imageUrl: "/placeholder.svg",
    thumbnailUrl: "/placeholder.svg",
    tags: ["NBA", "Lakers", "LeBron James"],
    isHot: true,
    isFeatured: true,
  },

  // FORMUŁA 1
  {
    id: 6,
    title: "Verstappen wygrywa Grand Prix Monako!",
    slug: "verstappen-grand-prix-monako-2025",
    excerpt:
      "Holenderski kierowca Red Bulla odnosi kolejne zwycięstwo w sezonie.",
    content: `Max Verstappen z perfekcyjnym pokazem dominacji wygrał Grand Prix Monako! Kierowca Red Bulla od startu do mety prowadził wyścig, 
      odpierając ataki Charlesa Leclerca. "To była jazda pod presją, ale barierki Monte Carlo to mój drugi dom" - żartował Holender po 
      swoim 40. zwycięstwie w karierze. W klasyfikacji generalnej Verstappen zwiększył przewagę nad Lewisem Hamiltonem do 48 punktów.`,
    publishDate: new Date("2025-02-06T16:00:00"),
    author: authors[2],
    category: categories[5],
    url: "/f1/verstappen-grand-prix-monako-2025",
    imageUrl: "/placeholder.svg",
    thumbnailUrl: "/placeholder.svg",
    tags: ["F1", "Verstappen", "Red Bull"],
    isHot: true,
    isFeatured: false,
  },

  // E-SPORT
  {
    id: 7,
    title: "Polska drużyna triumfuje w CS:GO Major!",
    slug: "csgo-major-polska-2025",
    excerpt: "Polska ekipa zdominowała finał największego turnieju w CS:GO.",
    content: `Polski zespół G2 Esports napisał historię Counter-Strike'a, wygrywając Majora w Katowicach! W finałowym pojedynku 
    na mapach Ancient (16-13) i Nuke (16-9) pokonali FaZe Clan. MVP turnieju został 19-letni sniper "kuber", który w decydującej 
    rundzie wykonał słynny 1v5 clutch. "To największy sukces polskiego esportu od czasów Virtus.pro" - komentowali eksperci. 
    Nagroda: 1 000 000 $ trafiła do polskiej drużyny.`,
    publishDate: new Date("2025-02-06T15:30:00"),
    author: authors[0],
    category: categories[6],
    url: "/e-sport/csgo-major-polska-2025",
    imageUrl: "/placeholder.svg",
    thumbnailUrl: "/placeholder.svg",
    tags: ["CS:GO", "Esport", "Major"],
    isHot: true,
    isFeatured: false,
  },
  {
    id: 8,
    title: "Kamil Stoch wygrywa Turniej Czterech Skoczni",
    slug: "stoch-turniej-czterech-skoczni-2025",
    excerpt:
      "Polski skoczek ponownie triumfuje w prestiżowym turnieju, pokonując rywali w imponującym stylu.",
    content:
      "Kamil Stoch nie pozostawił złudzeń i w świetnym stylu wygrał wszystkie konkursy tegorocznego turnieju. W Oberstdorfie, Garmisch-Partenkirchen, Innsbrucku i Bischofshofen polski skoczek prezentował się znakomicie, notując odległości powyżej 140 metrów i zdobywając najwyższe noty sędziowskie. W ostatnim konkursie na słynnej Paul-Ausserleitner-Schanze osiągnął 143,5 m, co zapewniło mu historyczny hat-trick zwycięstw w jednej edycji. «To spełnienie marzeń – mówił ze łzami w oczach. – Po 2021 roku znów czuję, że mogę rywalizować z najlepszymi». Eksperci podkreślają, że jego technika lądowania i stabilność w locie były kluczowe. Kibice w mediach społecznościowych tworzą już memy z napisem «Stoch – król czterech skoczni».",
    publishDate: new Date("2025-02-06T20:00:00"),
    author: authors[1],
    category: categories[5],
    url: "/skoki/stoch-turniej-czterech-skoczni-2025",
    imageUrl: "/placeholder.svg",
    thumbnailUrl: "/placeholder.svg",
    tags: ["Skoki Narciarskie", "Turniej Czterech Skoczni", "Kamil Stoch"],
    isHot: false,
    isFeatured: true,
  },
  {
    id: 9,
    title: "Polska zdobywa złoty medal w sztafecie biathlonowej",
    slug: "polska-zloty-medal-biathlon-2025",
    excerpt:
      "Polscy biathloniści zdominowali konkurencję i sięgnęli po historyczne złoto.",
    content:
      "Drużyna biathlonowa Polski pokazała niezwykłą formę i zdobyła pierwsze w historii złoto mistrzostw świata. Marcin Zawół, Anna Nowakowska, Tomasz Kierul i Kinga Woźniak nie popełnili ani jednego błędu na strzelnicy, co w połączeniu z błyskawicznym biegiem dało im przewagę 28 sekund nad Norwegią. Decydująca okazała się ostatnia zmiana, gdzie Woźniak utrzymała nerwy na wodzy, oddając celny strzał w pozycji stojącej pod presją kibiców. «To nasz złoty generation – komentował kapitan drużyny. – Trenowaliśmy system karuzeli strzeleckiej przez cały sezon». Prezydent RP już zaprosił biathlonistów na uroczyste śniadanie do Pałacu Prezydenckiego.",
    publishDate: new Date("2025-02-06T18:45:00"),
    author: authors[2],
    category: categories[6],
    url: "/biathlon/polska-zloty-medal-biathlon-2025",
    imageUrl: "/placeholder.svg",
    thumbnailUrl: "/placeholder.svg",
    tags: ["Biathlon", "Mistrzostwa Świata", "Reprezentacja Polski"],
    isHot: false,
    isFeatured: true,
  },
  {
    id: 10,
    title: "Nowy rekord świata w maratonie!",
    slug: "rekord-swiata-maraton-2025",
    excerpt:
      "Kenijski biegacz pobił dotychczasowy rekord świata, schodząc poniżej 2 godzin!",
    content:
      "Niebywały wyczyn w świecie biegów długodystansowych – nowy rekord świata w maratonie został pobity przez 28-letniego Kenijczyka Eliuda Kiproticha na trasie w Monako. Z czasem 1:59:32 jako pierwszy człowiek w historii przekroczył magiczną barierę 2 godzin, korzystając z idealnych warunków pogodowych i asysty „łamiących wiatr” pacemakerów. Jego średnie tempo wynosiło niewiarygodne 2:50 min/km. «Czułem, że dziś piszę historię – mówił po biegu. – W 40. km wiedziałem, że to możliwe». Kontrowersje budzi specjalnie zaprojektowane buty z 5-milimetrową pianką, ale IAAF już zatwierdził rezultat.",
    publishDate: new Date("2025-02-06T17:30:00"),
    author: authors[0],
    category: categories[7],
    url: "/lekkoatletyka/rekord-swiata-maraton-2025",
    imageUrl: "/placeholder.svg",
    thumbnailUrl: "/placeholder.svg",
    tags: ["Lekkoatletyka", "Maraton", "Rekord Świata"],
    isHot: false,
    isFeatured: false,
  },
  {
    id: 11,
    title: "Robert Kubica wraca do Formuły 1",
    slug: "kubica-powrot-f1-2025",
    excerpt:
      "Polski kierowca podpisuje kontrakt z zespołem Alfa Romeo i wraca do rywalizacji w F1!",
    content:
      "Robert Kubica ponownie w Formule 1 – tym razem jako główny kierowca zespołu Alfa Romeo. 40-letni Polak podpisał roczny kontrakt z opcją przedłużenia, zastępując Chińskiego Zhou Guanyu. «To jak drugi debiut – żartował podczas konferencji prasowej. – Wiem, że wielu uważało, że po wypadku w 2011 to koniec, ale moje czasy w symulatorze przekonały zespół». Szef zespołu Frédéric Vasseur podkreśla: „Jego doświadczenie w rozwoju samochodu jest bezcenne”. Fani liczą, że Kubica powtórzy sukces z 2008 roku, gdy stanął na podium GP Kanady.",
    publishDate: new Date("2025-02-06T15:20:00"),
    author: authors[1],
    category: categories[8],
    url: "/f1/kubica-powrot-f1-2025",
    imageUrl: "/placeholder.svg",
    thumbnailUrl: "/placeholder.svg",
    tags: ["F1", "Robert Kubica", "Alfa Romeo"],
    isHot: false,
    isFeatured: true,
  },
  {
    id: 12,
    title: "Nowy mistrz świata w boksie!",
    slug: "nowy-mistrz-swiata-boks-2025",
    excerpt:
      "Nieoczekiwany nokaut w 10. rundzie przesądza o tytule mistrzowskim!",
    content:
      "Sensacyjne zakończenie walki o mistrzostwo świata w wadze ciężkiej! 25-letni Hiszpan Diego „El Toro” Ramirez znokautował w 10. rundzie niepokonanego dotąd Amerykanina Deontaya Millera lewym sierpowym w korpus. Wbrew przewidywieniom analityków, Ramirez dominował od pierwszej rundy, wykorzystując przewagę szybkości nad cięższym rywalem. «To jak sen – mówił nowy mistrz, oplatając się flagą Andory. – Dedykuję ten pas mojemu bratu, który trenował ze mną w garażu». Promotorzy już zapowiadają rewanżową walkę w Las Vegas, która może przynieść 20 mln $ przychodów.",
    publishDate: new Date("2025-02-06T12:00:00"),
    author: authors[2],
    category: categories[9],
    url: "/boks/nowy-mistrz-swiata-boks-2025",
    imageUrl: "/placeholder.svg",
    thumbnailUrl: "/placeholder.svg",
    tags: ["Boks", "Mistrzostwo Świata", "Nokaut"],
    isHot: false,
    isFeatured: true,
  },
  {
    id: 13,
    title: "Iga Świątek wygrywa Australian Open 2025",
    slug: "swiatek-australian-open-2025",
    excerpt:
      "Polska tenisistka triumfuje w pierwszym wielkoszlemowym turnieju roku, nie tracąc ani jednego seta.",
    content:
      "Iga Świątek pokazała mistrzowską formę i zdominowała Australian Open 2025. W finale pokonała 6-2, 6-1 Rosjankę Darję Kasatkiną, nie oddając żadnego breaka w całym turnieju. Jej słynny forhend okazał się nie do zatrzymania – w decydującym meczu zanotowała 32 winnery przy zaledwie 8 błędach. «Melbourne to moje szczęśliwe miejsce – mówiła Świątek, podnosząc trzecie z rzędu trofeum Wielkiego Szlema. – Zmiana taktyki serwowej z trenerem Tomaszem Wiktorowskim przyniosła efekt». Dziennikarze obliczyli, że w całym turnieju przebiegała łącznie 28 km – o 5 km mniej niż jej rywalki.",
    publishDate: new Date("2025-02-06T10:15:00"),
    author: authors[0],
    category: categories[3],
    url: "/tenis/swiatek-australian-open-2025",
    imageUrl: "/placeholder.svg",
    thumbnailUrl: "/placeholder.svg",
    tags: ["Tenis", "Australian Open", "Iga Świątek"],
    isHot: false,
    isFeatured: true,
  },
  {
    id: 14,
    title: "Reprezentacja Polski awansuje na igrzyska olimpijskie",
    slug: "polska-awans-igrzyska-2025",
    excerpt:
      "Polscy siatkarze wywalczyli kwalifikację na igrzyska olimpijskie w Paryżu.",
    content:
      "W decydującym meczu turnieju kwalifikacyjnego reprezentacja Polski pokonała Brazylię 3:2 (25-23, 22-25, 25-27, 25-21, 15-13) w emocjonującym pięciosetowym pojedynku. Kluczowa okazała się postawa Wilfreda Leona, który w piątym secie zaserwował 4 asy z rzędu. «To był mecz życia – mówił kapitant Bartosz Kurek. – Wiedzieliśmy, że dla Pawła Zatorskiego, który kończy karierę, musimy wywalczyć kwalifikację». Trener Nikola Grbić już zapowiedział, że na igrzyskach zagrają głównie młodzi zawodnicy. Kibice w hali Spodek śpiewali jeszcze godzinę po ostatnim gwizdku.",
    publishDate: new Date("2025-02-06T09:30:00"),
    author: authors[1],
    category: categories[4],
    url: "/siatkowka/polska-awans-igrzyska-2025",
    imageUrl: "/placeholder.svg",
    thumbnailUrl: "/placeholder.svg",
    tags: ["Siatkówka", "Igrzyska Olimpijskie", "Reprezentacja Polski"],
    isHot: true,
    isFeatured: true,
  },
  {
    id: 15,
    title: "Sensacyjny transfer w ekstraklasie",
    slug: "transfer-ekstraklasa-2025",
    excerpt:
      "Gwiazda Premier League przenosi się do polskiej ekstraklasy. To największy transfer w historii ligi!",
    content:
      "Niewiarygodny ruch transferowy wstrząsnął polską piłką. 32-letni Jamie Vardy, legendarny napastnik Leicester City, podpisał 18-miesięczny kontrakt z Rakowem Częstochowa za 3,5 mln euro rocznie. «Chcę pomóc w awansie do Ligi Mistrzów – mówił Anglik na konferencji prasowej. – Mój styl gry idealnie pasuje do polskiej ligi». Transfer stał się możliwy dzięki nowemu sponsorowi – koncernowi paliwowemu z Bliskiego Wschodu. Eksperci szacują, że jego obecność zwiększy wartość telewizyjnych praw Ekstraklasy o 40%. Kibice już żartują: „Vardy w końcu zagra w prawdziwie męskiej lidze”.",
    publishDate: new Date("2025-02-06T08:45:00"),
    author: authors[2],
    category: categories[1],
    url: "/pilka-nozna/transfer-ekstraklasa-2025",
    imageUrl: "/placeholder.svg",
    thumbnailUrl: "/placeholder.svg",
    tags: ["Piłka Nożna", "Ekstraklasa", "Transfery"],
    isHot: false,
    isFeatured: false,
  },
  {
    id: 16,
    title: "Polski koszykarz z rekordem NBA",
    slug: "polski-koszykarz-rekord-nba-2025",
    excerpt:
      "Niesamowity wyczyn polskiego zawodnika w NBA - pobił rekord punktów zdobytych w jednym meczu!",
    content:
      "Historia dzieje się na naszych oczach. 22-letni Mateusz „Matty” Wójcik z Dallas Mavericks pobił rekord NBA w punktach w jednym meczu, zdobywając 83 punkty w spotkaniu z Golden State Warriors! Polak trafił 28 z 41 rzutów z gry, w tym 15 trójek. Najbardziej zapamiętany zostanie jego „Hail Mary” z połowy boiska na syrenę. «To dla mojego dziadka, który uczył mnie rzucać śnieżkami w Krakowie – mówił wzruszony Wójcik. – W NBA każdy dzień to lekcja pokory». LeBron James napisał na Twitterze: „Witaj w klubie 80+ points. Jesteś kosmitą!”.",
    publishDate: new Date("2025-02-06T07:20:00"),
    author: authors[0],
    category: categories[2],
    url: "/koszykowka/polski-koszykarz-rekord-nba-2025",
    imageUrl: "/placeholder.svg",
    thumbnailUrl: "/placeholder.svg",
    tags: ["Koszykówka", "NBA", "Rekord"],
    isHot: true,
    isFeatured: true,
  },
  {
    id: 17,
    title: "Historyczny sukces polskiego kolarstwa",
    slug: "polski-kolarz-tour-de-france-2025",
    excerpt:
      "Polski kolarz na podium Tour de France! To pierwszy taki wynik w historii.",
    content:
      "Wielki sukces polskiego kolarstwa. 26-letni Kacper Majewski z Team Jumbo-Visma stanął na trzecim stopniu podium Tour de France, przegrywając jedynie z Jonasem Vingegaardem i Tadejem Pogačarem. To pierwszy Polak w historii w czołowej trójce „La Grande Boucle”. Kluczem okazał się etap alpejski, gdzie Majewski uciekł z grupy na Col de la Loze, zyskując 4 minuty. «Jadę na kasie kibiców spod Zakopanego – żartował po finiszu w Paryżu. – Te 3 tygodnie to jak 30 lat życia». Dziennikarze obliczyli, że podczas wyścigu spalił 85 000 kcal – odpowiednik 170 kg ziemniaków.",
    publishDate: new Date("2025-02-06T06:00:00"),
    author: authors[1],
    category: categories[9],
    url: "/kolarstwo/polski-kolarz-tour-de-france-2025",
    imageUrl: "/placeholder.svg",
    thumbnailUrl: "/placeholder.svg",
    tags: ["Kolarstwo", "Tour de France", "Wyścigi"],
    isHot: false,
    isFeatured: true,
  },
];

// Zachowujemy initialState bez zmian
export const initialState: NewsState = {
  newsByCategory: {},
  hotNews: [],
  featuredNews: {},
  currentNews: null,
  relatedNews: [],
  loading: false,
  error: null,
};
