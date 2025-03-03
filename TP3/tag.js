db.ecommerce_produits.updateMany(
    { categorie: "Téléphonie" },  
    { $push: { tags: "Samsung" } }
  );
  //ajouter le tag Samsung à tous les produits de la catégorie Téléphonie