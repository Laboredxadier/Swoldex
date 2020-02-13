var types = {
    typeless: {
        name: "Typeless",
        weaknesses: ["mind"],
        resistances: [],
        immunities: [],
        color: "#a2a7a8"
    },

    fire: {
        name: "Fire",
        weaknesses: ["water", "earth", "air"],
        resistances: ["fire", "plant", "ice", "metal", "bug"],
        immunities: [],
        color: "#CB0101"
    },

    water: {
        name: "Water",
        weaknesses: ["plant", "electric", "toxic"],
        resistances: ["fire", "water", "ice", "metal"],
        immunities: [],
        color: "#4A88DF"
    },

    plant: {
        name: "Plant",
        weaknesses: ["fire", "ice", "dark", "bug", "toxic"],
        resistances: ["plant", "water", "earth", "electric", "light"],
        immunities: [],
        color: "#68A94F"
    },

    electric: {
        name: "Electric",
        weaknesses: ["water", "earth"],
        resistances: ["electric", "metal", "air"],
        immunities: [],
        color: "#F0C13D"
    },

    ice: {
        name: "Ice",
        weaknesses: ["fire", "metal", "brawler"],
        resistances: ["ice", "air"],
        immunities: [],
        color: "#ABFFFF"
    },

    earth: {
        name: "Earth",
        weaknesses: ["water", "plant", "ice"],
        resistances: ["toxic"],
        immunities: ["electric"],
        color: "#85200C"
    },

    light: {
        name: "Light",
        weaknesses: ["dark", "metal"],
        resistances: ["fire", "light", "ancient"],
        immunities: ["spirit"],
        color: "#FCE69B"
    },

    dark: {
        name: "Dark",
        weaknesses: ["fire", "light", "bug"],
        resistances: ["dark", "mind", "spirit"],
        immunities: [],
        color: "#1E1448"
    },

    bug: {
        name: "Bug",
        weaknesses: ["ice", "air", "brawler"],
        resistances: ["earth", "dark"],
        immunities: [],
        color: "#B6D7A8"
    },

    metal: {
        name: "Metal",
        weaknesses: ["fire", "electric", "earth"],
        resistances: ["air", "bug", "metal", "ancient", "typeless"],
        immunities: [],
        color: "#99ACBD"
    },

    air: {
        name: "Air",
        weaknesses: ["ice", "electric"],
        resistances: ["brawler", "bug"],
        immunities: ["earth"],
        color: "#76A4B1"
    },

    toxic: {
        name: "Toxic",
        weaknesses: ["earth", "mind"],
        resistances: ["toxic", "plant", "brawler"],
        immunities: [],
        color: "#6A4CAE"
    },

    spirit: {
        name: "Spirit",
        weaknesses: ["light", "ancient", "spirit"],
        resistances: ["dark", "toxic"],
        immunities: ["brawler"],
        color: "#C6C6C6"
    },

    mind: {
        name: "Mind",
        weaknesses: ["dark", "bug", "spirit"],
        resistances: ["light", "mind"],
        immunities: [],
        color: "#C17BA0"
    },

    ancient: {
        name: "Ancient",
        weaknesses: ["light", "metal", "ancient"],
        resistances: ["fire", "water", "plant", "spirit", "electric"],
        immunities: [],
        color: "#BB9477"
    },

    brawler: {
        name: "Brawler",
        weaknesses: ["air", "spirit", "mind"],
        resistances: ["bug", "ice"],
        immunities: [],
        color: "#C8441E"
    },
};