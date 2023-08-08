let client = require('../dbConnection.js');
let collection = client.db('test').collection('Cats');
console.log("Pinged your deployment. You successfully connected to MongoDB!");


function insertCat(cat, callback) {
    collection.insertOne(cat, callback);
}

function getAllCats(callback) {
    callback = collection.find({}).toArray(callback);
}

module.exports = { insertCat, getAllCats }
