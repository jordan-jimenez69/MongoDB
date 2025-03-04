//trier les livres par note moyenne décroissante
db.livres.find().sort({ note_moyenne: -1 })

//trouver les 3 livres les plus anciens
db.livres.find({}, { _id: 0, titre: 1, annee_publication: 1 }).sort( { annee_publication: 1 }).limit(3)

//3.
//pas encore fait

//afficher uniquement les titres, auteurs et notes moyennes des livres
db.livres.find({}, { _id: 0, titre: 1, auteur: 1, note_moyenne: 1 })

//Trouvez les utilisateurs qui ont emprunté plus d'un livre
db.utilisateurs.find({}, { _id: 0, email: 1, livres_empruntes: 1 },{ "livres_empruntes": { $size: 2 } })