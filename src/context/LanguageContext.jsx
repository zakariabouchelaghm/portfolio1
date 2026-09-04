import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    // Hero
    tagline: "Building the future with Intelligence.",

    // Bio
    aboutMe: "About Me",
    bioText: (
      <>
        I hold a <strong>Master's degree in Fundamental Computer Science and Artificial Intelligence</strong>.
        My passion lies in bridging the gap between theoretical AI research and practical, scalable applications.
        With a deep understanding of algorithms and data structures, I specialize in building intelligent systems that solve real-world problems.
      </>
    ),
    bioTextRaw: `I hold a Master's degree in Fundamental Computer Science and Artificial Intelligence. My passion lies in bridging the gap between theoretical AI research and practical, scalable applications. With a deep understanding of algorithms and data structures, I specialize in building intelligent systems that solve real-world problems.`,

    // Skills
    skillsTitle: "Skills & Tools",
    technicalSkills: "Technical Skills",
    languages: "Languages",
    toolsFrameworks: "Tools & Frameworks",

    // Education
    educationTitle: "Education",
    relevantCoursework: "Relevant Coursework:",

    // Experience
    experienceTitle: "Experience & Certifications",

    // Projects
    featuredProjects: "Featured Projects",
    relatedProjects: "Related Projects",
    viewDetails: "View Details →",
    viewProject: "View Project →",

    // Awards
    awardsTitle: "Notable Awards",

    // Footer
    allRightsReserved: "All rights reserved.",

    // Education data
    education: [
      {
        id: 1,
        degree: "Master's Degree in Fundamental Computer Science and Artificial Intelligence",
        school: "Ferhat Abbas 1 University, Setif",
        year: "2022 - 2025",
        coursework: "Data Analysis, Machine Learning, Deep Learning, Operational Research, Algorithms and Programming languages, Fundamental Computer Science."
      },
      {
        id: 2,
        degree: "Preparatory Cycle",
        school: "Higher School of Computer Science May 8, 1945, Sidi Bel-Abbes",
        year: "2018 - 2020",
        coursework: "Algorithms, Mathematics, Computer Architectures."
      }
    ],

    // Experience data
    experience: [
      {
        id: 1,
        role: "Python Essentials",
        company: "Skills Center Algeria Telecom, Setif, Algeria",
        year: "2025",
        description: "Completed Python Essentials training."
      },
      {
        id: 2,
        role: "Vice Campus Director",
        company: "Hult Prize - ESI-SBA",
        year: "2020",
        description: "Served as Vice Campus Director, organizing and managing the Hult Prize event at ESI-SBA."
      },
      {
        id: 3,
        role: "Delegate",
        company: "AIESEC Algeria - Salama Discover Algeria",
        year: "2020",
        description: "Participated as a Delegate in the Salama Discover Algeria project by AIESEC."
      }
    ],

    // Awards data
    awards: [
      {
        id: 1,
        title: "First Place - Google Hashcode",
        issuer: "ESI-SBA",
        year: "2021",
        description: "Ranked 1st among participating teams at the Ecole Supérieure en Informatique de Sidi Bel-Abbès (ESI-SBA) hub during the Google Hashcode 2021 qualification round."
      }
    ],

    // Featured projects
    featuredProjectsData: [
      {
        id: 1,
        title: "7orouf w Ar9am",
        shortDescription: "AI-powered Android application that teaches kids numbers and letters.",
        fullDescription: "An AI-powered Android application designed to teach Arabic characters and numbers. It utilizes Deep Learning for real-time handwriting recognition, providing immediate feedback through interactive exercises to enhance learning outcomes.",
        tags: ["Computer Vision", "Deep Learning", "Android", "App", "Educative", "Children"],
        link: "https://github.com/zakariabouchelaghm/7orouf_wa_Ar9am"
      },
      {
        id: 2,
        title: "B-TGNN",
        shortDescription: "Master Graduation Thesis: Botnet detection using Graph Neural Networks.",
        fullDescription: "B-TGNN is a Master Graduation Thesis project that introduces a new architecture for detecting Botnets based on their network traffic. It leverages the power of Graph Neural Networks (GNNs) to analyze complex network topology and traffic patterns, offering a robust solution for identifying malicious botnet activities.",
        tags: ["Deep Learning", "GNN", "Network Security", "Research"],
        link: "https://drive.google.com/drive/folders/1GuQ9RF7DZ4SF91vT32MfEe1a6zOyAENY?usp=sharing"
      },
      {
        id: 3,
        title: "Goûte de Sang",
        shortDescription: "A mobile app for blood donators.",
        fullDescription: "Goûte de sang is a mobile application designed to facilitate blood donation. It connects donors with those in need and blood banks, streamlining the donation process and helping to save lives. The app provides a user-friendly interface for scheduling donations and tracking history.",
        tags: ["Android", "App", "Mobile Development"],
        link: "https://drive.google.com/drive/folders/1NubMDLCUyKtEIXWO1PONOMYFV4IteEdK?usp=sharing"
      },
      {
        id: 4,
        title: "DOC IT",
        shortDescription: "A mobile app to search for medical doctors.",
        fullDescription: "DOC IT is an Android application that simplifies the process of finding medical professionals. Users can search for doctors by specialty, location, and availability, making healthcare access more convenient and efficient.",
        tags: ["Android", "App", "Healthcare"],
        link: "https://drive.google.com/drive/folders/1F2j0HVucKS7NfEhm9aFxpJr-EeY6vjTk?usp=sharing"
      },
      {
        id: 5,
        title: "SmartMemo",
        shortDescription: "An AI Desktop app for note taking and smart queries.",
        fullDescription: "SmartMemo is a Desktop application that simplifies the process of taking notes and querying them. Users can search for notes semantically using AI without the need for specific keywords.",
        tags: ["Desktop", "App", "Note Taking"],
        link: "https://smartmemo-1c04.onrender.com/"
      },
      {
        id: 6,
        title: "Hand Count AI",
        shortDescription: "An AI Desktop app for teaching children Counting with their hands using AI.",
        fullDescription: "Hand Count AI is a Desktop application that teaches children counting numbers from 1 to 10 in an interactive and a new way, using a camera an AI as a guide.",
        tags: ["Computer Vision", "Deep Learning", "Android", "App", "Educative", "Children"],
        link: "https://github.com/zakariabouchelaghm/hand_count_app"
      },
      {
        id: 7,
        title: "Rendez-vous facile",
        shortDescription: "A website to schedule appointments for doctors and clinics.",
        fullDescription: "Rendez-vous facile is a website that simplifies the process of scheduling appointments for doctors and clinics. Users can search for doctors by specialty, location, and availability, making healthcare access more convenient and efficient.",
        tags: ["Web", "App", "Healthcare", "Vibe Coding"],
        link: "https://github.com/zakariabouchelaghm/Rendez-Vous"
      }
    ],

    // Related projects
    relatedProjectsData: [
      {
        id: 5,
        title: "ESI-MAGAZINE",
        shortDescription: "A magazine that gives news about our school and technology.",
        fullDescription: "ESI-MAGAZINE is a digital publication dedicated to sharing the latest news and updates from the school, alongside articles on emerging technology trends and interviews with students. It serves as a platform for students to stay informed and engaged with the campus community and the tech world.",
        tags: ["Magazine", "Technology", "School News", "Media"],
        link: "https://www.esi-sba.dz/fr/index.php/esi-magazine-3eme-edition/"
      }
    ]
  },

  fr: {
    // Hero
    tagline: "Construire l'avenir avec l'Intelligence.",

    // Bio
    aboutMe: "À propos de moi",
    bioText: (
      <>
        Je suis titulaire d'un <strong>Master en Informatique Fondamentale et Intelligence Artificielle</strong>.
        Ma passion est de combler le fossé entre la recherche théorique en IA et les applications pratiques et évolutives.
        Grâce à une compréhension approfondie des algorithmes et des structures de données, je me spécialise dans la création de systèmes intelligents qui résolvent des problèmes concrets.
      </>
    ),
    bioTextRaw: `Je suis titulaire d'un Master en Informatique Fondamentale et Intelligence Artificielle. Ma passion est de combler le fossé entre la recherche théorique en IA et les applications pratiques et évolutives. Grâce à une compréhension approfondie des algorithmes et des structures de données, je me spécialise dans la création de systèmes intelligents qui résolvent des problèmes concrets.`,

    // Skills
    skillsTitle: "Compétences & Outils",
    technicalSkills: "Compétences Techniques",
    languages: "Langues",
    toolsFrameworks: "Outils & Frameworks",

    // Education
    educationTitle: "Formation",
    relevantCoursework: "Cours pertinents :",

    // Experience
    experienceTitle: "Expérience & Certifications",

    // Projects
    featuredProjects: "Projets Phares",
    relatedProjects: "Projets Connexes",
    viewDetails: "Voir les Détails →",
    viewProject: "Voir le Projet →",

    // Awards
    awardsTitle: "Récompenses Notables",

    // Footer
    allRightsReserved: "Tous droits réservés.",

    // Education data
    education: [
      {
        id: 1,
        degree: "Master en Informatique Fondamentale et Intelligence Artificielle",
        school: "Université Ferhat Abbas 1, Sétif",
        year: "2022 - 2025",
        coursework: "Analyse de données, Apprentissage automatique, Apprentissage profond, Recherche opérationnelle, Algorithmes et langages de programmation, Informatique fondamentale."
      },
      {
        id: 2,
        degree: "Cycle Préparatoire",
        school: "École Supérieure en Informatique du 8 Mai 1945, Sidi Bel-Abbès",
        year: "2018 - 2020",
        coursework: "Algorithmes, Mathématiques, Architectures informatiques."
      }
    ],

    // Experience data
    experience: [
      {
        id: 1,
        role: "Python Essentials",
        company: "Centre de Compétences Algeria Telecom, Sétif, Algérie",
        year: "2025",
        description: "Formation Python Essentials complétée."
      },
      {
        id: 2,
        role: "Vice-Directeur de Campus",
        company: "Hult Prize - ESI-SBA",
        year: "2020",
        description: "A servi en tant que Vice-Directeur de Campus, organisant et gérant l'événement Hult Prize à l'ESI-SBA."
      },
      {
        id: 3,
        role: "Délégué",
        company: "AIESEC Algérie - Salama Discover Algeria",
        year: "2020",
        description: "A participé en tant que Délégué au projet Salama Discover Algeria d'AIESEC."
      }
    ],

    // Awards data
    awards: [
      {
        id: 1,
        title: "Première Place - Google Hashcode",
        issuer: "ESI-SBA",
        year: "2021",
        description: "Classé 1er parmi les équipes participantes au hub de l'École Supérieure en Informatique de Sidi Bel-Abbès (ESI-SBA) lors du tour de qualification Google Hashcode 2021."
      }
    ],

    // Featured projects
    featuredProjectsData: [
      {
        id: 1,
        title: "7orouf w Ar9am",
        shortDescription: "Application Android alimentée par l'IA qui enseigne aux enfants les chiffres et les lettres.",
        fullDescription: "Une application Android alimentée par l'IA, conçue pour enseigner les caractères et les chiffres arabes. Elle utilise le Deep Learning pour la reconnaissance d'écriture manuscrite en temps réel, fournissant un retour immédiat grâce à des exercices interactifs pour améliorer les résultats d'apprentissage.",
        tags: ["Vision par Ordinateur", "Deep Learning", "Android", "Application", "Éducatif", "Enfants"],
        link: "https://github.com/zakariabouchelaghm/7orouf_wa_Ar9am"
      },
      {
        id: 2,
        title: "B-TGNN",
        shortDescription: "Thèse de Master : Détection de botnets à l'aide de réseaux de neurones graphiques.",
        fullDescription: "B-TGNN est un projet de thèse de master qui introduit une nouvelle architecture pour détecter les botnets en se basant sur leur trafic réseau. Il exploite la puissance des réseaux de neurones graphiques (GNN) pour analyser la topologie complexe du réseau et les modèles de trafic, offrant une solution robuste pour identifier les activités malveillantes des botnets.",
        tags: ["Deep Learning", "GNN", "Sécurité Réseau", "Recherche"],
        link: "https://drive.google.com/drive/folders/1GuQ9RF7DZ4SF91vT32MfEe1a6zOyAENY?usp=sharing"
      },
      {
        id: 3,
        title: "Goûte de Sang",
        shortDescription: "Une application mobile pour les donneurs de sang.",
        fullDescription: "Goûte de sang est une application mobile conçue pour faciliter le don de sang. Elle connecte les donneurs avec ceux qui en ont besoin et les banques de sang, simplifiant le processus de don et contribuant à sauver des vies. L'application fournit une interface conviviale pour planifier les dons et suivre l'historique.",
        tags: ["Android", "Application", "Développement Mobile"],
        link: "https://drive.google.com/drive/folders/1NubMDLCUyKtEIXWO1PONOMYFV4IteEdK?usp=sharing"
      },
      {
        id: 4,
        title: "DOC IT",
        shortDescription: "Une application mobile pour rechercher des médecins.",
        fullDescription: "DOC IT est une application Android qui simplifie le processus de recherche de professionnels de la santé. Les utilisateurs peuvent rechercher des médecins par spécialité, localisation et disponibilité, rendant l'accès aux soins de santé plus pratique et efficace.",
        tags: ["Android", "Application", "Santé"],
        link: "https://drive.google.com/drive/folders/1F2j0HVucKS7NfEhm9aFxpJr-EeY6vjTk?usp=sharing"
      },
      {
        id: 5,
        title: "SmartMemo",
        shortDescription: "Une application de bureau IA pour la prise de notes et les requêtes intelligentes.",
        fullDescription: "SmartMemo est une application de bureau qui simplifie le processus de prise de notes et d'interrogation. Les utilisateurs peuvent rechercher des notes sémantiquement grâce à l'IA sans avoir besoin de mots-clés spécifiques.",
        tags: ["Bureau", "Application", "Prise de Notes"],
        link: "https://smartmemo-1c04.onrender.com/"
      },
      {
        id: 6,
        title: "Hand Count AI",
        shortDescription: "Une application de bureau IA pour enseigner aux enfants le comptage avec les mains.",
        fullDescription: "Hand Count AI est une application de bureau qui enseigne aux enfants à compter de 1 à 10 de manière interactive et nouvelle, en utilisant une caméra et l'IA comme guide.",
        tags: ["Vision par Ordinateur", "Deep Learning", "Android", "Application", "Éducatif", "Enfants"],
        link: "https://github.com/zakariabouchelaghm/hand_count_app"
      },
      {
        id: 7,
        title: "Rendez-vous facile",
        shortDescription: "Un site web pour prendre des rendez-vous pour les médecins et les cliniques.",
        fullDescription: "Rendez-vous facile est un site web qui simplifie le processus de prise de rendez-vous pour les médecins et les cliniques. Les utilisateurs peuvent rechercher des médecins par spécialité, localisation et disponibilité, rendant l'accès aux soins de santé plus pratique et efficace.",
        tags: ["Web", "Application", "Santé", "Vibe Coding"],
        link: "https://github.com/zakariabouchelaghm/Rendez-Vous"
      }
    ],

    // Related projects
    relatedProjectsData: [
      {
        id: 5,
        title: "ESI-MAGAZINE",
        shortDescription: "Un magazine donnant des nouvelles de notre école et de la technologie.",
        fullDescription: "ESI-MAGAZINE est une publication numérique dédiée au partage des dernières nouvelles et mises à jour de l'école, avec des articles sur les tendances technologiques émergentes et des interviews d'étudiants. C'est une plateforme permettant aux étudiants de rester informés et engagés avec la communauté du campus et le monde technologique.",
        tags: ["Magazine", "Technologie", "Actualités École", "Médias"],
        link: "https://www.esi-sba.dz/fr/index.php/esi-magazine-3eme-edition/"
      }
    ]
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const toggleLanguage = () => setLanguage(prev => prev === 'en' ? 'fr' : 'en');
  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
