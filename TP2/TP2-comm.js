db.ecommerce_produits.find({
    "commentaires": { $size: 3 }
    });