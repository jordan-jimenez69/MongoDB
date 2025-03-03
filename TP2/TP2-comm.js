db.ecommerce_produits.find({
    "commentaires": { $size: 3 }
    });
    //afficher les produits qui ont 3 commentaires