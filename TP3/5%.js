db.ecommerce_produits.updateMany(
  { categorie: "Audio" },
  { $mul: { prix: 1.05 } }
);
//augmenter le prix de 5% des produits de la catégorie Audio