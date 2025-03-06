//{ nom: "Lyon", coordinates: [4.8357, 45.7640] },
//{ nom: "Marseille", coordinates: [5.3698, 43.2965] }

// 2.1
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

//2.2
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

db.bibliotheques.aggregate([
    {
        $geoNear: {
            near: { type: "Point", coordinates: [2.3522, 48.8566] },
            distanceField: "distance",
            spherical: true
        }
    },
    {
        $sort: { distance: 1 }
    }
])

//2.3 
db.utilisateurs.find({
    "adresse.localisation": {
      $geoWithin: {
        $geometry: {
          type: "Polygon",
          coordinates: [[
            [2.3500, 48.8500], [2.3600, 48.8500], 
            [2.3600, 48.8600], [2.3500, 48.8600], 
            [2.3500, 48.8500]
          ]]
        }
      }
    }
  });


  db.utilisateurs.find({
    "adresse.localisation": {
        $geoWithin: {
            $geometry: {
                type: "Polygon",
                coordinates: [[[2.34, 48.85], [2.36, 48.85], [2.36, 48.84], [2.34, 48.84], [2.34, 48.85]]]
            }
        }
    }
})

db.rues.insertOne({
    nom: "Rue de Rivoli",
    localisation: {
        type: "LineString",
        coordinates: [[2.3522, 48.8566], [2.3622, 48.8566]]
    }
})

db.bibliotheques.find({
    zone_service: {
        $geoIntersects: {
            $geometry: {
                type: "LineString",
                coordinates: [[2.3522, 48.8566], [2.3622, 48.8566]]
            }
        }
    }
})

//2.4
db.livraisons.insertOne({
    livre_id: ObjectId("67c6b97d714327695300727e"),
    utilisateur_id: ObjectId("67c6ba637143276953007283"),
    point_depart: {
        type: "Point",
        coordinates: [2.3522, 48.8566]
    },
    point_arrivee: {
        type: "Point",
        coordinates: [2.3622, 48.8566]
    },
    position_actuelle: {
        type: "Point",
        coordinates: [2.3572, 48.8566]
    },
    itineraire_planifie: {
        type: "LineString",
        coordinates: [[2.3522, 48.8566], [2.3622, 48.8566]]
    }
})