db.ecommerce_produits.find({ categorie: "Audio" }).sort({ prix: -1 }).limit(5);
//afficher les 5 produits les plus chers de la catégorie Audio