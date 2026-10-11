// Angebote für den Abschnitt „Meine Angebote“ (#angebote) der deutschen Startseite.
// `link.href`: '#formate' springt zu den Formaten, '#kontakt' zum Kontaktformular.

export type Angebot = {
  titel: string;
  fuer: string;
  text: string;
  link: { href: string; label: string };
};

export const angeboteHeadline = 'Meine Angebote';

export const angebote: Angebot[] = [
  {
    titel: 'Lehre und Workshops',
    fuer: 'Für Unternehmen, Hochschulen, Verwaltungen und Zivilgesellschaft',
    text: 'Erprobte Formate von der Einführung in die Strategische Vorausschau bis zum Imaginationstraining, dazu maßgeschneiderte Trainings. Online oder in Präsenz.',
    link: { href: '#formate', label: 'Zu den Formaten' },
  },
  {
    titel: 'Moderation und Facilitation',
    fuer: 'Für Strategieprozesse, Beteiligungsformate und Klausuren',
    text: 'Ich führe Gruppen durch offene Zukunftsfragen: Mit klarer Struktur, methodischer Sicherheit und Raum für das, was schwierig ist. Von der Tagesklausur bis zum mehrstufigen Foresight-Prozess.',
    link: { href: '#kontakt', label: 'Moderation anfragen' },
  },
  {
    titel: 'Impulse und Keynotes',
    fuer: 'Für Konferenzen, Führungskreise und Festivals',
    text: 'Vorträge an der Schnittstelle von Zukunftsforschung, Psychologie und Klimaresilienz: Was auf uns zukommt, wie wir nicht erstarren, sondern handlungsfähig und gestaltungsfreudig bleiben. Auf Deutsch oder Englisch.',
    link: { href: '#kontakt', label: 'Keynote anfragen' },
  },
  {
    titel: 'Konzeptentwicklung',
    fuer: 'Für Foresight-Prozesse, Forschungsvorhaben und Lernformate',
    text: 'Ich entwickle mit Ihnen das Design für Ihr Vorhaben: Eingrenzung der Fragestellung (Scoping), Methodenauswahl, Stakeholdermapping, Ablauf, Ergebnis und Transfer.',
    link: { href: '#kontakt', label: 'Projekt anfragen' },
  },
];
