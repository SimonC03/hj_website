# Guide: redigera innehåll på hemsidan

Den här guiden är för dig som vill uppdatera hemsidans innehåll utan att arbeta med design eller kodlogik.

Det mesta som behöver ändras ligger i två mappar:

- `app/data` innehåller texter, länkar, priser, anställda och kontaktuppgifter.
- `public` innehåller bilder, logotyper och PDF-filer.

Ändra i första hand bara dessa mappar.

## Viktigt innan du börjar

Filerna i `app/data` är textfiler. De ser tekniska ut, men innehållet är uppbyggt som listor med fält.

Några regler:

- Ändra texten innanför citattecken, till exempel `"Kontakta oss"`.
- Ta inte bort citationstecken, kommatecken eller klamrar.
- Om du lägger till en ny rad i en lista ska den oftast sluta med komma.
- Bildvägar börjar ofta med `/`, till exempel `/people/anna-andersson.png`.
- Filnamn i `public` bör använda små bokstäver, bindestreck och inga svenska tecken.

Bra filnamn:

```txt
anna-andersson.png
ny-partner-logo.png
team-bild.jpg
```

Undvik:

```txt
Anna Andersson ny bild.png
ÅÄÖ bild 1.jpg
```

## Byta kontaktuppgifter

Öppna:

```txt
app/data/site.ts
```

Leta efter:

```ts
export const firm = {
  name: "HandelsJuristerna",
  displayName: "HandelsJuristerna",
  url: "https://handelsjuristerna.se",
  email: "info@handelsjuristerna.se",
  phone: "031-20 27 20",
  address: "Viktoriagatan 9, 411 25 Göteborg",
};
```

Ändra e-post, telefon eller adress där. Detta används på flera ställen på sidan.

## Redigera startsidan

Öppna:

```txt
app/data/site.ts
```

Leta efter:

```ts
export const homePage = {
```

Där finns startsidans sektioner:

- `hero`: stor rubrik och ingress överst på sidan.
- `clients`: text för kundloggor.
- `about`: text och bild för “Om oss”-blocket.
- `expertise`: rubrik och text för expertisområden.
- `contact`: kontaktblocket längst ner.

Exempel:

```ts
hero: {
  titleLines: ["Sveriges största", "studentdrivna juristbyrå"],
  preambleBeforeBreak:
    "HandelsJuristerna är en juristbyrå driven av juriststudenter från Handelshögskolan vid Göteborgs universitet",
  preambleAfterBreak:
    "Vi gör juridiken lättillgänglig för företag och privatpersoner.",
}
```

Vill du ändra rubriken byter du texten i `titleLines`.

## Ändra siffrorna i startsidans hero

Öppna:

```txt
app/data/site.ts
```

Leta efter:

```ts
export const heroStats = [
```

Exempel:

```ts
{ label: "Medarbetare", value: 26 },
{ label: "År i branschen", value: 13 },
```

Ändra `label` för texten och `value` för siffran.

## Redigera expertisområden

Öppna:

```txt
app/data/site.ts
```

Leta efter:

```ts
export const practiceAreas = [
```

Varje område ser ut ungefär så här:

```ts
{
  title: "Bolagsrätt",
  description:
    "Löpande rådgivning till ägare, styrelser och ledningsgrupper i frågor som påverkar bolagets styrning och värde.",
  tags: ["Ägarfrågor", "Styrelsearbete", "Kapital"],
},
```

Du kan ändra:

- `title`: rubriken.
- `description`: beskrivningen.
- `tags`: nyckelord. Dessa används bara om designen visar taggar.

För att lägga till ett nytt område kopierar du ett helt block och ändrar texten.

## Ändra erbjudanden och priser

Öppna:

```txt
app/data/pricing.ts
```

Där finns två viktiga delar:

- `pricingCategories`: kategorierna i prislistan.
- `pricingServices`: alla tjänster/erbjudanden.

Ett erbjudande ser ut så här:

