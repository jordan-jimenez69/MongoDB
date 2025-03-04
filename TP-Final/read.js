db.livres.find({ disponible: true })

db.livres.find({ annee_publication: { $gt: 2000 } })
