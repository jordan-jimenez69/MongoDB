db.livres.createIndex({ titre: 1 })

db.livres.createIndex({ auteur: 1 })

db.livres.createIndex({ prix: 1, note_moyenne: 1 })

db.livres.createIndex({ genre: 1, langue: 1, note_moyenne: -1 })