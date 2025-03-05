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