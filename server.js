let express = require("express");
let app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
require('./dbConnection.js');
let router  = require('./routes/router.js');
app.use('/api/cat', router)

var port = process.env.port || 3000;

app.listen(port, () => {
    console.log("App listening to: " + port);
});