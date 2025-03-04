// modifier le titre du livre "Les Misérables" en "Les Misérable"
db.livres.updateOne({ titre: "Les Misérables" }, { $set: { titre: "Les Misérable" } })

// //mettre à jour le stock de tous les livres à 5
db.livres.updateMany({}, { $set: { stock: 5 } })

//marquez le livre "Les Misérable" comme non disponible
db.livres.updateOne({ titre: "Les Misérable" }, { $set: { disponible: false } })

//ajoutez un nouveau emprunt à l'utilisateur avec l'email "
db.utilisateurs.updateOne(
    { email: "lucas.martin@example.com" },
    { $push: { livres_empruntes: { livre_id: ObjectId("67c6b97d714327695300727e"), titre: "Le Petit Prince", date_emprunt: new Date(), date_retour_prevue: new Date() } } }
)

//ajoutez un nouveau tag à l'utilisateur avec l'email "
db.utilisateurs.updateOne(
    { email: "lucas.martin@example.com" },
    { $push: { tags: "Utilisateur premium" } }
)