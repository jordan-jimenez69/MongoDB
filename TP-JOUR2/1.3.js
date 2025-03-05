db.livres.createIndex({ titre: "text", description: "text" })

db.livres.find({ $text: { $search: "Livre 1" } }).explain("executionStats")

db.createCollection("sessions_utilisateurs", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["utilisateur_id", "date_derniere_activite", "donnees_session"],
            properties: {
                utilisateur_id: {
                    bsonType: "objectId",
                    description: "must be an objectId and is required"
                },
                date_derniere_activite: {
                    bsonType: "date",
                    description: "must be a date and is required"
                },
                donnees_session: {
                    bsonType: "object",
                    description: "must be an object and is required"
                }
            }
        }
    }
})

db.sessions_utilisateurs.insertOne({
    utilisateur_id: ObjectId("67c6ba637143276953007283"),
    date_derniere_activite: new Date(),
    donnees_session: {navigateur: "Edge"}
    })    


db.sessions_utilisateurs.createIndex({ date_derniere_activite: 1 }, { expireAfterSeconds: 1800 })