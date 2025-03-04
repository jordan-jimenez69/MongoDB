//cherchez les livres disponibles
db.livres.find({ disponible: true })

//cherchez les livres ou année de publi est supérieur à 2000
db.livres.find({ annee_publication: { $gt: 2000 } })

//cherchez les livres ou auteur est Victor Hugo
db.livres.find({ auteur: "Victor Hugo" })

//cherchez les livres ou note moyenne est supérieur à 4
db.livres.find({ note_moyenne: { $gt: 4 } })

//chercher les utilisateurs qui habitent à Paris
db.utilisateurs.find({ "adresse.ville": "Paris" })

//cherchez les livres ou genre est Drame
db.livres.find({ genre: "Drame" })

//cherchez les livres ou prix est inférieur à 15 et note moyenne est supérieur à 4
db.livres.find({ prix: { $lt: 15 }, note_moyenne: { $gt: 4 } })

//cherchez les utilisateurs qui ont emprunté le livre avec le titre "Les Misérables"
db.utilisateurs.find({ "livres_empruntes.titre": "Les Misérables" })