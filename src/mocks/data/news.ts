// src/mocks/data/news.ts
import type { News, NewsState } from "@/types/News";
import { authors } from "./authors";
import { categories } from "./categories";

export const mockNews: News[] = [
  // PIŁKA NOŻNA (categoryId: 2)
  {
    id: 1,
    title: "Lewandowski z hat-trickiem w El Clasico",
    slug: "lewandowski-hat-trick-el-clasico-2025",
    excerpt: "Polski napastnik zdobył trzy bramki w meczu z Realem Madryt, prowadząc Barcelonę do zwycięstwa 4:2",
    content: "Robert Lewandowski pokazał swoją klasę strzelecką w kolejnym El Clasico...",
    publishDate: new Date("2025-02-05T20:00:00"),
    modifiedDate: new Date("2025-02-05T20:30:00"),
    author: authors[0],
    category: categories[1],
    url: "/pilka-nozna/lewandowski-hat-trick-el-clasico-2025",
    imageUrl: "/images/news/lewandowski-clasico-full.jpg",
    thumbnailUrl: "/images/news/lewandowski-clasico-thumb.jpg",
    tags: ["La Liga", "Barcelona", "Real Madryt", "El Clasico", "Lewandowski"],
    isHot: true,
    isFeatured: true
  },
  {
    id: 2,
    title: "Raków Częstochowa awansuje do fazy grupowej Ligi Mistrzów",
    slug: "rakow-awans-liga-mistrzow",
    excerpt: "Historyczny sukces mistrzów Polski. Raków pokonał FC Kopenhaga w dwumeczu",
    content: "Raków Częstochowa dokonał niemożliwego...",
    publishDate: new Date("2025-02-05T21:45:00"),
    author: authors[1],
    category: categories[1],
    url: "/pilka-nozna/rakow-awans-liga-mistrzow",
    imageUrl: "/images/news/rakow-ucl-full.jpg",
    thumbnailUrl: "/images/news/rakow-ucl-thumb.jpg",
    tags: ["Liga Mistrzów", "Raków Częstochowa", "Ekstraklasa"],
    isHot: true,
    isFeatured: true
  },
  {
    id: 3,
    title: "Polska pewnie wygrywa z Czechami w eliminacjach Euro 2024",
    slug: "polska-czechy-eliminacje-euro",
    excerpt: "Biało-czerwoni pokonali Czechów 3:0 i są o krok od awansu na Euro 2024",
    content: "Reprezentacja Polski rozegrała jeden z najlepszych meczów w ostatnich latach...",
    publishDate: new Date("2025-02-05T22:40:00"),
    author: authors[2],
    category: categories[1],
    url: "/pilka-nozna/polska-czechy-eliminacje-euro",
    imageUrl: "/images/news/polska-czechy-full.jpg",
    thumbnailUrl: "/images/news/polska-czechy-thumb.jpg",
    tags: ["Reprezentacja", "Euro 2024", "Eliminacje"],
    isHot: false,
    isFeatured: true
  },
  
  // SIATKÓWKA (categoryId: 3)
  {
    id: 4,
    title: "ZAKSA w finale Ligi Mistrzów",
    slug: "zaksa-awans-final-liga-mistrzow-2025",
    excerpt: "Kędzierzynianie pokonali Trentino w półfinale i zagrają o czwarty z rzędu triumf w Champions League",
    content: "Siatkarze Grupy Azoty ZAKSY Kędzierzyn-Koźle dokonali niemożliwego...",
    publishDate: new Date("2025-02-05T18:45:00"),
    author: authors[1],
    category: categories[2],
    url: "/siatkowka/zaksa-awans-final-liga-mistrzow-2025",
    imageUrl: "/images/news/zaksa-semifinal-full.jpg",
    thumbnailUrl: "/images/news/zaksa-semifinal-thumb.jpg",
    tags: ["Liga Mistrzów", "ZAKSA", "PlusLiga", "Trentino"],
    isHot: true,
    isFeatured: true
  },
  {
    id: 5,
    title: "Polska mistrzem świata w siatkówce!",
    slug: "polska-mistrzostwa-swiata-siatkowka",
    excerpt: "Biało-czerwoni pokonali Brazylię 3:1 w finale mistrzostw świata",
    content: "To już trzeci z rzędu tytuł mistrzowski dla Polski...",
    publishDate: new Date("2025-02-05T23:15:00"),
    author: authors[0],
    category: categories[2],
    url: "/siatkowka/polska-mistrzostwa-swiata-siatkowka",
    imageUrl: "/images/news/siatkowka-ms-full.jpg",
    thumbnailUrl: "/images/news/siatkowka-ms-thumb.jpg",
    tags: ["Reprezentacja", "Mistrzostwa Świata", "Siatkówka"],
    isHot: true,
    isFeatured: true
  },
  {
    id: 6,
    title: "Jastrzębski Węgiel triumfuje w PlusLidze",
    slug: "jastrzebie-mistrz-plusligi",
    excerpt: "Jastrzębski Węgiel pokonał Projekt Warszawa w finale PlusLigi",
    content: "W decydującym meczu zespół z Jastrzębia-Zdroju nie dał szans rywalom...",
    publishDate: new Date("2025-02-04T22:30:00"),
    author: authors[2],
    category: categories[2],
    url: "/siatkowka/jastrzebie-mistrz-plusligi",
    imageUrl: "/images/news/jastrzebie-full.jpg",
    thumbnailUrl: "/images/news/jastrzebie-thumb.jpg",
    tags: ["PlusLiga", "Jastrzębski Węgiel", "Projekt Warszawa"],
    isHot: false,
    isFeatured: true
  },

  // TENIS (categoryId: 4)
  {
    id: 7,
    title: "Świątek nie do zatrzymania w Doha",
    slug: "swiatek-wygrywa-doha-2025",
    excerpt: "Polska tenisistka zdobywa czwarty tytuł w Katarze, nie tracąc seta w całym turnieju",
    content: "Iga Świątek po raz kolejny udowodniła, że kort w Doha to jej drugi dom...",
    publishDate: new Date("2025-02-05T16:30:00"),
    author: authors[2],
    category: categories[3],
    url: "/tenis/swiatek-wygrywa-doha-2025",
    imageUrl: "/images/news/swiatek-doha-full.jpg",
    thumbnailUrl: "/images/news/swiatek-doha-thumb.jpg",
    tags: ["WTA", "Doha", "Iga Świątek"],
    isHot: true,
    isFeatured: true
  },
  {
    id: 8,
    title: "Hurkacz wygrywa turniej ATP Masters w Miami",
    slug: "hurkacz-triumf-miami-masters",
    excerpt: "Polski tenisista pokonał Daniiła Miedwiediewa w finale turnieju ATP Masters 1000",
    content: "Hubert Hurkacz zanotował kolejny wielki sukces w karierze...",
    publishDate: new Date("2025-02-05T14:20:00"),
    author: authors[0],
    category: categories[3],
    url: "/tenis/hurkacz-triumf-miami-masters",
    imageUrl: "/images/news/hurkacz-miami-full.jpg",
    thumbnailUrl: "/images/news/hurkacz-miami-thumb.jpg",
    tags: ["ATP", "Miami Open", "Hurkacz"],
    isHot: true,
    isFeatured: false
  },
  {
    id: 9,
    title: "Sensacyjny finał US Open",
    slug: "us-open-final-2025",
    excerpt: "Niesamowity mecz w finale US Open 2025. Alcaraz przegrywa z Sheltonem",
    content: "Ben Shelton sprawił największą sensację w historii US Open...",
    publishDate: new Date("2025-02-04T08:45:00"),
    author: authors[1],
    category: categories[3],
    url: "/tenis/us-open-final-2025",
    imageUrl: "/images/news/usopen-final-full.jpg",
    thumbnailUrl: "/images/news/usopen-final-thumb.jpg",
    tags: ["US Open", "ATP", "Shelton", "Alcaraz"],
    isHot: false,
    isFeatured: true
  },

  // KOSZYKÓWKA (categoryId: 5)
  {
    id: 10,
    title: "Sochan z triple-double w NBA",
    slug: "sochan-triple-double-nba",
    excerpt: "Jeremy Sochan z historycznym występem w barwach San Antonio Spurs",
    content: "Polski koszykarz zapisał się w historii NBA...",
    publishDate: new Date("2025-02-05T10:15:00"),
    author: authors[2],
    category: categories[4],
    url: "/koszykowka/sochan-triple-double-nba",
    imageUrl: "/images/news/sochan-nba-full.jpg",
    thumbnailUrl: "/images/news/sochan-nba-thumb.jpg",
    tags: ["NBA", "Spurs", "Sochan"],
    isHot: true,
    isFeatured: true
  },
  {
    id: 11,
    title: "Śląsk Wrocław mistrzem Polski",
    slug: "slask-mistrz-polski-koszykowka",
    excerpt: "Koszykarze Śląska Wrocław zdobywają mistrzostwo Polski po 20 latach przerwy",
    content: "W finale play-off zespół z Wrocławia pokonał Stal Ostrów...",
    publishDate: new Date("2025-02-04T21:30:00"),
    author: authors[0],
    category: categories[4],
    url: "/koszykowka/slask-mistrz-polski-koszykowka",
    imageUrl: "/images/news/slask-basket-full.jpg",
    thumbnailUrl: "/images/news/slask-basket-thumb.jpg",
    tags: ["PLK", "Śląsk Wrocław", "Basket Liga"],
    isHot: false,
    isFeatured: true
  },
  {
    id: 12,
    title: "Polska awansowała na igrzyska w koszykówce",
    slug: "polska-awans-igrzyska-koszykowka",
    excerpt: "Reprezentacja Polski wywalczyła historyczny awans na igrzyska olimpijskie",
    content: "Biało-czerwoni pokonali Litwę w decydującym meczu kwalifikacji...",
    publishDate: new Date("2025-02-04T19:45:00"),
    author: authors[1],
    category: categories[4],
    url: "/koszykowka/polska-awans-igrzyska-koszykowka",
    imageUrl: "/images/news/koszykowka-io-full.jpg",
    thumbnailUrl: "/images/news/koszykowka-io-thumb.jpg",
    tags: ["Reprezentacja", "Igrzyska Olimpijskie", "Kwalifikacje"],
    isHot: true,
    isFeatured: false
  }
];

// Zachowujemy initialState bez zmian
export const initialState: NewsState = {
    newsByCategory: {},
    hotNews: [],
    featuredNews: {},
    currentNews: null,
    relatedNews: [],
    loading: false,
    error: null
};