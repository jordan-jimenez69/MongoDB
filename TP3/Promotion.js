db.ecommerce_produits.updateMany(
    { categorie: "Téléphonie" },
    { $set: { promotion: true } }  
  );
  