import React from 'react';
import Places from './Places/Places';
// import './Images'
// import './public/Images';

function App() {
  return (
      <main>
      <h1 style={{textAlign: "center"}}>Travel Journal</h1>
      <Places location="New Zealand" place="Hobbiton, Waikato" description="Hobbit holes in New Zealand are a unique and enchanting feature that have gained worldwide recognition since the filming of the Lord of the Rings and Hobbit trilogies. These iconic structures are modeled after the homes of the hobbits, the diminutive creatures of Middle-earth, and were built into the lush, green hillsides of the Hobbiton movie set in Matamata. Each hole is adorned with charming details, such as brightly painted round doors, wooden shutters, and blooming gardens." tag="International" image="Images/hobbitNZ.jpeg"/>
      <Places location="Japan" place="Tokyo" description="Japan's cherry blossoms, or sakura in Japanese, are a beloved and iconic symbol of the country's culture and natural beauty. Every spring, usually in late March to early April, these delicate pink and white flowers bloom across Japan's parks, temples, and streets, attracting millions of visitors from around the world. Locals and tourists alike gather under the blooming trees for picnics, parties, and contemplation, admiring the fleeting beauty and symbolic significance of the sakura's short-lived bloom." tag="International" image="Images/cherriesJP.jpeg"/>
      <Places location="Australia" place="Sydney" description="The Sydney Opera House is a world-famous performing arts center located in Sydney, Australia. Designed by Danish architect Jorn Utzon, the iconic building opened in 1973 and is now a UNESCO World Heritage Site. The Opera House's distinctive sail-shaped roof and prime location on Sydney Harbour make it a symbol of Australia's modern and cosmopolitan culture. It hosts a variety of performing arts events, including opera, ballet, theater, and live music, attracting millions of visitors each year." tag="" image="/Images/SydneyAZ.jpeg"/>
      <Places location="AustrAlaskaalia" place="Denali Park" description="Hobbit holes in New Zealand are a unique and enchanting feature that have gained worldwide recognition since the filming of the Lord of the Rings and Hobbit trilogies. These iconic structures are modeled after the homes of the hobbits, the diminutive creatures of Middle-earth, and were built into the lush, green hillsides of the Hobbiton movie set in Matamata. Each hole is adorned with charming details, such as brightly painted round doors, wooden shutters, and blooming gardens." tag="" image="Images/DenaliAlaskaUS.jpeg"/>
      </main>
  );
}

export default App;

