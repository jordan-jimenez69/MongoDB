db.ecommerce_produits.find( {
    tags: { $all: ["premium"] },
    stock: { $lt: 5 },
}
);
//afficher les produits qui ont un stock inférieur à 5 et qui sont premium