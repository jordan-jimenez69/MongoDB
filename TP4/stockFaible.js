db.ecommerce_produits.find( {
    tags: { $all: ["premium"] },
    stock: { $lt: 5 },
}
);