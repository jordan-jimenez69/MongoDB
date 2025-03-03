db.ecommerce_produits.find({
    prix:
    {$gte: 50,
   $lte: 200
    }
    } )
    //afficher les produits dont le prix est compris entre 50 et 200