db.ecommerce_produits.insertMany([
    {
      nom: "Smartphone Samsung Galaxy S23",
      description: "Smartphone haut de gamme avec écran AMOLED",
      prix: 999,
      stock: 25,
      categorie: "Téléphonie",
      sous_categorie: "Smartphones",
      caracteristiques: {
        marque: "Samsung",
        ecran: "6.5 pouces AMOLED",
        stockage: "256Go",
        batterie: "5000mAh"
      },
      commentaires: [
        { utilisateur: "Charlie", note: 5, commentaire: "L'écran est magnifique." }
      ],
      tags: ["smartphone", "Samsung", "Galaxy", "Android"]
    },
    {
      nom: "Casque Bluetooth Sony WH-1000XM4",
      description: "Casque audio avec réduction de bruit active",
      prix: 350,
      stock: 30,
      categorie: "Audio",
      sous_categorie: "Casques",
      caracteristiques: {
        marque: "Sony",
        autonomie: "30h",
        reduction_bruit: true,
        connectivite: "Bluetooth 5.0"
      },
      commentaires: [
        { utilisateur: "David", note: 5, commentaire: "Incroyable réduction de bruit." },
        { utilisateur: "Emma", note: 4, commentaire: "Très confortable." }
      ],
      tags: ["casque", "Bluetooth", "Sony", "réduction de bruit"]
    },
    {
      nom: "TV OLED LG 55 pouces",
      description: "Télévision OLED 4K UHD avec HDR",
      prix: 1500,
      stock: 10,
      categorie: "Image & Son",
      sous_categorie: "Télévisions",
      caracteristiques: {
        marque: "LG",
        ecran: "55 pouces OLED",
        resolution: "4K UHD",
        HDR: true
      },
      commentaires: [
        { utilisateur: "Lucas", note: 5, commentaire: "Qualité d'image impressionnante." }
      ],
      tags: ["TV", "OLED", "LG", "4K"]
    },
    {
      nom: "Montre connectée Apple Watch Series 9",
      description: "Montre connectée avec suivi de santé avancé",
      prix: 499,
      stock: 20,
      categorie: "Accessoires",
      sous_categorie: "Montres connectées",
      caracteristiques: {
        marque: "Apple",
        autonomie: "18h",
        connectivite: "Bluetooth, Wi-Fi",
        suivi_sante: ["ECG", "Saturation O2", "Fréquence cardiaque"]
      },
      commentaires: [
        { utilisateur: "Sophie", note: 4, commentaire: "Pratique au quotidien." }
      ],
      tags: ["montre", "Apple", "connectée", "santé"]
    },
    {
      nom: "Aspirateur robot iRobot Roomba i7",
      description: "Aspirateur robot intelligent avec cartographie",
      prix: 600,
      stock: 8,
      categorie: "Maison",
      sous_categorie: "Aspirateurs",
      caracteristiques: {
        marque: "iRobot",
        autonomie: "90 min",
        connectivite: "Wi-Fi",
        cartographie_intelligente: true
      },
      commentaires: [
        { utilisateur: "Nathan", note: 5, commentaire: "Super efficace !" }
      ],
      tags: ["aspirateur", "robot", "iRobot", "intelligent"]
    },
    {
      nom: "Enceinte Bluetooth JBL Flip 6",
      description: "Enceinte portable étanche avec son puissant",
      prix: 130,
      stock: 40,
      categorie: "Audio",
      sous_categorie: "Enceintes",
      caracteristiques: {
        marque: "JBL",
        autonomie: "12h",
        etanche: true,
        connectivite: "Bluetooth 5.1"
      },
      commentaires: [
        { utilisateur: "Thomas", note: 4, commentaire: "Son de bonne qualité." }
      ],
      tags: ["enceinte", "JBL", "Bluetooth", "portable"]
    },
    {
      nom: "Souris Logitech MX Master 3",
      description: "Souris ergonomique avec molette ultra rapide",
      prix: 100,
      stock: 50,
      categorie: "Informatique",
      sous_categorie: "Périphériques",
      caracteristiques: {
        marque: "Logitech",
        capteur: "Laser",
        connectivite: "Bluetooth, USB",
        autonomie: "70 jours"
      },
      commentaires: [
        { utilisateur: "Paul", note: 5, commentaire: "Parfaite pour le travail." }
      ],
      tags: ["souris", "Logitech", "Bluetooth", "ergonomique"]
    },
    {
      nom: "Console PlayStation 5",
      description: "Console de jeux nouvelle génération",
      prix: 550,
      stock: 5,
      categorie: "Jeux vidéo",
      sous_categorie: "Consoles",
      caracteristiques: {
        marque: "Sony",
        stockage: "825Go SSD",
        resolution_max: "8K",
        lecteur_disque: true
      },
      commentaires: [
        { utilisateur: "Kevin", note: 5, commentaire: "Des jeux incroyables." }
      ],
      tags: ["console", "PlayStation", "Sony", "gaming"]
    },
    {
      nom: "Machine à café Nespresso Vertuo",
      description: "Machine à café automatique avec capsules",
      prix: 180,
      stock: 30,
      categorie: "Cuisine",
      sous_categorie: "Cafetières",
      caracteristiques: {
        marque: "Nespresso",
        capacite_reservoir: "1.1L",
        pression: "19 bars",
        compatible_capsules: true
      },
      commentaires: [
        { utilisateur: "Julie", note: 4, commentaire: "Le café est excellent." }
      ],
      tags: ["café", "Nespresso", "capsules", "automatique"]
    }
  ])
  