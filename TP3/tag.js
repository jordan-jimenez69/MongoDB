db.ecommerce_produits.updateMany(
    { categorie: "Téléphonie" },  
    { $push: { tags: "Samsung" } }
  );
  