### **Introductie**
Voor dit project heb ik een interactieve homepagina gemaakt van PostNL met focus op responsiveness en leuke animaties.

Hoe tonen we informatie over Postnl op een leuke mobielvriendelijk manier en  ook desktop.

### Beschrijving
**Responsive deign**
Elementen staan onder elkaar en de informatie cards staan in een carousel om makkelijk er doorheen te scrollen/swipen.
Op desktop verandert deze naar 3 kaarten naast elkaar om alles in een keer te kunnen zien.

### Toegankelijkheid
Keyboard Navigatie: De site is bedienbaar met de Tab-toets. Focus-states zijn zichtbaar gemaakt met een blauwe outline.

Reduced Motion: Voor gebruikers die gevoelig zijn voor beweging, worden alle animaties uitgeschakeld via de prefers-reduced-motion media query.

Screenreader: Gebruikers die slecht van zicht zijn kunnen door de hele pagina heen luisteren.

### Interactie

Horizontal Scroll Carousel: Maakt gebruik van scroll-snap-type. Gebruikers krijgen feedforward doordat de volgende kaart gedeeltelijk in beeld is (Wet van Continuïteit).

Click-and-Scale Animatie: Wanneer een gebruiker op een mini-card link klikt, schaalt de gehele kaart (inclusief afbeelding) @keyframes animatie. (Leuke easter egg die eigenlijk geen functie heeft.)

Animatie principe: Gebruik van Anticipation en Squash and Stretch (door de scale-up en scale-down) om de interactie bouncy te maken.

### Kenmerken
De code is zoveel mogelijk genest.

HTML: Semantische structuur met `<section>`, `<article>` en duidelijke kop-hiërarchie (h1 t/m h3).

CSS: Flexbox Grid voor layout, CSS Variables voor kleuren, en Custom Keyframes voor micro-interacties.

JavaScript: * Gebruik van querySelectorAll en forEach om meerdere elementen te animeren.

Event listeners voor mousedown en animationend voor gekke animaties.

e.preventDefault() om ongewenste page-refreshes te voorkomen!



https://github.com/user-attachments/assets/dc8ae972-f493-40d6-a5d2-a3e371480093


https://github.com/user-attachments/assets/91a965b6-5565-4489-bfd9-c7e22741038a



https://github.com/user-attachments/assets/c090d299-4004-42de-819a-bb20e48fbf87





## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).


