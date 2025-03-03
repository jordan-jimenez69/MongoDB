db.ecommerce_produits.updateOne(
    { _id: ObjectId("67c593e80c8bb2e919daf7e3") },  
    { $inc: { stock: -1 } }  
  );