db.ecommerce_produits.find({
    prix:
    {$gte: 50,
   $lte: 200
    }
    } )