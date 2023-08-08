let collection = require('../model/cat.js')

function insertCat(req, res) {
    let cat = req.body;
    collection.insertCat(cat, (err, result) => {
        if (!err) {
            res.json({ statusCode: 201, data: result, message: 'success' });
        }
    });
}

function getAllCats(req, res) {
    collection.getAllCats((err, result) => {
        if (!err) {
            res.json({ statusCode: 200, data: result, message: 'success' });
        }

    });
}

module.exports = {insertCat, getAllCats}

