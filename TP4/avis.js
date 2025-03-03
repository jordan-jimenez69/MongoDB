db.ecommerce_produits.find( {
commentaires: { $elemMatch: { note: 5 } },
}
);
//afficher les produits qui ont une note de 5