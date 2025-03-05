const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb+srv://jimenezjordanpro:MDP@mongo-cours.9tuz2.mongodb.net/?retryWrites=true&w=majority&appName=Mongo-Cours";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db('bibliotheque_amazon');
        const collection = database.collection('livres');

        const livres = [];
        for (let i = 0; i < 1000; i++) {
            livres.push({
                titre: `Livre ${i + 1}`,
                auteur: `Auteur ${i + 1}`,
                annee_publication: 1900 + (i % 121),
                editeur: `Editeur ${i + 1}`,
                genre: ["Genre1", "Genre2"],
                nombre_pages: 100 + (i % 400),
                langue: "Français",
                disponible: true,
                stock: 1 + (i % 10), 
                note_moyenne: (Math.random() * 5).toFixed(1), 
                description: `Description du livre ${i + 1}`,
                prix: (5 + (i % 20)).toFixed(2),
                isbn: `97820706127${(i % 100).toString().padStart(2, '0')}`,
                date_ajout: new Date(`2023-${(i % 12 + 1).toString().padStart(2, '0')}-${(i % 28 + 1).toString().padStart(2, '0')}`)
            });
        }

        const result = await collection.insertMany(livres);
        console.log(`${result.insertedCount} livres insérés.`);
    } finally {
        await client.close();
    }
}

main().catch(console.error);