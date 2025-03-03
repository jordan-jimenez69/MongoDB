db.ecommerce_produits.updateMany(
    { categorie: "audio" }, 
    { $mul: { prix: 1.05 } }
  );