//src/mocks/data/categories.ts

import type { Category } from "../../types/Category";

export const categories: Category[] = [
    {
        id: 1,
        title: "Wideo",
        href: "/wideo/",
    },
    {
        id: 2,
        title: "Piłka nożna",
        href: "/pilka-nozna/",
        submenu: [
            { title: "Liga Konferencji", href: "/liga/liga-konferencji/" },
            { title: "Liga Europy", href: "/liga/liga-europejska/" },
            { title: "Reprezentacja", href: "/liga/reprezentacja-w-pilce-noznej/" },
            { title: "Liga Mistrzów", href: "/liga/liga-mistrzow/" },
            { title: "Liga Narodów", href: "/liga/liga-narodow/" },
            { title: "Ekstraklasa", href: "/liga/ekstraklasa/" },
            { title: "1 Liga", href: "/liga/i-liga/" },
            { title: "Puchar Polski", href: "/liga/puchar-polski/" },
            { title: "MŚ 2026", href: "/liga/mistrzostwa-swiata-2026/" },
            { title: "Euro 2024", href: "/liga/euro-2024/" },
            { title: "Anglia", href: "/liga/liga-angielska/" },
            { title: "Francja", href: "/liga/liga-francuska/" },
            { title: "Hiszpania", href: "/liga/liga-hiszpanska/" },
            { title: "Niemcy", href: "/liga/liga-niemiecka/" },
            { title: "Włochy", href: "/liga/liga-wloska/" },
            { title: "Arabia Saudyjska", href: "/liga/liga-saudyjska/" },
            { title: "Holandia", href: "/liga/liga-holenderska/" },
            { title: "Inne", href: "/liga/inne_660482/" },
            { title: "MLS", href: "/liga/mls/" },
            { title: "Brazylia", href: "/liga/liga-brazylijska/" }
        ]
    },
    {
        id: 3,
        title: "Siatkówka",
        href: "/siatkowka/",
        submenu: [
            { title: "PlusLiga", href: "/liga/plusliga/" },
            { title: "Reprezentacja mężczyzn", href: "/liga/reprezentacja-siatkarzy/" },
            { title: "Reprezentacja kobiet", href: "/liga/reprezentacja-siatkarek/" },
            { title: "TAURON Liga", href: "/liga/liga-siatkowki-kobiet/" },
            { title: "ME mężczyzn", href: "/liga/cev-mistrzostwa-europy-mezczyzn/" },
            { title: "ME kobiet", href: "/liga/cev-mistrzostwa-europy-kobiet/" },
            { title: "Europejskie Puchary", href: "/liga/europejskie-puchary-w-siatkowce/" },
            { title: "Liga Narodów", href: "/liga/liga-narodow-fivb/" },
            { title: "SuperLega", href: "/liga/serie-a1/" },
            { title: "PLS 1. Liga", href: "/liga/1-liga/" },
            { title: "Siatkówka plażowa", href: "/liga/siatkowka-plazowa/" },
            { title: "Inne", href: "/liga/inne_660494/" },
            { title: "KMŚ", href: "/liga/klubowe-mistrzostwa-swiata-w-siatkowce/" },
            { title: "MŚ 2022", href: "/liga/mistrzostwa-swiata-2022-w-siatkowce/" }
        ]
    },
    {
        id: 4,
        title: "Tenis",
        href: "/tenis/",
        submenu: [
            { title: "US Open", href: "/liga/us-open/" },
            { title: "Turnieje ATP i WTA", href: "/liga/turnieje-atp-i-wta/" },
            { title: "Wimbledon", href: "/liga/wimbledon/" },
            { title: "Roland Garros", href: "/liga/roland-garros/" },
            { title: "Australian Open", href: "/liga/australian-open/" },
            { title: "Puchar Billie Jean King", href: "/liga/fed-cup/" },
            { title: "Puchar Davisa", href: "/liga/puchar-davisa/" },
            { title: "LOTTO SuperLIGA", href: "/liga/lotto-superliga/" },
            { title: "Inne", href: "/liga/inne_660517/" }
        ]
    },
    {
        id: 5,
        title: "Koszykówka",
        href: "/koszykowka/",
        submenu: [
            { title: "Orlen Basket Liga", href: "/liga/basket-liga/" },
            { title: "Orlen Basket Liga Kobiet", href: "/liga/basket-liga-kobiet/" },
            { title: "NBA", href: "/liga/nba/" },
            { title: "Euroliga Mężczyzn", href: "/liga/euroliga-mezczyzn/" },
            { title: "Euroliga Kobiet", href: "/liga/euroliga-kobiet/" },
            { title: "Reprezentacja Mężczyzn", href: "/liga/reprezentacja-koszykarzy/" },
            { title: "Reprezentacja Kobiet", href: "/liga/reprezentacja-koszykarek/" },
            { title: "Inne", href: "/liga/inne_660525/" }
        ]
    },
    {
        id: 6,
        title: "Moto",
        href: "/sporty-motorowe/",
        submenu: [
            { title: "Formuła 1", href: "/liga/formula-1/" },
            { title: "MotoGP", href: "/liga/moto-gp/" },
            { title: "Rajdy", href: "/liga/rajdy/" },
            { title: "F1H2O", href: "/sporty-motorowe/f1-h20/liga/" },
            { title: "Rajd Dakar", href: "/liga/rajd-dakar-2021-orlen/" },
            { title: "Inne", href: "/liga/inne_660509/" }
        ]
    },
    {
        id: 7,
        title: "Piłka ręczna",
        href: "/pilka-reczna/",
        submenu: [
            { title: "Reprezentacja mężczyzn", href: "/liga/reprezentacja-szczypiornistow/" },
            { title: "Reprezentacja kobiet", href: "/liga/reprezentacja-szczypiornistek/" },
            { title: "Orlen Superliga", href: "/liga/pgnig-superliga-mezczyzn/" },
            { title: "Orlen Superliga Kobiet", href: "/liga/pgnig-superliga-kobiet/" },
            { title: "Liga Mistrzów", href: "/liga/liga-mistrzow-w-pilce-recznej/" },
            { title: "Europejskie Puchary", href: "/liga/europejskie-puchary-w-pilce-recznej/" },
            { title: "Inne", href: "/liga/inne_660505/" }
        ]
    },
    {
        id: 8,
        title: "Sporty walki",
        href: "/sporty-walki/",
        submenu: [
            { title: "Boks", href: "/liga/boks/" },
            { title: "MMA", href: "/liga/mma/" },
            { title: "Zapasy", href: "/liga/zapasy/" },
            { title: "Inne", href: "/liga/inne_660498/" }
        ]
    },
    {
        id: 9,
        title: "Zimowe",
        href: "/sporty-zimowe/",
        submenu: [
            { title: "Skoki", href: "/liga/skoki-narciarskie/" },
            { title: "Łyżwiarstwo Szybkie", href: "/liga/lyzwiarstwo-szybkie/" },
            { title: "Biathlon", href: "/liga/biathlon/" },
            { title: "Biegi Narciarskie", href: "/liga/biegi-narciarskie/" },
            { title: "Hokej", href: "/liga/hokej/" },
            { title: "Narciarstwo Alpejskie", href: "/liga/narciarstwo-alpejskie/" },
            { title: "Inne", href: "/liga/inne_660533/" },
            { title: "Pekin 2022", href: "/liga/pekin-2022/" }
        ]
    },
    {
        id: 10,
        title: "Inne",
        href: "/inne/",
        submenu: [
            { title: "Lekkoatletyka", href: "/liga/lekkoatletyka/" },
            { title: "Paryż 2024", href: "/liga/igrzyska-olimpijskie-paryz-2024/" },
            { title: "Kolarstwo", href: "/liga/kolarstwo/" },
            { title: "Pływanie", href: "/liga/plywanie/" },
            { title: "Rugby", href: "/liga/rugby/" },
            { title: "Golf", href: "/liga/golf/" },
            { title: "Podnoszenie ciężarów", href: "/liga/podnoszenie-ciezarow/" },
            { title: "Wioślarstwo", href: "/liga/wioslarstwo/" },
            { title: "Kajakarstwo", href: "/liga/kajakarstwo/" },
            { title: "Żeglarstwo", href: "/liga/zeglarstwo/" },
            { title: "Pozostałe", href: "/liga/pozostale/" },
            { title: "European League of Football", href: "/liga/european-league-of-football/" },
            { title: "ORLEN Copernicus Cup", href: "/liga/orlen-copernicus-cup/" }
        ]
    }
];