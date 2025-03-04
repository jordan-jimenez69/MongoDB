db.livres.insertMany([
    {
      titre: "Le Petit Prince",
      auteur: "Antoine de Saint-Exupéry",
      annee_publication: 1943,
      editeur: "Gallimard",
      genre: ["Conte", "Philosophie"],
      nombre_pages: 96,
      langue: "Français",
      disponible: true,
      stock: 3,
      note_moyenne: 4.8,
      description: "Un pilote d'avion, qui s'est écrasé dans le désert du Sahara, rencontre un jeune prince venu d'une autre planète...",
      prix: 7.50,
      isbn: "9782070612758",
      date_ajout: new Date("2023-01-15")
    },
    // Ajouter d'autres livres...
]);