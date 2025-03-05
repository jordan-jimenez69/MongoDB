db.livres.createIndex({ titre: 1, auteur: 1, prix: 1 });

db.livres.find({ titre: "Livre 1" }, { _id: 0, titre: 1, auteur: 1, prix: 1 }).explain("executionStats");

db.livres.createIndex({ isbn: 1 }, { unique: true })

db.livres.insertOne({
    titre: "Livre Dupliqué",
    auteur: "Auteur Dupliqué",
    annee_publication: 2025,
    editeur: "Editeur Dupliqué",
    genre: ["Genre Dupliqué"],
    nombre_pages: 300,
    langue: "Français",
    disponible: true,
    stock: 5,
    note_moyenne: 4.5,
    description: "Description du livre dupliqué",
    prix: 15.99,
    isbn: "9782070000004", // ISBN dupliqué
    date_ajout: new Date()
})

db.livres.createIndex({ titre: 1 }, { partialFilterExpression: { disponible: true } })

db.setProfilingLevel(1, { slowms: 100 })

db.system.profile.find({ millis: { $gt: 100 } })

db.livres.getIndexes()

db.livres.dropIndex("titre_1_auteur_1_prix_1")