```ts
{
  title: "Samboavtal",
  price: "från 2 999 SEK",
  category: "family",
  summary:
    "Ett tydligt samboavtal anpassat efter er situation och de tillgångar avtalet ska reglera.",
  includes: [
    "Inledande genomgång",
    "Löpande kontakt",
    "Rättslig bedömning",
    "Upprättande av samboavtal",
    "Avslutande genomgång",
  ],
},
```

Du kan ändra:

- `title`: tjänstens namn.
- `price`: priset som visas.
- `category`: vilken kategori tjänsten ligger under.
- `summary`: kort beskrivning.
- `includes`: punkterna som visas när tjänsten öppnas.
- `note`: extra notering, om det finns.

Kategorierna som går att använda är:

```txt
family
housing
business
disputes
```

Exempel på att ändra pris:

```ts
price: "från 3 499 SEK",
```

Exempel på att lägga till en punkt:

```ts
includes: [
  "Inledande möte",
  "Genomgång av underlag",
  "Juridisk bedömning",
],
```

## Byta anställda

Öppna:

```txt
app/data/people.ts
```

Där finns två grupper:

- `leadership`: ledningsgrupp.
- `consultants`: konsulter.

En person ser ut så här:

```ts
{
  name: "Adam Svensson",
  title: "Key Account Manager",
  email: "adam.svensson@handelsjuristerna.se",
  phone: "0723 – 96 48 44",
  profileImage: "/people/adam-svensson.png",
},
```

Du kan ändra:

- `name`: namn.
- `title`: roll.
- `email`: e-postadress.
- `phone`: telefonnummer.
- `profileImage`: bildfil i `public/people`.

### Lägg till en ny anställd

1. Lägg personens bild i:

```txt
public/people
```

2. Ge bilden ett enkelt filnamn, till exempel:

```txt
anna-andersson.png
```

3. Kopiera ett personblock i `app/data/people.ts`.

4. Klistra in det i rätt grupp.

5. Ändra namn, roll, e-post, telefon och bildväg:

```ts
{
  name: "Anna Andersson",
  title: "Juridisk konsult",
  email: "anna.andersson@handelsjuristerna.se",
  phone: "0700 – 00 00 00",
  profileImage: "/people/anna-andersson.png",
},
```

### Ta bort en anställd

Ta bort hela personens block, inklusive klamrarna:

```ts
{
  name: "Anna Andersson",
  title: "Juridisk konsult",
  email: "anna.andersson@handelsjuristerna.se",
  phone: "0700 – 00 00 00",
  profileImage: "/people/anna-andersson.png",
},
```

Om personen inte längre ska visas kan bildfilen också tas bort från `public/people`.

### Redigera profilsidan för en anställd

Vissa personer kan ha extra information:

```ts
languages: ["Svenska", "Engelska"],
education: ["Juristexamen, Stockholms universitet"],
specialAreas: ["Kommersiell avtalsrätt", "Bolagsrätt"],
linkedinUrl: "https://www.linkedin.com/in/namn",
```

Om dessa fält saknas visas ingen extra information, eller ett streck där sidan behöver ett värde.

## Redigera styrelsen

Öppna:

```txt
app/data/board.ts
```

En styrelsemedlem ser ut så här:

```ts
{
  name: "Christoffer Thorell",
  role: "Styrelseordförande",
  description:
    "Christoffer är tidigare VD på HandelsJuristerna och han läser nu sin sista termin på juristprogrammet.",
},
```

Ändra `name`, `role` och `description`.

## Redigera footer, sociala medier och partners

Öppna:

```txt
app/data/site.ts
```

### Sociala medier

Leta efter:

```ts
export const socialLinks = {
```

Ändra länkarna där.

### Partners

Leta efter:

```ts
export const partners = [
```

En partner ser ut så här:

```ts
{
  name: "CMS Wistrand",
  logo: "/partners/CMS_W.png",
  href: "https://cms.law/en/swe/",
  width: 728,
  height: 83,
},
```

För att byta partnerlogga:

1. Lägg den nya loggan i:

```txt
public/partners
```

2. Ändra `logo` till den nya filen:

```ts
logo: "/partners/ny-partner.png",
```

3. Ändra `href` om länken ska gå till en annan webbplats.

