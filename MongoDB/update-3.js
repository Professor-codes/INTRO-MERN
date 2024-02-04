// show dbs
// use shopKart
// show collections

// CRUD - CREATE READ UPDATE DELETE

db.items.find()
db.items.updateOne({name:"Coco Sport"}, {$set:{rating:4.8}})