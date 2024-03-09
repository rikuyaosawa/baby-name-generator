export function getRandomBoyName() {
  return boyName[Math.floor(Math.random() * boyName.length)];
};

export function getRandomGirlName() {
  return girlName[Math.floor(Math.random() * girlName.length)];
};

const boyName = [
  {
    name : "Ronan",
    meaning : "A promising oath",
    nickname : "Nan/Rory",
    origin : "Person (Gaelic Ó Rónáin)",
    variation : "O'Ronan"
  }, 
  {
    name : "Aiden/Ayden",
    meaning : "Little fire",
    nickname : "Ady/Adi",
    origin : "Irish",
    variation : "Edan (Hebrew)"
  },
  {
    name : "Arthur",
    meaning : "Bear/Strong man",
    nickname : "Archie/Art/Artie",
    origin : "Celtic/Latin/Welsh",
    variation : "Arthurus"
  },
  {
    name : "Gavin",
    meaning : "God send/Falcom",
    origin : "Scotish",
    variation : "Gawain"
  },
];

const girlName = [
  {
    name : "Sasha",
    meaning : "Defender/Helper of mankind",
    nickname : "Sash/Sass",
    origin : "Slavic/Russian",
    variation : "Sacha (French) /Sascia (Italian)"
  }, 
  {
    name : "Mila",
    meaning : "Miracle/Dear one/Gracious",
    nickname : "...",
    origin : "Spanish/Slavic",
    variation : "Milana/Milena"
  }, 
  {
    name : "Lillian",
    meaning : "Lily/Purity",
    nickname : "Ann/Lil/Lily",
    origin : "Latin",
    variation : "Liliana/Lillie"
  }, 
  {
    name : "Natalie",
    meaning : "Birth of the Lord",
    nickname : "Nat/Talie/Allie",
    origin : "Latin/Christian",
    variation : "Nathalie/Natali"
  }, 
];