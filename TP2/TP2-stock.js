db.ecommerce_produits.find({
 stock: {$gte: 0}
 } )
 //afficher les produits en stock