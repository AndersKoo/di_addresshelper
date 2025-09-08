# DI Address Helper

En React-applikasjon for å søke etter norske gatenavn ved hjelp av DI.no's Address Helper API.

## Tankegang

Appen er satt opp med vite for raskt oppsett ifm med f.eks en caseoppgave som denne.

Komponentene i denne appen har blitt delt opp i flere små, slik at det er lettere å utvide i etterkant. Alle komponentene under ui-mappen har tilhørende css filer som gjør det lett og effektivt å endre / legge til egenskaper.

I layout-mappen setter vi sammen komponentene i ui som utgjør selve grensesnittet som brukeren ser.

Context api og hooks er brukt for både global og lokal tilgjengelighet der det måtte være nødvendig.

Om dette hadde vært en større og mer omfattende applikasjon, kunne det vurderes å bruke SSR teknologi som Next.js. Her kan du bruke suspension og hydrering for å tillate en kombinasjon av statisk og dynamisk(interaktivt) innhold. På denne måten vil bruker oppleve siden som rask, da statisk innhold allerede er generert på serveren(web-byggeren) og serveres direkte til nettleser(klienten).

Her brukes CSR. Dvs at stiler og funksjonalitet kompileres av vite og genereres i nettleser. Assets mappen innholder komprimerte versjoner av kildekoden.

## Funksjonalitet

- Søk etter norske gatenavn
- Vis søkeresultater med gateinformasjon
- Responsivt brukergrensesnitt
- TypeScript for type-sikkerhet

## Teknisk Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: CSS Modules
- **HTTP Client**: Axios
- **Testing**: Vitest + Testing Library
- **Linting**: ESLint

## Installasjon

1. Klon repositoriet
2. Installer avhengigheter:

   ```bash
   npm install
   ```

3. Opprett `.env` fil i prosjektroten:
   ```
   VITE_API_KEY=din_api_nøkkel_her
   ```

## Utvikling

Start utviklingsserveren:

```bash
npm run dev
```

Bygg for produksjon:

```bash
npm run build
```

Kjør tester:

```bash
npm test
```

## Prosjektstruktur

```
src/
├── api/                 # API-integrasjon
├── layout/              # Hovedlayout
├── ui/                  # UI-komponenter
│   ├── button/
│   ├── container/
│   ├── inputfield/
│   ├── searchform/
│   ├── searchresults/
│   ├── status/
│   └── streetItem/
├── utils/               # Hjelpefunksjoner
│   ├── context/         # React Context
│   ├── search/          # Søkelogikk
│   └── validation/      # Validering
└── test/                # Test-oppsett
```

## API

Applikasjonen bruker DI.no's Address Helper API for å søke etter gatenavn:

- Base URL: `https://staging-ws.di.no/ws/json/addressHelper/v-2/NO/streetSearch`
- Krever API-nøkkel for autentisering

## Lisens

Privat prosjekt.