## Byta kundloggor

Kundloggorna i den rullande raden på startsidan ligger i:

```txt
public/clients
```

Listan redigeras i:

```txt
app/data/site.ts
```

Leta efter:

```ts
export const clientLogos = [
```

Exempel:

```ts
{
  name: "MKB",
  alt: "MKBs logotyp",
  src: "/clients/mkb.png",
  width: 300,
},
```

Ändra:

- `name`: internt namn.
- `alt`: bildbeskrivning för tillgänglighet.
- `src`: filväg till loggan.
- `width`: ungefärlig bredd på loggan.

## Byta bilder

Alla bilder ligger i `public`.

Vanliga mappar:

```txt
public/images
public/logos
public/people
public/partners
public/clients
```

Bildvalen för de stora sektionerna finns i:

```txt
app/data/site.ts
```

Leta efter:

```ts
export const siteAssets = {
```

Exempel:

```ts
images: {
  homeHeroVideo: "/images/AdobeStock_177928586.mov",
  aboutTeam: "/images/about-team.jpg",
  careerCallout: "/images/AdobeStock_310976337.jpeg",
},
```

För att byta “Om oss”-bild:

1. Lägg ny bild i `public/images`, till exempel:

```txt
public/images/ny-om-oss-bild.jpg
```

2. Ändra:

```ts
aboutTeam: "/images/ny-om-oss-bild.jpg",
```

## Redigera SEO-texter

SEO-texter är rubriker och beskrivningar som visas i Google och sociala medier.

De ligger i:

```txt
app/data/site.ts
```

Varje sida har ett `metadata`-block, till exempel:

```ts
metadata: {
  title: "Kontakta juristbyrån",
  description:
    "Kontakta HandelsJuristerna för juridisk rådgivning i Göteborg.",
  path: "/kontakt",
  keywords: ["kontakta juristbyrå", "juridisk rådgivning Göteborg"],
},
```

Ändra:

- `title`: sidans SEO-titel.
- `description`: sidans SEO-beskrivning.
- `keywords`: sökord.

Ändra inte `path` om du inte vet att sidans webbadress också ska ändras.

## Redigera karriärsidan

Öppna:

```txt
app/data/site.ts
```

Leta efter:

```ts
export const careerPage = {
```

Där kan du ändra:

- rubriken i hero.
- brödtexter.
- rollbeskrivningar.
- krav.
- meriter.
- ansökningsmail.
- checklistan för ansökan.
- bilden på sidan.

Exempel på att byta ansökningsmail:

```ts
applicationEmail: "rekrytering@handelsjuristerna.se",
```

## Redigera kontaktformuläret

Öppna:

```txt
app/data/site.ts
```

Leta efter:

```ts
export const contactFormContent = {
```

Där kan du ändra:

- etiketter på fält.
- placeholdertext.
- text för allmänna villkor.
- knapptext.
- felmeddelanden.
- texten som skickas i e-postmeddelandet.

Ändra helst inte `fieldNames` om du inte också vet hur formulärmottagningen fungerar.

## Efter att du ändrat

Kontrollera sidan lokalt eller be någon teknisk person köra:

```bash
npm run lint
npm run build
```

Om båda fungerar är innehållet tekniskt korrekt.

## Snabb översikt

| Vad vill du ändra? | Fil eller mapp |
| --- | --- |
| Kontaktuppgifter | `app/data/site.ts` |
| Startsidan | `app/data/site.ts` |
| Expertisområden | `app/data/site.ts` |
| Priser och erbjudanden | `app/data/pricing.ts` |
| Anställda | `app/data/people.ts` |
| Styrelse | `app/data/board.ts` |
| Footer | `app/data/site.ts` |
| Sociala medier | `app/data/site.ts` |
| Partners | `app/data/site.ts` och `public/partners` |
| Kundloggor | `app/data/site.ts` och `public/clients` |
| Personbilder | `public/people` |
| Övriga bilder | `public/images` |
| Logotyper | `public/logos` |
| Allmänna villkor | `public/Allmanna-villkor-HandelsJuristerna.pdf` |
