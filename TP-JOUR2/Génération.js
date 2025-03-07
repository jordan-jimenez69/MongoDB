const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb+srv://jimenezjordanpro:Fruuito69@mongo-cours.9tuz2.mongodb.net/?retryWrites=true&w=majority&appName=Mongo-Cours";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db('bibliotheque_amazon');
        const collection = database.collection('livres');

        const livres = [];
        for (let i = 0; i < 1000; i++) {
            livres.push({
                titre: `Livres ${i + 1}`,
                auteur: `Auteurs ${i + 1}`,
                annee_publication: 1900 + i,
                editeur: `Editeurs ${i + 1}`,
                genre: [`Genre${i % 3 + 1}`, `Genre${i % 4 + 2}`],
                nombre_pages: 100 + i,
                langue: "Français",
                disponible: Math.random() < 0.8, 
                stock: Math.floor(Math.random() * 10) + 1,
                note_moyenne: (Math.random() * 5).toFixed(1),
                description: `Description du livres ${i + 1}`,
                prix: (5 + Math.random() * 20).toFixed(2), 
                isbn: `9782070${String(i).padStart(6, '0')}`,
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