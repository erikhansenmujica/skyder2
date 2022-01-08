export interface Content {
  selector: {
    default: string;
    option1: string;
    option2: string;
  };
  subtitle: string;
  credits: string;
  audio: {
    firstBlock: string;
    secondBlock: string;
    offers: {
      first: string;
      second: string;
      third: string;
    };
    historicProjects: string;
  };
  contact: string;
}

export interface ContentLanguage {
  [english: string]: Content;
  spanish: Content;
}

export const contentLanguage: ContentLanguage = {
  english: {
    selector: {
      default: "LANGUAGE",
      option1: "SPANISH",
      option2: "ENGLISH",
    },
    subtitle: "PRODUCTIONS",
    credits: "Made by Erik Hansen",
    audio: {
      firstBlock: "GIVING THE QUALITY YOUR PROYECTS DESERVE",
      secondBlock:
        "We offer mastering and mixing services so that your music be at the level of the great labels",
      offers: {
        first: "Vocals production 40€",
        second: "Mixing and mastering by stems 147€",
        third: "Contact for personalized jobs",
      },
      historicProjects: "Listen to our previous projects",
    },
    contact: "Contact us: ",
  },
  spanish: {
    selector: {
      default: "IDIOMA",
      option1: "ESPAÑOL",
      option2: "INGLÉS",
    },
    subtitle: "PRODUCCIONES",
    credits: "Hecho por Erik Hansen",
    audio: {
      firstBlock: "DALE A TUS PROYECTOS LA CALIDAD QUE SE MERECEN",
      secondBlock:
        "Realizamos mezla y mastering para que tu música esté a la altura de los grandes sellos.",
      offers: {
        first: "Producción vocal 40€",
        second: "Mezcla y mastering por stems 147€",
        third: "Consulta por trabajos personalizados",
      },
      historicProjects: "Escucha nuestros trabajos realizados",
    },
    contact: "Contactanos: ",
  },
};
