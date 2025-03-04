//Supprimer un livre
db.livres.deleteOne(
  { titre: "Les Misérable" }
)

// Supprimer plusieurs livres
db.livres.deleteMany(
  { auteur: "Antoine de Saint-Exupéry" }
)

// Supprimer un utilisateur
db.utilisateurs.deleteOne(
  { email: "marie.dupont@example.com" }
)