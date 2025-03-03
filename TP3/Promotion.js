db.ecommerce_produits.updateMany(
    { categorie: "Téléphonie" },
    { $set: { promotion: true } }  
  );
  //ajouter le champ promotion à tous les produits de la catégorie Téléphonie