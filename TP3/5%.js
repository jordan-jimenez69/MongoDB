db.ecommerce_produits.updateMany(
    { categorie: "Audio" }, 
    { $mul: { prix: 1.05 } }
  );