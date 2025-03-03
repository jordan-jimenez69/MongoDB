db.ecommerce_produits.find( {
commentaires: { $elemMatch: { note: 5 } },
}
);