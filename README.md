# Skolekantine – Nettside med Firebase

## 📌 Introduksjon
Dette prosjektet er en funksjonell og responsiv nettside for en skolekantine. Nettsiden viser varer med pris og innhold, og henter data i sanntid fra Firebase. Løsningen er laget med fokus på brukervennlighet, responsivt webdesign og universell utforming (UU).

Prosjektet er utviklet som en skoleoppgave i 2ITA vg2.

---

## 🎯 Funksjonalitet

### Forside (Hjem)
- Kort presentasjon av skolekantinen
- Fokus på sunn mat, rimelige priser og bærekraft
- Dagens meny / ukens favoritt
- Nyheter og beskjeder:
  - «Vegetardag i dag»
  - «Nytt produkt tilgjengelig»

### Varer
- Liste over varer med:
  - Navn
  - Innhold / forklaring
  - Pris
- Varene hentes i sanntid fra Firebase Firestore

### Om oss
- Hvem som driver kantinen
- Våre mål og verdier
- Samarbeid med skolen
- Åpningstider
- Betalingsmetoder

### Kontakt
- Hvor kantinen ligger på skolen
- E-postadresse
- Kontaktperson

### Logg inn (ansatt)
- Skjult side for ansatte
- Innlogging med Firebase Authentication
- Ansatte kan:
  - Legge til nye varer
  - Oppdatere priser og innhold
  - Redigere ukemeny
- Endringer vises automatisk på nettsiden

---

## 🛠️ Teknologier brukt
- **HTML5** – Struktur og semantisk oppbygging
- **CSS3** – Design, layout og responsivitet
- **JavaScript** – Dynamisk innhold og Firebase-integrasjon
- **Firebase**
  - Firestore Database
  - Authentication
- **Google Fonts**
- **Google Icons**

---

## ♿ Universell utforming (UU)
Nettsiden er utviklet i tråd med prinsipper for universell utforming:

- Semantisk HTML (`header`, `nav`, `main`, `section`, `footer`)
- God kontrast mellom tekst og bakgrunn
- Responsivt design for mobil, nettbrett og PC
- Lesbare fonter fra Google Fonts
- Alt-tekst på bilder
- Tydelige knapper og lenker
- Enkel navigasjon og ryddig struktur
- Kan brukes med tastatur

## 🔥 Firebase-struktur

### Firestore – Samling: `varer`
Hver vare inneholder:
- `navn` (string)
- `innhold` (string)
- `antall gram` (number)
- `pris` (number)

Dataene hentes, vises og oppdateres dynamisk på nettsiden.

## ✅ Status

Prosjektet oppfyller kravene til:

- Teknisk implementering

- Design og brukeropplevelse

- Universell utforming

- Dokumentasjon

- Generell ytelse og funksjonalitet
