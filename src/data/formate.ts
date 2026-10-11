// Formate (Workshops) für den Abschnitt „Formate“ (#formate) der deutschen Startseite.
//
// Ein Format bearbeiten oder ergänzen: einfach den Eintrag unten ändern.
// - `id` wird zur Sprungmarke (#format-<id>) – nur Kleinbuchstaben, Ziffern, Bindestriche.
// - `bild`: Dateiname einer Collage in src/assets/formate/ (Hochformat 4:5).
//   Liegt die Datei noch nicht vor, erscheint automatisch ein Platzhalter.
// - `dauer` leer lassen (''), dann wird die Zeile „Dauer“ ausgeblendet.
// - `link` weglassen, dann erscheint kein „Mehr erfahren →“.

export type Format = {
  id: string;
  kicker: string;
  titel: string;
  untertitel: string;
  leitfrage: string;
  beschreibung: string;
  zielgruppe: string;
  dauer: string;
  ergebnis: string;
  bild: string;
  bildAlt: string;
  link?: string;
};

export const formateIntro =
  'Die meisten Zukunftsprozesse scheitern nicht an der Analyse, sondern daran, dass schwierige Zukünfte uns überfordern und lähmen. Deshalb verbinden meine Zukunfts-Formate Strategische Vorausschau immer mit psychologischem Wissen: Sie lernen, Entwicklungen systemisch zu analysieren, ganzheitlich einzuordnen und emotional zu verarbeiten – und bleiben so handlungs- und gestaltungsfähig.';

