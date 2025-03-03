db.ecommerce_produits.find({
 stock: {$gte: 0}
 } )