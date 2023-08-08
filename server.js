let express = require("express");
let app = express();
//const { Router } = require('express');
//app.set('view engine', 'html');

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
require('./dbConnection.js');
let router  = require('./routes/router.js');
app.use('/api/cat', router)


//const { MongoClient, ServerApiVersion } = require('mongodb');
//const uri = "mongodb+srv://tbvsev:OJgkbTilrzZyHzfU@cluster0.ht0dfo8.mongodb.net/?retryWrites=true&w=majority";
var port = process.env.port || 3000;

//let collection;

/*
async function runDataBase() {
    try {
        await client.connect();
        collection = client.db('test').collection('Cats');
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }
    catch (ex) {
        console.error();
    }
}
*/
/*
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
*/


/*function insertCat(cat, callback) {
    collection.insertOne(cat, callback);
}

 async function getAllCats(callback) {
    callback = await collection.find({}).toArray(callback);
    return callback
    }
*/

//app.get('/', function (req, res) {
//    res.render('index');
//});

/*
app.get('/api/cats', (req,res)=>{
    getAllCats().then(function(result){
        res.json({statusCode:200,data:result,message:'success'});
        });
});


app.post('/api/cat', (req, res) => {
    let cat = req.body;
    console.log(cat);
    insertCat(cat, (err, result) => {
        if (!err) {
            res.json({ statusCode: 201, data: result, message: 'success' });
        }
    });
});
*/


app.listen(port, () => {
    console.log("App listening to: " + port);
   // runDataBase();
});



