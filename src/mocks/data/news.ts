// src/mocks/data/news.ts
import type { News, NewsState } from "@/types/News";
import { authors } from "./authors";
import { categories } from "./categories";

export const mockNews: News[] = [
  // PIŁKA NOŻNA
  {
    id: 1,
    title: 'Messi zdobywa Złotą Piłkę po raz ósmy!',
    slug: 'messi-zlota-pilka-2025',
    excerpt:
      'Argentyńczyk po raz kolejny triumfuje w plebiscycie France Football.',
    content: `Leo Messi ponownie zostaje uznany najlepszym piłkarzem świata! Argentyńska legenda odebrała Złotą Piłkę podczas gali w Paryżu, wyprzedzając Erlinga Haalanda i Kevina De Bruyne. 
      "To ogromny zaszczyt wciąż być częścią elity światowego futbolu w wieku 37 lat" - mówił wzruszony kapitan Inter Miami. 
      W sezonie 2024/25 Messi poprowadził swoją drużynę do mistrzostwa MLS, notując 34 gole i 25 asyst. Historyczny triumf został nagrodzony 
      specjalną edycją trofeum z wygrawerowanym napisem "GOAT 2025".`,
    publishDate: new Date('2025-02-06T18:00:00'),
    modifiedDate: new Date('2025-02-06T18:30:00'),
    author: authors[0],
    category: categories[1],
    url: '/pilka-nozna/messi-zlota-pilka-2025',
    imageUrl: '/placeholder.svg',
    thumbnailUrl: '/placeholder.svg',
    tags: ['Złota Piłka', 'Messi', 'France Football'],
    isHot: true,
    isFeatured: true,
  },
  {
    id: 2,
    title: 'Manchester City wygrywa Ligę Mistrzów!',
    slug: 'manchester-city-liga-mistrzow-2025',
    excerpt:
      'Drużyna Pepa Guardioli po raz kolejny triumfuje w Champions League.',
    content: `Manchester City pisze historię! Podopieczni Pepa Guardioli pokonali w londyńskim finale Bayern Monachium 3:1, 
      sięgając po trzeci z rzędu tytuł Ligi Mistrzów. Decydującego gola w 89. minucie strzelił norweski snajper Erling Haaland, 
      kończąc sezon z rekordowymi 17 golami w CL. "To nasza najlepsza drużyna w historii" - przyznał hiszpański trener, który zapowiedział 
      rezygnację z funkcji po zakończeniu kontraktu.`,
    publishDate: new Date('2025-02-06T22:00:00'),
    author: authors[1],
    category: categories[1],
    url: '/pilka-nozna/manchester-city-liga-mistrzow-2025',
    imageUrl: '/placeholder.svg',
    thumbnailUrl: '/placeholder.svg',
    tags: ['Liga Mistrzów', 'Manchester City', 'Guardiola'],
    isHot: true,
    isFeatured: true,
  },

  // SIATKÓWKA
  {
    id: 3,
    title: 'Polska pokonuje Francję w Lidze Narodów!',
    slug: 'polska-francja-liga-narodow-2025',
    excerpt:
      'Biało-czerwoni odnoszą ważne zwycięstwo w rozgrywkach międzynarodowych.',
    content: `Polscy siatkarze w stylu pokonali Francuzów 3:1 (25-23, 22-25, 25-19, 25-21) w kluczowym meczu Ligi Narodów. 
      Najskuteczniejszy w drużynie Nikola Grbića okazał się Wilfredo León, który zdobył 24 punkty. "To dopiero początek naszej drogi, 
      ale pokazaliśmy charakter" - komentował kapitan Bartosz Kurek. Decydujący był trzeci set, gdzie biało-czerwoni zablokowali 
      aż 7 ataków rywali.`,
    publishDate: new Date('2025-02-06T19:45:00'),
    author: authors[2],
    category: categories[2],
    url: '/siatkowka/polska-francja-liga-narodow-2025',
    imageUrl: '/placeholder.svg',
    thumbnailUrl: '/placeholder.svg',
    tags: ['Liga Narodów', 'Polska', 'Francja'],
    isHot: true,
    isFeatured: true,
  },

  // TENIS
  {
    id: 4,
    title: 'Świątek wygrywa Wimbledon!',
    slug: 'swiatek-wimbledon-2025',
    excerpt: 'Iga Świątek pokonała Naomi Osakę w wielkim finale Wimbledonu!',
    content: `Iga Świątek dokonała niemożliwego! Polska tenisistka po 3-godzinnym finale pokonała Naomi Osakę 6-7(5), 7-5, 6-2, 
    zdobywając pierwszy w karierze tytuł na trawie. "Wimbledon był moim marzeniem od dziecka" - mówiła ze łzami w oczach 24-latka, 
    która jako pierwsza Polka w historii triumfowała w All England Club. W decydującym secie Świątek zaserwowała 15 asów, 
    ustanawiając nowy rekord turnieju.`,
    publishDate: new Date('2025-02-06T17:00:00'),
    author: authors[0],
    category: categories[3],
    url: '/tenis/swiatek-wimbledon-2025',
    imageUrl: '/placeholder.svg',
    thumbnailUrl: '/placeholder.svg',
    tags: ['Wimbledon', 'Iga Świątek', 'WTA'],
    isHot: true,
    isFeatured: true,
  },

  // KOSZYKÓWKA
  {
    id: 5,
    title: 'Los Angeles Lakers zdobywają mistrzostwo NBA!',
    slug: 'lakers-mistrzostwo-nba-2025',
    excerpt:
      'LeBron James poprowadził Lakers do kolejnego tytułu mistrzowskiego!',
    content: `LeBron James w wieku 40 lat poprowadził Lakers do mistrzostwa NBA! Kalifornijska drużyna pokonała Celtics 112-109 
      w emocjonującym 6. meczu finału. "Król" James został MVP serii, średnio notując 28.5 punktów. Historyczny rzut za 3 punkty 
      z ostatniej sekundy zapewnił Lakers pierwszy tytuł od 2020 roku. "To dla Kobe'ego" - krzyczał do kamery LeBron, wskazując 
      na specjalną opaskę z numerem 24.`,
    publishDate: new Date('2025-02-06T23:15:00'),
    author: authors[1],
    category: categories[4],
    url: '/koszykowka/lakers-mistrzostwo-nba-2025',
    imageUrl: '/placeholder.svg',
    thumbnailUrl: '/placeholder.svg',
    tags: ['NBA', 'Lakers', 'LeBron James'],
    isHot: true,
    isFeatured: true,
  },

  // FORMUŁA 1
  {
    id: 6,
    title: 'Verstappen wygrywa Grand Prix Monako!',
    slug: 'verstappen-grand-prix-monako-2025',
    excerpt:
      'Holenderski kierowca Red Bulla odnosi kolejne zwycięstwo w sezonie.',
    content: `Max Verstappen z perfekcyjnym pokazem dominacji wygrał Grand Prix Monako! Kierowca Red Bulla od startu do mety prowadził wyścig, 
      odpierając ataki Charlesa Leclerca. "To była jazda pod presją, ale barierki Monte Carlo to mój drugi dom" - żartował Holender po 
      swoim 40. zwycięstwie w karierze. W klasyfikacji generalnej Verstappen zwiększył przewagę nad Lewisem Hamiltonem do 48 punktów.`,
    publishDate: new Date('2025-02-06T16:00:00'),
    author: authors[2],
    category: categories[5],
    url: '/f1/verstappen-grand-prix-monako-2025',
    imageUrl: '/placeholder.svg',
    thumbnailUrl: '/placeholder.svg',
    tags: ['F1', 'Verstappen', 'Red Bull'],
    isHot: true,
    isFeatured: false,
  },

  // E-SPORT
  {
    id: 7,
    title: 'Polska drużyna triumfuje w CS:GO Major!',
    slug: 'csgo-major-polska-2025',
    excerpt: 'Polska ekipa zdominowała finał największego turnieju w CS:GO.',
    content: `Polski zespół G2 Esports napisał historię Counter-Strike'a, wygrywając Majora w Katowicach! W finałowym pojedynku 
    na mapach Ancient (16-13) i Nuke (16-9) pokonali FaZe Clan. MVP turnieju został 19-letni sniper "kuber", który w decydującej 
    rundzie wykonał słynny 1v5 clutch. "To największy sukces polskiego esportu od czasów Virtus.pro" - komentowali eksperci. 
    Nagroda: 1 000 000 $ trafiła do polskiej drużyny.`,
    publishDate: new Date('2025-02-06T15:30:00'),
    author: authors[0],
    category: categories[6],
    url: '/e-sport/csgo-major-polska-2025',
    imageUrl: '/placeholder.svg',
    thumbnailUrl: '/placeholder.svg',
    tags: ['CS:GO', 'Esport', 'Major'],
    isHot: true,
    isFeatured: false,
  },
  {
    id: 8,
    title: 'Kamil Stoch wygrywa Turniej Czterech Skoczni',
    slug: 'stoch-turniej-czterech-skoczni-2025',
    excerpt:
      'Polski skoczek ponownie triumfuje w prestiżowym turnieju, pokonując rywali w imponującym stylu.',
    content:
      'Kamil Stoch nie pozostawił złudzeń i w świetnym stylu wygrał wszystkie konkursy tegorocznego turnieju...',
    publishDate: new Date('2025-02-06T20:00:00'),
    author: authors[1],
    category: categories[5],
    url: '/skoki/stoch-turniej-czterech-skoczni-2025',
    imageUrl: '/placeholder.svg',
    thumbnailUrl: '/placeholder.svg',
    tags: ['Skoki Narciarskie', 'Turniej Czterech Skoczni', 'Kamil Stoch'],
    isHot: true,
    isFeatured: true,
  },
  {
    id: 9,
    title: 'Polska zdobywa złoty medal w sztafecie biathlonowej',
    slug: 'polska-zloty-medal-biathlon-2025',
    excerpt:
      'Polscy biathloniści zdominowali konkurencję i sięgnęli po historyczne złoto.',
    content:
      'Drużyna biathlonowa Polski pokazała niezwykłą formę i zdobyła pierwsze w historii złoto mistrzostw świata...',
    publishDate: new Date('2025-02-06T18:45:00'),
    author: authors[2],
    category: categories[6],
    url: '/biathlon/polska-zloty-medal-biathlon-2025',
    imageUrl: '/placeholder.svg',
    thumbnailUrl: '/placeholder.svg',
    tags: ['Biathlon', 'Mistrzostwa Świata', 'Reprezentacja Polski'],
    isHot: true,
    isFeatured: true,
  },
  {
    id: 10,
    title: 'Nowy rekord świata w maratonie!',
    slug: 'rekord-swiata-maraton-2025',
    excerpt:
      'Kenijski biegacz pobił dotychczasowy rekord świata, schodząc poniżej 2 godzin!',
    content:
      'Niebywały wyczyn w świecie biegów długodystansowych - nowy rekord świata w maratonie...',
    publishDate: new Date('2025-02-06T17:30:00'),
    author: authors[0],
    category: categories[7],
    url: '/lekkoatletyka/rekord-swiata-maraton-2025',
    imageUrl: '/placeholder.svg',
    thumbnailUrl: '/placeholder.svg',
    tags: ['Lekkoatletyka', 'Maraton', 'Rekord Świata'],
    isHot: true,
    isFeatured: false,
  },
  {
    id: 11,
    title: 'Robert Kubica wraca do Formuły 1',
    slug: 'kubica-powrot-f1-2025',
    excerpt:
      'Polski kierowca podpisuje kontrakt z zespołem Alfa Romeo i wraca do rywalizacji w F1!',
    content:
      'Robert Kubica ponownie w Formule 1 - tym razem jako główny kierowca zespołu Alfa Romeo...',
    publishDate: new Date('2025-02-06T15:20:00'),
    author: authors[1],
    category: categories[8],
    url: '/f1/kubica-powrot-f1-2025',
    imageUrl: '/placeholder.svg',
    thumbnailUrl: '/placeholder.svg',
    tags: ['F1', 'Robert Kubica', 'Alfa Romeo'],
    isHot: true,
    isFeatured: true,
  },
  {
    id: 12,
    title: 'Nowy mistrz świata w boksie!',
    slug: 'nowy-mistrz-swiata-boks-2025',
    excerpt:
      'Nieoczekiwany nokaut w 10. rundzie przesądza o tytule mistrzowskim!',
    content:
      'Sensacyjne zakończenie walki o mistrzostwo świata w wadze ciężkiej...',
    publishDate: new Date('2025-02-06T12:00:00'),
    author: authors[2],
    category: categories[9],
    url: '/boks/nowy-mistrz-swiata-boks-2025',
    imageUrl: '/placeholder.svg',
    thumbnailUrl: '/placeholder.svg',
    tags: ['Boks', 'Mistrzostwo Świata', 'Nokaut'],
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
