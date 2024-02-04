// show dbs
// use shopKart
// show collections

// db.items.insertOne({name:"Coco Sport", prize:699, rating:4.5, qty:455, sold:402})

// db.items.insertMany([{name:"Coco Sport", prize:699, rating:4.5, qty:455, sold:402}, {name:"Logitech", prize:1699, rating:4.5, qty:1233, sold:934}, {name:"Realme 80s", prize:52699, rating:4.5, qty:123, sold:93}])

//  db.items.find()

// db.items.find({sold:93})

// db.items.find({sold:{$gt:93}})
// db.items.find({sold:{$gte:93}})
// db.items.find({prize:{$gt:5000}, rating:{$gt:3.5}})

// db.items.find({ $or: [{ prize: {$lt:700} }, {sold:{$gt:93}}] })

// db.items.find({rating:{$gt:4}}, {rating:1, qty:1})