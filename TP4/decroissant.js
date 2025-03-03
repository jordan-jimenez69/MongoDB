db.ecommerce_produits.find({ categorie: "Audio" }).sort({ prix: -1 }).limit(5);
