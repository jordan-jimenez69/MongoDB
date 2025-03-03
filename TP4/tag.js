db.ecommerce_produits.find({
    tags: { $all: ["Samsung", "Galaxie"] },
});