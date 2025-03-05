db.livres.find({ titre: "Livre 1" }).explain("executionStats")

db.livres.find({ auteur: "Auteur 1" }).explain("executionStats")

db.livres.find({ prix: { $gte: 10, $lte: 20 }, note_moyenne: { $gte: 4 } }).explain("executionStats")

db.livres.find({ genre: "Genre1", langue: "Français" }).sort({ note_moyenne: -1 }).explain("executionStats")