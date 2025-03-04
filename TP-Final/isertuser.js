db.utilisateurs.insertMany([
    {
      nom: "Dupont",
      prenom: "Marie",
      email: "marie.dupont@example.com",
      age: 28,
      adresse: {
        rue: "123 Avenue des Livres",
        ville: "Lyon",
        code_postal: "69002"
      },
      date_inscription: new Date("2022-12-10"),
      livres_empruntes: [
        {
          livre_id: ObjectId("67c6b97d7143276953007282"),
          titre: "Les Misérables",
          date_emprunt: new Date("2023-02-15"),
          date_retour_prevue: new Date("2023-03-15")
        }
      ],
      tags: ["fiction", "histoire"]
    },
    // Ajouter d'autres utilisateurs...
]);