//{ nom: "Lyon", coordinates: [4.8357, 45.7640] },
//{ nom: "Marseille", coordinates: [5.3698, 43.2965] }

db.utilisateurs.updateOne(
    { _id: ObjectId("67c6ba637143276953007283") },
    {
        $set: {
            "adresse.localisation": {
                type: "Point",
                coordinates: [4.8357, 45.7640]
            }
        }
    }
);

db.bibliotheques.insertMany([
    {
      nom: "Bibliothèque Municipale de Lyon",
      adresse: {
        rue: "30 Boulevard Marius Vivier Merle",
        ville: "Lyon",
        code_postal: "69003"
      },
      localisation: {
        type: "Point",
        coordinates: [4.8685, 45.7602]
      },
      zone_service: {
        type: "Polygon",
        coordinates: [[
          [4.8600, 45.7550], [4.8750, 45.7550], 
          [4.8750, 45.7650], [4.8600, 45.7650], 
          [4.8600, 45.7550] 
        ]]
      }
    }
    // ajouter d'autres bibliothèques...
  ]);
  

db.utilisateurs.createIndex({ "adresse.localisation": "2dsphere" })

db.bibliotheques.createIndex({ localisation: "2dsphere" })

db.utilisateurs.find({
    "adresse.localisation": {
        $near: {
            $geometry: {
                type: "Point",
                coordinates: [2.3522, 48.8566]
            },
            $maxDistance: 5000
        }
    }
}).limit(5)

db.bibliotheques.find({
    localisation: {
        $near: {
            $geometry: {
                type: "Point",
                coordinates: [2.3522, 48.8566]
            }
        }
    }
})