export function getRandomBoyName() {
  return boyName[Math.floor(Math.random() * boyName.length)];
};

export function getRandomGirlName() {
  return girlName[Math.floor(Math.random() * girlName.length)];
};

export function getRandomGirlMiddleName() {
  return girlMiddleName[Math.floor(Math.random() * girlMiddleName.length)];
}

export function getRandomBoyMiddleName() {
  return boyMiddleName[Math.floor(Math.random() * boyMiddleName.length)];
}

const boyName = [
  {
    name : "Ronan",
    meaning : "A promising oath",
    nickname : "Nan/Rory",
    origin : "Person (Gaelic Ó Rónáin)",
    variation : "O'Ronan"
  }, 
  {
    name : "Ayden",
    meaning : "Little fire",
    nickname : "Ady/Adi",
    origin : "Irish",
    variation : "Aidan/Edan (Hebrew)"
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
    nickname : "Gav/Vinny/Avi",
    variation : "Gawain"
  },
  {
    name : "Ernest",
    meaning : "Serious/Determined",
    origin : "German",
    nickname : "Ernie/Ern",
    variation : "..."
  },
  {
    name : "Andrew",
    meaning : "Strong/Manly",
    origin : "Greek",
    nickname : "Andy/Drew",
    variation : "Anderson/Andrei"
  },
  {
    name : "William",
    meaning : "Resolute Protector",
    origin : "German (Wilhelm)",
    nickname : "Bill/Willem/Willy",
    variation : "Liam/Will"
  },
  {
    name : "Kevin",
    meaning : "Handsome",
    origin : "Irish",
    nickname : "Kev/Vinny",
    variation : "Kevan" 
  }
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

const girlMiddleName = [
  {
    name : "Grace",
    meaning : "Gracuful"
  },
  {
    name : "Estelle",
    meaning : "Stars"
  },
  {
    name : "Lillian",
    meaning : ""
  }
];

const boyMiddleName = [
  {
    name : "William",

  },
  {
    name : "Paul",

  },
  {
    name : "Lancelot"
  }
];