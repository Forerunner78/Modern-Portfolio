import Jungle from "./../../img/Jungle.jpg";
import Books from "./../../img/Books2.jpg";
import Hotel from "./../../img/Hotel.jpg";
import Marvel from "./../../img/Marvel.jpg";
import News from "./../../img/News.jpg";
import Shiny from "./../../img/Shiny.jpg";
import Portfolio from "./../../img/Portfolio.jpg";
import WorkInProgress from "./../../img/WorkInProgress.jpg";

export const projects = {
    collaborations: [
        {
            name: "L'Oréal",
            time: "2 ans et 7 mois",
            projects: [
                "Biotherm",
                "Decleor",
                "Dermacenter",
                "GiorgioArmani",
                "House99",
                "Helena_Rubinstein",
                "Itcosmetics",
                "Kerastase",
                "Kiehls",
                "Lancome",
                "LaRochePosay",
                "Mugler",
                "Nyx",
                "Skinceuticals",
                "Staffshop",
                "Urban_Decay",
                "Valentino",
                "Vichy",
                "Yves_Saint_Laurent",
            ],
            position: "Developpeur Web Back-end chez Capgemini",
            company: "L'Oréal",
            companyLink: "https://www.loreal.com/fr/",
            address: "Paris",
            work: "Prise en charge de bugs liés au code / à la contribution du Business Manager.. Résolution de bugs 'critiques'.. Implémentation, activation et amélioration du fonctionnement de nouvelles features (programme fidélité et commandes récurrentes).. Implication dans la de revue de code et de documentation.. Rédaction de documents techniques pour présenter des fonctionalités / services mis en place.",
        },
        {
            name: "Orchestra",
            time: "7 mois",
            projects: ["Orchestra"],
            position: "Developpeur Web Back-end chez Capgemini",
            company: "Orchestra",
            companyLink: "https://fr.shop-orchestra.com/",
            address: "Paris",
            work: "Refonte des filtres du site internet au moyen de javascript orienté objet.. Résolution de bugs.. Manipulation de custom / system objects.",
        },
        {
            name: "FastRetailing",
            time: "7 mois",
            projects: ["Comptoir_des_Cotonniers", "Princess_Tam_Tam"],
            position: "Developpeur Web full-Stack chez Capgemini",
            company: "FastRetailing",
            companyLink: "https://www.fastretailing.com/eng/",
            address: "Paris",
            work: "Implémentation des services 'Google Autocomplete address form' et 'Vimeo'.. Refonte graphique complète des footers des sites 'Princesse Tam-Tam' et 'Comptoir des Cotonniers'.",
        },
    ],
    personnalProjects: [
        {
            name: "Alex Shop - Site ecommerce",
            img: WorkInProgress,
            live_demo_url: "https://alex-shop-blue.vercel.app/",
            gitHub_url: "https://github.com/Forerunner78/alex-shop",
            technologies: ["#nextJS", "#mongoDB", "#paypal"],
            colSize: 12,
            summary:
                "Site web ecommerce construit en utilisant la technologie MERN (mongoDB, Express, React et Node.js). Les données sont stockées sur mongoDB. Il permet de simuler des achats au moyen de Paypal. En outre il possède un système d'authentification.",
        },
        {
            name: "Site web Portfolio",
            img: Portfolio,
            live_demo_url: "https://react-search-books-96687.firebaseapp.com/",
            gitHub_url: "https://github.com/Forerunner78/React-Books",
            technologies: ["#nextJS", "#tailwindcss", "#framer-motion"],
            colSize: 6,
            summary:
                "Site web portfolio responsive créé en utilisant NextJS, framer-motion et TailwindCSS. Il possède des animations et des transitions. Il répertorie tous les projets que j'ai créés.",
        },
        {
            name: "Application de recherche de livres",
            img: Books,
            live_demo_url: "https://react-search-books-96687.firebaseapp.com/",
            gitHub_url: "https://github.com/Forerunner78/React-Books",
            technologies: ["#ReactJS", "#Redux", "#Bootstrap"],
            colSize: 6,
            summary:
                "Application créée en ReactJS. Elle permet de faire des recherches de livres en utilisant l'API Google et stocker ceux que l'on souhaite dans notre liste.",
        },
        {
            name: "Shiny Agency",
            img: Shiny,
            live_demo_url: "https://react-shiny-agency.firebaseapp.com/",
            gitHub_url: "https://github.com/Forerunner78/React-Shiny-Agency",
            technologies: ["#ReactJS", "#Javascript", "#CSS3"],
            colSize: 6,
            summary:
                "Template d'un site d'agence créé avec ReactJS. Il possède un dark mode et suggère des profils de développeur en fonction des besoins identifiés au moyen d'un test",
        },
        {
            name: "La Maison Jungle",
            img: Jungle,
            live_demo_url: "https://forerunner78.github.io/React-La-Maison-Jungle/",
            gitHub_url: "https://github.com/Forerunner78/React-La-Maison-Jungle",
            technologies: ["#React Js", "#HTML5", "#CSS3"],
            colSize: 6,
            summary:
                "Template front-end d'un site e-commerce créé en React. Il permet de manipuler des données, les ajouter ou les retirer de son panier",
        },
        {
            name: "Application Marvel Quiz",
            img: Marvel,
            live_demo_url: "https://marvel-quiz-51916.firebaseapp.com/",
            gitHub_url: "https://github.com/Forerunner78/React-Marvel-Quizz",
            technologies: ["#React Js", "#Firebase", "#Axios"],
            colSize: 12,
            summary:
                "Application de Quizz créée en ReactJS. Elle fait appelle à de nombreuses dépendances. Firebase a également été utilisé pour gérer l'authentification des utilisateurs, la gestion des profils et mots de passe",
        },
        {
            name: "News Website",
            img: News,
            live_demo_url: "https://forerunner78.github.io/Journal-website/",
            gitHub_url: "https://github.com/Forerunner78/Journal-website",
            technologies: ["#HTML5", "#CSS3"],
            colSize: 6,
            summary: "Template front-end d'un site web d'informations créé en HTML",
        },
        {
            name: "Hotel Website",
            img: Hotel,
            live_demo_url: "https://forerunner78.github.io/Hotel/index.html",
            gitHub_url: "https://github.com/Forerunner78/Hotel",
            technologies: ["#HTML5", "#CSS3"],
            colSize: 6,
            summary: "Template front-end d'un site web d'hotel créé en HTML",
        },
    ],
};
