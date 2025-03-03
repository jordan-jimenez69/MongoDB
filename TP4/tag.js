db.ecommerce_produits.find({
    tags: { $all: ["Samsung", "Galaxie"] },
});
//afficher les produits qui ont les tags Samsung et Galaxie