export const formate: Format[] = [
  {
    id: 'inventing-the-future',
    kicker: 'Methodenüberblick · Einstieg',
    titel: 'Inventing the Future',
    untertitel: 'Einführung in die Strategische Vorausschau (Foresight)',
    leitfrage: 'Wie lassen sich heute gute Entscheidungen treffen, für ein Morgen, das wir noch nicht kennen?',
    beschreibung:
      'Ein Überblick über die Grundlagen, Methoden und Anwendungsfälle der Strategischen Vorausschau zur Strategieentwicklung, von Horizon Scanning über Trendanalyse bis zur Szenariotechnik.',
    zielgruppe: 'Teams und Fachkräfte, die Strategie unter Unsicherheit entwickeln. Keine Vorkenntnisse nötig.',
    dauer: '3 Stunden, online oder vor Ort',
    ergebnis:
      'Sie wissen, was Strategic Foresight ist, kennen den Unterschied zu Forecasting und die klassischen Foresight-Methoden und Anwendungsfälle.',
    bild: 'inventing-the-future.jpg',
    bildAlt: 'Collage zum Format Inventing the Future',
  },
  {
    id: 'exploring-alternative-futures',
    kicker: 'Denken in Alternativen',
    titel: 'Exploring Alternative Futures',
    untertitel: 'Szenarioentwicklung',
    leitfrage: 'Wie lassen sich denkbare, mögliche und wünschenswerte Zukünfte systematisch erkunden?',
    beschreibung:
      'In Kleingruppen durchlaufen Sie alle Phasen des schlüsselfaktorenbasierten Szenarioprozesses: Scoping, Scanning, Selektion von Einflussfaktoren, Projektionen, Konsistenzanalyse, Szenarioentwicklung und Strategietransfer.',
    zielgruppe: 'Interessierte mit und ohne Vorkenntnisse',
    dauer: '1 Tag (ca. 7 Stunden), Präsenz',
    ergebnis:
      'Sie haben Szenarien zu einer eigenen Fragestellung entwickelt und können die Methode in Ihrem Arbeitskontext anwenden.',
    bild: 'exploring-alternative-futures.jpg',
    bildAlt: 'Collage zum Format Exploring Alternative Futures',
  },
  {
    id: 'speculative-design',
    kicker: 'Objekte aus der Zukunft',
    titel: 'Speculative Design',
    untertitel: 'Die Zukunft gehört uns',
    leitfrage: '„There is no alternative“ – wirklich?!',
    beschreibung:
      'Die meisten Zukunftsbilder sind aktuell düster, unsere Vorstellungskraft scheint verengt. Speculative Design experimentiert mit fiktiven Zukunftsentwürfen und macht diese in Objekten, Prototypen und Geschichten erlebbar.',
    zielgruppe:
      'Alle, die Zukünfte gestalten wollen. Keine Vorkenntnisse notwendig, Freude am Experimentieren willkommen.',
    dauer: '3–7 Stunden (halber oder ganzer Tag), Präsenz',
    ergebnis: 'Erste Prototypen wünschenswerter Zukünfte und eine neue Art, an Zukunftsgestaltung heranzugehen',
    bild: 'speculative-design.jpg',
    bildAlt: 'Collage zum Format Speculative Design',
  },
  {
    id: 'verliebt-in-die-zukunft',
    kicker: 'Zeitreise in eine lebenswerte Zukunft',
    titel: 'Verliebt in die Zukunft',
    untertitel: 'Imaginationstraining',
    leitfrage: 'Wie können wir uns wieder Zukünfte vorstellen, auf die wir richtig Lust haben?',
    beschreibung:
      'Unsere Vorstellungskraft lässt sich trainieren. Gemeinsam reisen wir in eine nahe Zukunft, die gut ausgegangen ist, und erleben sie mit allen Sinnen. Sie bringen Ideen zurück in die Gegenwart und übersetzen sie in erste Vorhaben für Ihre Organisation.',
    zielgruppe: 'Teams und Organisationen, etwa Verwaltungen, Hochschulen, Unternehmen. Keine Vorkenntnisse nötig.',
    dauer: '1 Tag, Präsenz',
    ergebnis: 'Kreativität, Motivation, Gestaltungsmut',
    bild: 'verliebt-in-die-zukunft.jpg',
    bildAlt: 'Collage zum Format Verliebt in die Zukunft',
  },
  {
    id: 'placemaking',
    kicker: 'Zukunft vor Ort',
    titel: 'Placemaking',
    untertitel: 'Unsere Städte jetzt klimaresilient machen',
    leitfrage: 'Wie gelingt Klimafolgenanpassung in unserer Nachbarschaft?',
    beschreibung:
      'Gute Orte entstehen aus dem Wissen derer, die sie nutzen. Placemaking ist ein partizipativer Ansatz, der öffentliche Räume so gestaltet, dass Wohlbefinden, Begegnungen und Lebensqualität wachsen. In diesem Workshop entwerfen wir Zukunftsbilder für einen konkreten Ort und entwickeln einen Plan: Wie soll dieser Ort mit Hitze, Starkregen und Trockenheit umgehen, und was können wir schon jetzt dafür tun?',
    zielgruppe:
      'Kommunen, Quartiersmanagement, Stadtplaner:innen, Klimaanpassungsmanager:innen, Nachbar:innen',
    dauer: '1 Tag',
    ergebnis: 'Ein gemeinsam getragenes Zukunftsbild für den Ort und eine grobe Roadmap für nächste Schritte.',
    bild: 'placemaking.jpg',
    bildAlt: 'Collage zum Format Placemaking',
  },
  {
    id: 'learning-journeys',
    kicker: 'Lernreisen',
    titel: 'Learning Journeys',
    untertitel: 'Erfahrungen, die einen Unterschied machen',
    leitfrage: 'Wo gelingt Klimafolgenanpassung schon heute, und was können wir davon lernen?',
    beschreibung:
      '„Die Zukunft ist schon da, sie ist nur ungleich verteilt.“ (William Gibson) Manche Probleme lassen sich nicht am Schreibtisch lösen. Auf einer kuratierten Lernreise besuchen Sie Orte, an denen Klimafolgenanpassung bereits gelingt, und sprechen mit den Menschen dahinter. Sie erleben, was möglich ist, und übersetzen das Erlebte in Ihre eigene Kommune oder Organisation.',
    zielgruppe:
      'Kommunen, Verwaltungsteams, Klimaanpassungsmanager:innen und Organisationen, die sich auf Klimafolgen einstellen.',
    dauer: '',
    ergebnis: 'Inspiration, Zuversicht, Gelingensgeschichten, Gestaltungsmut, Netzwerk',
    bild: 'learning-journeys.jpg',
    bildAlt: 'Collage zum Format Learning Journeys',
  },
];

export const massgeschneidert = {
  titel: 'Maßgeschneiderte Trainingsformate',
  absaetze: [
    'Über diese Formate hinaus konzipiere ich individuell zugeschnittene Trainings und Lernreisen, die sich an den spezifischen Fragestellungen, Bedarfen und strategischen Herausforderungen Ihrer Organisation orientieren.',
    'Inhalte, Dauer und Methoden werden passgenau auf Ihren Kontext abgestimmt – von kompakten Einführungen bis hin zu mehrtägigen Vertiefungsformaten.',
  ],
  button: 'Jetzt anfragen',
};
